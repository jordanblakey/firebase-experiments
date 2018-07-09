document.addEventListener('DOMContentLoaded', function() {
  // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
  // firebase.auth().onAuthStateChanged(user => { });
  // firebase.database().ref('/path/to/ref').on('value', snapshot => { });
  // firebase.messaging().requestPermission().then(() => { });
  // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
  // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

  try {
    let loggedInUser
    getAuthStatus()
  } catch (e) {
    console.error(e)
    document.getElementById('load').innerHTML =
      'Error loading the Firebase SDK, check the console.'
  }
})

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
    FileUploader()
    Scratchpad()
    FormUpdater()
  })
}
////////////////////////////////////////////////////////////////////////////////
// NOTE UPDATE FORM
////////////////////////////////////////////////////////////////////////////////

function FormUpdater() {
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
    myNote.update({ title: e.target.value })
  }
  function updateBody(e) {
    myNote.update({ body: e.target.value })
  }
  function updateCreatedAt(e) {
    myNote.update({ createdAt: Date(Date.now()).toString() })
  }
}

////////////////////////////////////////////////////////////////////////////////
// SCRATCHPAD
////////////////////////////////////////////////////////////////////////////////

function Scratchpad() {
  pageContent.innerHTML += `
    <div class="scratchpad" id="sp1">
      <h3>Scratchpad</h3>
    </div>
  `

  const productsRef = firestore.collection('products')

  let query
  // query = productsRef.where('price', '>', 10)
  // query = productsRef.orderBy('price', 'desc')
  query = productsRef.orderBy('price', 'desc').limit(2)
  query.get().then(products => {
    products.forEach(doc => {
      data = doc.data()
      document.querySelector('#sp1').innerHTML += `${data.name} at $${
        data.price
      }<br>`
    })
  })
}

////////////////////////////////////////////////////////////////////////////////
// FILE UPLOADER
////////////////////////////////////////////////////////////////////////////////

function FileUploader() {
  pageContent.innerHTML += `
    <div class="scratchpad" id="sp2">
      <h3>FB Storage Upload</h3>
      <input type="file" onchange="uploadFile(this.files)">
      <hr>
      <img id="imgUpload" src="" width="100%" />
    </div>
  `
}

function uploadFile(files) {
  const file = files.item(0)
  const ref = firebase
    .storage()
    .ref()
    .child(file.name)
  const img = document.querySelector('#imgUpload')
  ref.put(file).then(sshot => ref.getDownloadURL().then(url => (img.src = url)))
}
