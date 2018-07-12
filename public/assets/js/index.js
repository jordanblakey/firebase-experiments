document.addEventListener('DOMContentLoaded', function() {
  getAuthStatus()
  sessionStorage.getItem('user') ? renderPage() : null
})

////////////////////////////////////////////////////////////////////////////////
// RENDER PAGE
////////////////////////////////////////////////////////////////////////////////

function renderPage() {
  let pageContent = document.querySelector('#pageContent')
  let extraContent = document.querySelector('#extraContent')

  let saveNote
  renderEditor(document.querySelector('#editorContainer'))

  pageContent.innerHTML = '<h2>All Notes</h2>'
  renderNotes(pageContent)
  renderScorch(pageContent)

  extraContent.innerHTML = '<h2>Unfinished Features</h2>'
  fileUploader(extraContent)
  scratchPad(extraContent)
}

////////////////////////////////////////////////////////////////////////////////
// RENDER NOTES
////////////////////////////////////////////////////////////////////////////////

async function renderNotes(targetElem) {
  let docList = []
  let ref = firebase.firestore().collection('notes')

  await ref.get().then(snap => snap.docs.forEach(doc => docList.push(doc.id)))
  await docList.forEach(async doc => {
    ref
      .doc(doc)
      .get()
      .then(snap => {
        targetElem.innerHTML += `
          <div class="note" id="${doc}">
            <div class="noteHeader">
              <h1 class="title">${snap.data().title}</h1>
              <div>
                <button class="noteButton" onclick="updateNote('${doc}')">🖉</button>
                <button class="noteButton delete" onclick="deleteNote('${doc}')">🗑️</button>
              </div>
            </div>

            <p class="body">${snap.data().body}</p>
            <code class="createdAt">${snap.data().createdAt}</code>
          </div>
        `
      })
  })
}

////////////////////////////////////////////////////////////////////////////////
// UPDATE NOTE
////////////////////////////////////////////////////////////////////////////////

function updateNote(docId) {
  let elem = document.querySelector('.updateForm.' + docId)
  if (elem !== null) {
    elem.parentNode.removeChild(elem)
  } else {
    document.querySelector('#' + docId).innerHTML += `
      <div class="updateForm ${docId}">
        <input class="${docId} updateTitle" type="text" placeholder="Update note title">
        <input class="${docId} updateBody" type="text" placeholder="Update note body">
        <button class="${docId} updateCreatedAt" type="text">Update timestamp</button>
      </div>
    `

    let Note = firebase
      .firestore()
      .collection('notes')
      .doc(docId)

    document.querySelector('.updateTitle.' + docId).onkeyup = e =>
      Note.update({ title: e.target.value })
    document.querySelector('.updateBody.' + docId).onkeyup = e =>
      Note.update({ body: e.target.value })
    document.querySelector('.updateCreatedAt.' + docId).onclick = () =>
      Note.update({ createdAt: Date(Date.now()).toString() })

    Note.onSnapshot(doc => {
      let data = doc.data()
      document.querySelector('#' + docId + ' .title').innerHTML = data.title
      document.querySelector('#' + docId + ' .body').innerHTML = data.body
      document.querySelector('#' + docId + ' .createdAt').innerHTML =
        data.createdAt
    })
  }
}

////////////////////////////////////////////////////////////////////////////////
// DELETE NOTE
////////////////////////////////////////////////////////////////////////////////

function deleteNote(docId) {
  let elem = document.querySelector('#' + docId)
  elem.parentNode.removeChild(elem)
  console.log(elem, ' was not removed from Firestore...yet.')

  let Note = firebase
    .firestore()
    .collection('notes')
    .doc(docId)

  Note.delete()
    .then(function() {
      console.log('Document successfully deleted!')
    })
    .catch(function(error) {
      console.error('Error removing document: ', error)
    })
}

////////////////////////////////////////////////////////////////////////////////
// SCRATCHPAD
////////////////////////////////////////////////////////////////////////////////

function scratchPad(targetElem) {
  targetElem.innerHTML += `
    <div class="scratchpad" id="sp1">
      <h3>Scratchpad</h3>
      <p>
        ☐ Title field for Editor<br>
        ☐ Generate prefixed UID<br>
        ☐ Save to FB as doc:UID - Editor and title contents, w/current timestamp<br>
        ☐ Fix saving to FB with newlines<br>
        ☐ User Profile card or modal<br>
        ☐ Import Realtime Database explorer<br>
        ☐ Create Firebase explorer<br>
      </p>
    </div>
  `

  const productsRef = firebase.firestore().collection('products')

  let query
  query = productsRef.where('price', '>', 10)
  // query = productsRef.orderBy('price', 'desc')
  // query = productsRef.orderBy('price', 'desc').limit(1)
  query.get().then(products => {
    products.forEach(doc => {
      data = doc.data()
      document.querySelector('#sp1').innerHTML += `${data.name} at $${
        data.price
      }<br>`
    })
  })
}

// //////////////////////////////////////////////////////////////////////////////
// FILE UPLOADER
// //////////////////////////////////////////////////////////////////////////////

function fileUploader(targetElem) {
  targetElem.innerHTML += `
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
  ref.put(file).then(ref.getDownloadURL().then(url => (img.src = url)))
}

////////////////////////////////////////////////////////////////////////////////
// FILE UPLOADER
////////////////////////////////////////////////////////////////////////////////

function renderScorch(targetElem) {
  targetElem.innerhtml += `
    <button class="noteButton" onclick="scorch()">SCORCH</button>
  `
  function scorch() {
    let body = document.querySelector('body')
    body.innerHTML = body.innerHTML.replaceAll(/N/, 'G')
  }
}
