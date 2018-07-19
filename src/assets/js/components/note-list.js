import { saveNoteOrder, restoreNoteOrder } from '../modules/macy'

let w = window,
  d = document,
  qs = x => {
    document.querySelector(x)
  },
  l = x => {
    console.log(x)
  }
;(w.qs = qs), (w.l = l), (w.d = d)

const notes = {
  order: {},

  oarr: [],

  getOrder: () => {
    let nl = d.querySelectorAll('.macy-item')
    nl[0].children[0].dataset.uid
    notes.order = {}
    nl.forEach((x, i) => (notes.order[i] = x.children[0].dataset.uid))
    nl.forEach(x => notes.oarr.push(x.children[0].dataset.uid))
  },

  before: (elm, tgt) => {
    tgt.parentNode.insertBefore(elm, tgt.nextSibling)
  },

  after: (elm, tgt) => {
    tgt.parentNode.insertBefore(elm, tgt.nextSibling)
  },

  reverse: () => {
    let store = document.querySelectorAll('.macy-item')
    store = Array.prototype.slice.call(store, 0).reverse()
    document.getElementById('macy-container').innerHTML = ''
    store.forEach(elm =>
      document.getElementById('macy-container').appendChild(elm)
    )
    saveNoteOrder()
    macy.reInit()
  },

  listen: function() {
    document
      .querySelector('#reverse-notes')
      .addEventListener('click', this.reverse)
  }
}

export default notes
w.notes = notes

////////////////////////////////////////////////////////////////////////////////
// APPEND TO CONTAINER ONE AT A TIME FROM ARRAY
////////////////////////////////////////////////////////////////////////////////

// push: par => {
//   notes.getOrder()
//   let promise = Promise.resolve()
//   notes.oarr.reverse().forEach(x => {
//     promise = promise.then(function() {
//       document
//       .querySelector(par)
//       .appendChild(
//         document.querySelector(`.macy-item div[data-uid = \'${x}\']`)
//         .parentNode
//       )
//       return new Promise(res => setTimeout(res, 1000))
//     })
//     // promise.then(() => { console.log('Loop finished.') })
//   })
// },

// notes.before(qs('.macy-item'), qs('input'))
// qs('#macy-container').appendChild(qs('.macy-item div[data-uid = \'note-0000001\']').parentNode)

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
