////////////////////////////////////////////////////////////////////////////////
// FIRESTORE QUERIES
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
