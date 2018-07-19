/*eslint-disable */
// CACHE POLYFILL
Cache.prototype.add ||
  (Cache.prototype.add = function(t) {
    return this.addAll([t])
  }),
  Cache.prototype.addAll ||
    (Cache.prototype.addAll = function(r) {
      var n = this
      function o(t) {
        ;(this.name = 'NetworkError'), (this.code = 19), (this.message = t)
      }
      return (
        (o.prototype = Object.create(Error.prototype)),
        Promise.resolve()
          .then(function() {
            if (arguments.length < 1) throw new TypeError()
            return (
              (r = r.map(function(t) {
                return t instanceof Request ? t : String(t)
              })),
              Promise.all(
                r.map(function(t) {
                  'string' == typeof t && (t = new Request(t))
                  var e = new URL(t.url).protocol
                  if ('http:' !== e && 'https:' !== e)
                    throw new o('Invalid scheme')
                  return fetch(t.clone())
                })
              )
            )
          })
          .then(function(t) {
            return Promise.all(
              t.map(function(t, e) {
                return n.put(r[e], t)
              })
            )
          })
          .then(function() {})
      )
    }),
  CacheStorage.prototype.match ||
    (CacheStorage.prototype.match = function(n, o) {
      var c = this
      return this.keys().then(function(t) {
        var r
        return t.reduce(function(t, e) {
          return t.then(function() {
            return (
              r ||
              c
                .open(e)
                .then(function(t) {
                  return t.match(n, o)
                })
                .then(function(t) {
                  return (r = t)
                })
            )
          })
        }, Promise.resolve())
      })
    })
/*eslint-enable */

// ADD TO INDEX
// if('serviceWorker' in navigator) {
//   navigator.serviceWorker
//     .register('/service-worker.js')
//     .then(() => { console.log("Service Worker Registered") })
// }

// DEFINE WHAT FILES TO CACHE
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('maincache').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/assets/css/app.css',
        '/assets/js/app.js'
      ])
    })
  )
})

// INTERCEPT REQUESTS AND PULL FROM THE CACHE IF MATCHES
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.open('maincache').then(function(cache) {
      return cache.match(e.request).then(function(response) {
        return (
          response ||
          fetch(e.request).then(function(response) {
            // console.log('Adding to cache:', response.url)
            cache.put(e.request, response.clone())
            return response
          })
        )
      })
    })
  )
})
