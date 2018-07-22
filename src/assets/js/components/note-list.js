import { saveNoteOrder, restoreNoteOrder } from '../modules/macy'
import CryptoJS from 'crypto-js'

// ALIASES /////////////////////////////////////////////////////////////////////
let w = window,
  d = document,
  qs = x => {
    document.querySelector(x)
  },
  l = x => {
    console.log(x)
  }
;(w.qs = qs), (w.l = l), (w.d = d)

// CLASS ///////////////////////////////////////////////////////////////////////
const notes = {
  // SORTING & FILTERING METHODS ///////////////////////////////////////////////
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
    macy.reInit()
    notes.store()
  },

  // INIT EVENT HANDLERS ///////////////////////////////////////////////////////
  listen: function() {
    document.querySelector('#reverse-notes').addEventListener('click', e => {
      notes.reverse()
    })
  },

  // STORE ENCRYPTED NOTES /////////////////////////////////////////////////////
  store: function() {
    // If no existing key, create.
    if (localStorage.getItem('scorched-note-key') === null) {
      localStorage.setItem('scorched-note-key', firebase.auth().currentUser.uid)
      // console.log('scorched-note-key stored: ', localStorage.getItem('scorched-note-key'))
    }

    // Encrypt the provided message with the key
    let notes = document.getElementById('macy-container').innerHTML
    // console.log('Notes to store: ' + notes.slice(0, 300) + '...')
    let ciphertext = CryptoJS.AES.encrypt(
      notes,
      localStorage.getItem('scorched-note-key')
    )
    // console.log('ciphertext: ', ciphertext)

    // Store the encrypted notes
    localStorage.setItem('scorched-notes-encrypted', ciphertext)
    // console.log(
    //   'Notes stored: ',
    //   localStorage.getItem('scorched-notes-encrypted').slice(0, 100)
    // )
  },

  // GET ENCRYPTED NOTES ///////////////////////////////////////////////////////
  get: function() {
    if (localStorage.getItem('scorched-notes-encrypted') !== null) {
      let bytes = CryptoJS.AES.decrypt(
        localStorage.getItem('scorched-notes-encrypted').toString(),
        localStorage.getItem('scorched-note-key')
      )
      // console.log('bytes: ', bytes)
      let plaintext = bytes.toString(CryptoJS.enc.Utf8)
      // console.log('Encrypted notes retrieved: ', plaintext.slice(0, 100))
      document.getElementById('macy-container').innerHTML = plaintext
    }

    macy.reInit()
    setTimeout(() => {
      macy.reInit()
    }, 100)
    let notes = document.querySelectorAll('.macy-item')
    notes.forEach(note => note.classList.remove('over'))
    notes.forEach(note => note.removeAttribute('style'))
    notes.forEach(note => (note.style.opacity = '1'))
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

// BASIC AES ENCRYPTION EXAMPLE ////////////////////////////////////////////////
// console.log(CryptoJS)
// let ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123')
// console.log('ciphertext: ', ciphertext)
// let bytes = CryptoJS.AES.decrypt(ciphertext.toString(), 'secret key 123')
// console.log('bytes: ', bytes)
// let plaintext = bytes.toString(CryptoJS.enc.Utf8)
// console.log('plaintext: ', plaintext)
