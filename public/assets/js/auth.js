function getAuthStatus() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      document.querySelector('#authStatus').innerHTML = `
        <img id="logo-small" src="assets/img/logo-scorched-dark.svg">
          <p>Logged in as ${user.displayName}
        <button onclick="googleLogout()">Log Out</button>
        </p>`
    } else {
      document.querySelector('#authStatus').innerHTML = `
        <p>Not logged in
          <button onclick="googleLogin()">Google Log In</button>
        </p>`
    }
  })
}

function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider()
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function(res) {
      // You can use it to access the Google API.
      sessionStorage.setItem('token', res.credential.accessToken)
      sessionStorage.setItem('user', res.user)
      renderPage(res)
    })
    .catch(function(err) {
      authStatus.innerHTML = err.message
      console.log(err.code, err.message, err.email, err.credential)
    })
}

function googleLogout() {
  firebase
    .auth()
    .signOut()
    .then(function() {
      sessionStorage.clear()
      location.reload()
    })
    .catch(err => {
      authStatus.innerHTML = err
    })
}
