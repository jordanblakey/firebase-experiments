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
  myNote = firestore.collection('notes').doc('kqrOIlpWlbPrk6ZQNrmi')
  myNote.get().then(doc => {
    const data = doc.data()

    let pageContent = document.querySelector('#pageContent')
    pageContent.innerHTML = `
      <div class="note">
        <h1 id="title">${data.title}</h1>
        <p id="body">${data.body}</p>
        <code id="createdAt">${data.createdAt}</code>
      </div>
    `
    createUpdateForm()
  })
}
//////////////////////////////////////////////////////////////////////////////////

function createUpdateForm() {
  // CREATE FORM DOM
  pageContent.innerHTML += `
    <div id="updateForm">
      <input id="updateTitle" type="text" placeholder="Update note title">
      <input id="updateBody" type="text" placeholder="Update note body">
      <button id="updateCreatedAt" type="text">Update timestamp</button>
    </div>
  `

  const myNote = firestore.collection('notes').doc('kqrOIlpWlbPrk6ZQNrmi')

  // EVENT LISTENERS FOR FORM
  const titleInput = document.getElementById('updateTitle')
  titleInput.onkeyup = updateTitle
  const bodyInput = document.getElementById('updateBody')
  bodyInput.onkeyup = updateBody
  const createdAtInput = document.getElementById('updateCreatedAt')
  createdAtInput.onclick = updateCreatedAt

  myNote.onSnapshot(doc => {
    const data = doc.data()
    document.querySelector('#title').innerHTML = data.title
    document.querySelector('#body').innerHTML = data.body
    document.querySelector('#createdAt').innerHTML = data.createdAt
  })

  function updateTitle(e) {
    const myNote = firestore.collection('notes').doc('kqrOIlpWlbPrk6ZQNrmi')
    myNote.update({ title: e.target.value })
  }
  function updateBody(e) {
    const myNote = firestore.collection('notes').doc('kqrOIlpWlbPrk6ZQNrmi')
    myNote.update({ body: e.target.value })
  }
  function updateCreatedAt(e) {
    const myNote = firestore.collection('notes').doc('kqrOIlpWlbPrk6ZQNrmi')
    myNote.update({ createdAt: Date(Date.now()).toString() })
  }
}
