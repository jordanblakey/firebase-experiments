// FFRONT POST-INSTALL LOGO ////////////////////////////////////////////////////
const chalk = require('chalk')
const ff = `
FFRONT >>`
console.log(chalk.yellow.bold(ff))

// GULP ERROR FIX (TEMP) ///////////////////////////////////////////////////////
const fs = require('fs')
let str = ''
str = fs.readFileSync('node_modules/interpret/index.js').toString('utf-8')
str = str.replace(/@babel\/register/g, 'babel-register')
fs.writeFile('node_modules/interpret/index.js', str, function(err){
  if (err) { console.log(err) }
})