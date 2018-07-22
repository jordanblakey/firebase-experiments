import { initDragAndDrop } from '../modules/macy'
import showdown from 'showdown'
import TurndownSevice from 'turndown'
import CryptoJS from 'crypto-js'

// CLASS ///////////////////////////////////////////////////////////////////////
const notes = {
  mdConverter: new showdown.Converter(),
  htmlConverter: new TurndownSevice(),

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

    document.querySelector('#stash-button').addEventListener('click', e => {
      notes.stash()
    })

    document.querySelectorAll('.macy-item').forEach(elm => {
      notes.createNoteActions(elm)
    })
  },

  // INIT EVENT HANDLERS ///////////////////////////////////////////////////////
  createNoteActions: function(elm) {
    if (elm.querySelector('#note-actions')) {
      let na = elm.querySelector('#note-actions')
      na.parentNode.removeChild(na)
    }
    create(elm)

    function create(elm) {
      let container = document.createElement('div')
      container.id = 'note-actions'
      container.classList.add('button-group')

      let del = document.createElement('button')
      del.classList.add('button', 'secondary')
      del.innerHTML = '<i class="fi-trash"></i>'
      del.addEventListener('click', () => {
        elm.innerHTML = '<span style="color: white;">Note deleted.</span>'
        elm.style.background = '#444'
        setTimeout(() => {
          elm.parentNode.removeChild(elm)
          notes.store()
          macy.reInit()
        }, 3000)
        macy.reInit()
      })

      let edit = document.createElement('button')
      edit.classList.add('button', 'secondary')
      edit.innerHTML = '<i class="fi-pencil"></i>'
      edit.addEventListener('click', () => {
        let conversion = new Promise((resolve, reject) => {
          resolve(notes.htmlConverter.turndown(elm.innerHTML))
          reject(null)
        })

        conversion.then(resolution => {
          editor.codemirror.setValue(resolution)
          elm.innerHTML = '<span style="color: white;">Loaded to editor.</span>'
          elm.style.background = '#444'
          setTimeout(() => {
            elm.parentNode.removeChild(elm)
            notes.store()
            macy.reInit()
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            })
            setTimeout(() => {
              editor.codemirror.focus()
              editor.codemirror.setCursor(editor.codemirror.lineCount(), 0)
            }, 1000)
          }, 1000)
          macy.reInit()
        })
      })

      container.appendChild(del)
      container.appendChild(edit)
      elm.appendChild(container)
    }
  },

  // STASH A NOTE TO THE LIST //////////////////////////////////////////////////
  stash: function() {
    let elm = document.createElement('div')
    elm.classList.add('macy-item', 'callout', 'secondary')
    elm.style.opacity = '1'

    let conversion = new Promise((resolve, reject) => {
      resolve(notes.mdConverter.makeHtml(editor.codemirror.getValue()))
      reject(null)
    })

    conversion.then(resolution => {
      elm.innerHTML = resolution
      document
        .querySelector('#macy-container')
        .insertAdjacentElement('afterbegin', elm)
      notes.createNoteActions(elm)
      notes.store()
      macy.reInit()
      initDragAndDrop()
    })
  },

  delete: function() {
    document.querySelectorAll('.macy-item .delete-button').forEach(elm => {
      let parent = elm.parentNode
      let dfunc = document.querySelector('#macy-container').removeChild(parent)
      elm.addEventListener('click', dfunc)
    })
  },

  // // edit a note from the list /////////////////////////////////////////////////
  // edit: function(elm) {
  //   let htmlConverter = new turndownService()
  //   let elm = document.createElement('div')
  //   elm.classList.add('macy-item', 'callout', 'secondary')
  //   elm.style.opacity = '1'

  //   let conversion = new Promise((resolve, reject) => {
  //     resolve(htmlConverter(editor.codemirror.getValue()))
  //     reject(null)
  //   })

  //   conversion.then(resolution => {
  //     elm.innerHTML = resolution
  //     document.querySelector('#macy-container').appendChild(elm)
  //     notes.store()
  //     macy.reInit()
  //     initDragAndDrop()
  //   })
  // },

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
window.notes = notes

////////////////////////////////////////////////////////////////////////////////
// PARSING NOTES
////////////////////////////////////////////////////////////////////////////////

// // Parse Title
// let noteTitle = editor.codemirror.getLine(0)
// // console.log('Note Title:', noteTitle)

// // Parse Body
// let lines = []

// editor.codemirror
//   .getDoc(0)
//   .children[0].lines.forEach(
//     (line, i) => (i > 0 ? lines.push(line.text) : null)
//   )
// let noteBody = lines.join('\n')
// // console.log('Note Body:', noteBody)

// elm.innerHTML += '<h4>' + noteTitle + '</h4>'
// elm.innerHTML += noteBody

////////////////////////////////////////////////////////////////////////////////
// SORTING & FILTERING METHODS
////////////////////////////////////////////////////////////////////////////////

// order: {},
// oarr: [],
// getOrder: () => {
//   let notelist = document.querySelectorAll('.macy-item')
//   notelist[0].children[0].dataset.uid
//   notes.order = {}
//   notelist.forEach((x, i) => (notes.order[i] = x.children[0].dataset.uid))
//   notelist.forEach(x => notes.oarr.push(x.children[0].dataset.uid))
// },

// before: (elm, targ) => {
//   targ.parentNode.insertBefore(elm, targ.nextSibling)
// },

// after: (elm, targ) => {
//   targ.parentNode.insertBefore(elm, targ.nextSibling)
// },

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
//     // promise.then(() => { console.log('Loop finishedocument.') })
//   })
// },

// notes.before(document.querySelector('.macy-item'), document.querySelector('input'))
// document.querySelector('#macy-container').appendChild(document.querySelector('.macy-item div[data-uid = \'note-0000001\']').parentNode)

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
