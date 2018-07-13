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
        ☐ Inline editing of notes, sync on blur to Firebase.<br>
      </p>
    </div>
  `

  const productsRef = firebase.firestore().collection('products')

  let query
  query = productsRef.where('price', '>', 10)
  // query = productsRef.orderBy('price', 'desc')
  // query = productsRef.orderBy('price', 'desc').limit(1)
  // query.get().then(products => {
  //   products.forEach(doc => {
  //     data = doc.data()
  //     document.querySelector('#sp1').innerHTML += `${data.name} at $${
  //       data.price
  //     }<br>`
  //   })
  // })
}

// //////////////////////////////////////////////////////////////////////////////
// REALTIME DATABASE EXPLORER
// //////////////////////////////////////////////////////////////////////////////

function renderRealtimeDatabaseExplorer(targetElem) {
  targetElem.innerHTML += `
<div class="scratchpad">
  <h3>Firebase Realtime Database Explorer</h3>
  <form>
    <label for="refField">ref:</label>
    <input type="text" name="refField" id="refField" onkeyup="getRef()" placeholder="users/">
  </form>
  <h4>Data:</h4>
  <pre id="outputField"></pre>
</div>`

  const outputField = document.querySelector('#outputField')
  const refField = document.querySelector('#refField')

  getRef()
}
function getRef(ref = '/users') {
  refField.value ? (ref = refField.value) : null

  return firebase
    .database()
    .ref(ref)
    .on('value', snap => {
      let s = snap.val()
      s !== null
        ? (outputField.innerHTML = JSON.stringify(snap.val(), null, 3))
        : null
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
