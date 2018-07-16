// IMPORT //////////////////////////////////////////////////////////////////////
import fs from 'fs'
import path from 'path'
import rimraf from 'rimraf'
import yargs from 'yargs'
import yaml from 'js-yaml'
import browser from 'browser-sync'
import named from 'vinyl-named'

import gulp from 'gulp'
import plugins from 'gulp-load-plugins'
import jest from 'jest'
import { exec } from 'child_process'

import webpackStream from 'webpack-stream'
import webpack from 'webpack'

import panini from 'panini'

import pngquant from 'imagemin-pngquant'
import mozjpeg from 'imagemin-mozjpeg'
import giflossy from 'imagemin-giflossy'

import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import sfx from 'sfx'
import chalk from 'chalk'

// ASSIGNMENT //////////////////////////////////////////////////////////////////
const PRODUCTION = !!yargs.argv.production
const PLUGINS = plugins()
const {
  COMPAT,
  PORT,
  UIPORT,
  WPORT,
  UNCSS_OPTIONS,
  PATHS,
  IMAGEMIN
} = yaml.load(fs.readFileSync('config.yml', 'utf8'))

// TASKS ///////////////////////////////////////////////////////////////////////
gulp.task(
  'build',
  gulp.series(
    gulp.parallel(pretty, clean),
    gulp.parallel(pages, sass, gulp.series(javascript, test), images, copy, root)
  )
)

gulp.task('default', gulp.series('build', server, watch))

// UTILITY FUNCTIONS ///////////////////////////////////////////////////////////
function clean(done) {
  rimraf(PATHS.build, done)
}
function copy() {
  return gulp.src(PATHS.assets).pipe(gulp.dest(PATHS.build + '/assets'))
}
function root() {
  return gulp.src(PATHS.root).pipe(gulp.dest(PATHS.build + '/'))
}
function server(done) {
  browser.init({
    server: PATHS.build,
    port: PORT,
    ui: { port: UIPORT, weinre: { port: WPORT } }
  })
  done()
}
function reload(done) {
  browser.reload()
  done()
}
function sassError(err) {
  notify.onError({
    title: 'Sass Error',
    message: '<%= error.message %>',
    wait: true
  })(err)
  sfx.pop()
  this.emit('end')
}
function test(done) {
  jest.runCLI({ config: { coverage: true } }, '.')
  done()
}
function pretty(done) {
  exec(
    `./node_modules/prettier/bin-prettier.js --single-quote --no-semi --write 'src/**/*.js' '!**/lib/**/*.js' '!**/*.min.js'`,
    function(err) {
      if (err) {
        console.error(err)
      } else {
        console.log(chalk.grey('Auto-formatted src/ with Prettier >>'))
      }
    }
  )
  done()
}

// PAGES ///////////////////////////////////////////////////////////////////////
function pages() {
  return gulp
    .src('src/pages/**/*.{html,hbs,handlebars}')
    .pipe(
      panini({
        root: 'src/pages/',
        layouts: 'src/layouts/',
        partials: 'src/partials/',
        data: 'src/data/',
        helpers: 'src/helpers/'
      })
    )
    .pipe(gulp.dest(PATHS.build))
}
function resetPages(done) {
  panini.refresh()
  done()
}

// SASS ////////////////////////////////////////////////////////////////////////
function sass() {
  return gulp
    .src('src/assets/scss/app.scss')
    .pipe(plumber({ errorHandler: sassError }))
    .pipe(PLUGINS.sass({ includePaths: PATHS.sass }))
    .pipe(PLUGINS.autoprefixer({ browsers: COMPAT }))
    // .pipe(PLUGINS.if(PRODUCTION, PLUGINS.uncss(UNCSS_OPTIONS)))
    .pipe(PLUGINS.if(PRODUCTION, PLUGINS.cleanCss({ compatibility: 'ie9' })))
    .pipe(gulp.dest(PATHS.build + '/assets/css'))
    .pipe(browser.reload({ stream: true }))
}

// JS //////////////////////////////////////////////////////////////////////////
const webpackConfig = {
  devtool: PRODUCTION ? 'eval' : 'source-map',
  module: {
    rules: [{
      exclude: [path.resolve(__dirname, 'node_modules')],
      test: /(.js|.ts|.jsx)$/, use: [{ loader: 'babel-loader' }],
    }]
  }
}
function javascript() {
  return gulp
    .src(PATHS.entries)
    .pipe(named())
    .pipe(webpackStream(webpackConfig, webpack))
    .on('error', err => {
      notify.onError({ title: 'JS Error', message: 'Unable to compile.' })(err)
      sfx.pop()
    })
    .pipe(PLUGINS.if(PRODUCTION, PLUGINS.uglify({ mangle: true })))
    .pipe(gulp.dest(PATHS.build + '/assets/js'))
}

// IMAGES //////////////////////////////////////////////////////////////////////
function images() {
  return gulp
    .src('src/assets/img/**/*')
    .pipe(
      PLUGINS.if(
        PRODUCTION,
        PLUGINS.imagemin([
          pngquant(IMAGEMIN.pngquant),
          giflossy(IMAGEMIN.giflossy),
          mozjpeg(IMAGEMIN.mozjpeg)
        ])
      )
    )
    .pipe(gulp.dest(PATHS.build + '/assets/img'))
}

// WATCH ///////////////////////////////////////////////////////////////////////
function watch() {
  gulp.watch(PATHS.assets, copy)
  gulp.watch(PATHS.root, copy)
  gulp.watch('src/pages/**/*.html').on('all', gulp.series(sass, pages, reload))
  gulp
    .watch('src/{layouts,partials}/**/*.html')
    .on('all', gulp.series(resetPages, pages, reload))
  gulp.watch('src/assets/scss/**/*.scss').on('all', sass, reload)
  gulp
    .watch('src/assets/js/**/*.js')
    .on('all', gulp.series(javascript, gulp.parallel(test, reload)))
  gulp.watch('src/assets/img/**/*').on('all', gulp.series(images, reload))
}
