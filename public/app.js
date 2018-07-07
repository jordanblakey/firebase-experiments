document.addEventListener('DOMContentLoaded', function() {
  // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
  // firebase.auth().onAuthStateChanged(user => { });
  // firebase.database().ref('/path/to/ref').on('value', snapshot => { });
  // firebase.messaging().requestPermission().then(() => { });
  // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
  // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

  try {
    firebaseInit()
    let loggedInUser
    getAuthStatus()
  } catch (e) {
    console.error(e)
    document.getElementById('load').innerHTML =
      'Error loading the Firebase SDK, check the console.'
  }
})

function firebaseInit() {
  app = firebase.app()
  features = ['auth', 'database', 'messaging', 'storage'].filter(
    feature => typeof app[feature] === 'function'
  )
  document.getElementById(
    'load'
  ).innerHTML = `Firebase SDK loaded with ${features.join(', ')}`
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION) // SESSION, LOCAL
  firestore = firebase.firestore()
  settings = { /* your settings... */ timestampsInSnapshots: true }
  firestore.settings(settings)
}

function getAuthStatus() {
  firebase.auth().onAuthStateChanged(function(user) {
    let authStatus = document.querySelector('#authStatus')
    if (user) {
      loggedInUser = user
      renderPage(user)
      authStatus.innerHTML = `<p>Logged in as ${
        loggedInUser.displayName
      } <button onclick="googleLogout()">Log Out</button></p>`
    } else {
      authStatus.innerHTML = `<p>Not logged in <button onclick="googleLogin()">Google Log In</button></p>`
    }
  })
}

function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider()
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(result => {
      loggedInUser = result.user
      renderPage(result)
    })
    .catch(err => {
      authStatus.innerHTML = err
    })
}

function googleLogout() {
  firebase
    .auth()
    .signOut()
    .then(function() {
      location.reload()
    })
    .catch(err => {
      authStatus.innerHTML = err
    })
}

function renderPage(res) {
  const myPost = firestore.collection('notes').doc('kqrOIlpWlbPrk6ZQNrmi')
  myPost.get().then(doc => {
    const data = doc.data()
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]
    let ts = data.createdAt.toDate()
    ts = `${monthNames[ts.getMonth()]} ${ts.getDate()}, ${ts.getFullYear()}`

    let pageContent = document.querySelector('#pageContent')
    pageContent.innerHTML = `
      <div class="note">
        <h1>${data.title}</h1>
        <p>${data.body}</p>
        <code>${ts}</code>
      </div>
    `
  })
}
