export function getAuthStatus() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      qs('.log-in').addEventListener('click', () => googleLogout())
      qs('.log-in-status').innerHTML = `Welcome, ${user.displayName}`
      qs('.log-in').innerHTML = 'Log Out'
    } else {
      qs('.log-in').addEventListener('click', () => googleLogin())
      qs('.log-in').innerHTML = 'Log In'
    }
  })

  if (
    typeof user === 'undefined' ||
    user === null ||
    sessionStorage.getItem('token') === null
  ) {
    let href = window.location.href
    href = href.substring(0, href.length - 1)
    href === window.location.origin ? null : (window.location.href = '/')
  }
}

window.googleLogin = function() {
  const provider = new firebase.auth.GoogleAuthProvider()
  document
    .querySelector('body')
    .insertAdjacentHTML('afterbegin', `<div id="splash"></div>`)

  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function(res) {
      // You can use it to access the Google API.
      sessionStorage.setItem('token', res.credential.accessToken)
      sessionStorage.setItem('user', JSON.stringify(res.user))
      sessionStorage.setItem('fresh-login', true)

      window.location.href = '/app'
    })
    .catch(function(err) {
      console.log(err.code, err.message, err.email, err.credential)
      try {
        authStatus.innerHTML = err.message
      } catch (err2) {
        console.log(err2)
      }
    })
}

window.googleLogout = function() {
  firebase
    .auth()
    .signOut()
    .then(function() {
      sessionStorage.clear()
      window.location.href = '/'
    })
    .catch(err => {
      try {
        authStatus.innerHTML = err
      } catch (e) {
        console.log(e)
      }
    })
}
