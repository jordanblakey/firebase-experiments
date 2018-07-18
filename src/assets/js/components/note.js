// ////////////////////////////////////////////////////////////////////////////////
// // UPDATE NOTE
// ////////////////////////////////////////////////////////////////////////////////

// function updateNote(docId) {
//   let elem = document.querySelector('.updateForm.' + docId)
//   if (elem !== null) {
//     elem.parentNode.removeChild(elem)
//   } else {
//     document.querySelector('#' + docId).innerHTML += `
//       <div class="updateForm ${docId}">
//         <input class="${docId} updateTitle" type="text" placeholder="Update note title">
//         <input class="${docId} updateBody" type="text" placeholder="Update note body">
//         <button class="${docId} updateCreatedAt" type="text">Update timestamp</button>
//       </div>
//     `

//     let Note = firebase
//       .firestore()
//       .collection('notes')
//       .doc(docId)

//     document.querySelector('.updateTitle.' + docId).onkeyup = e =>
//       Note.update({ title: e.target.value })
//     document.querySelector('.updateBody.' + docId).onkeyup = e =>
//       Note.update({ body: e.target.value })
//     document.querySelector('.updateCreatedAt.' + docId).onclick = () =>
//       Note.update({ createdAt: Date(Date.now()).toString() })

//     Note.onSnapshot(doc => {
//       let data = doc.data()
//       document.querySelector('#' + docId + ' .title').innerHTML = data.title
//       document.querySelector('#' + docId + ' .body').innerHTML = data.body
//       document.querySelector('#' + docId + ' .createdAt').innerHTML =
//         data.createdAt
//     })
//   }
// }

// ////////////////////////////////////////////////////////////////////////////////
// // DELETE NOTE
// ////////////////////////////////////////////////////////////////////////////////

// function deleteNote(docId) {
//   let elem = document.querySelector('#' + docId)
//   elem.parentNode.removeChild(elem)
//   console.log(elem, ' was not removed from Firestore...yet.')

//   let Note = firebase
//     .firestore()
//     .collection('notes')
//     .doc(docId)

//   Note.delete()
//     .then(function() {
//       console.log('Document successfully deleted!')
//     })
//     .catch(function(error) {
//       console.error('Error removing document: ', error)
//     })
// }
