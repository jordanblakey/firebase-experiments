////////////////////////////////////////////////////////////////////////////////
// SCRATCHPAD
////////////////////////////////////////////////////////////////////////////////

export function scratchPad(targetElem) {
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

export function renderRealtimeDatabaseExplorer(targetElem) {
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

window.getRef = function(ref = '/users') {
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
