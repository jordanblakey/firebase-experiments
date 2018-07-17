////////////////////////////////////////////////////////////////////////////////
// REALTIME DATABASE EXPLORER
////////////////////////////////////////////////////////////////////////////////

import ClipboardJS from 'clipboard'
let qs = (x, y) => document.querySelector(x, y)

document.addEventListener('DOMContentLoaded', () => {
// CONFIGURE EXPLORER //////////////////////////////////////////////////////////
  let output = qs('.db-explorer-container .output')
  let root = '/'
  let pathField = qs('.db-explorer-container .path-field')
  pathField.placeholder = root

  if (typeof output !== null && typeof pathField !== null) {
    pathField.addEventListener('keyup', getRef)
    getRef()
  }

// CLEAR BUTTON ////////////////////////////////////////////////////////////////
  qs('.clear-button').addEventListener('click', (e) => {
    e.preventDefault()
    qs('.path-field').value = '/'
    getRef()
  })
// COPY BUTTON /////////////////////////////////////////////////////////////////
  qs('.copy-button').setAttribute('data-clipboard-target', '.path-field')
  new ClipboardJS('.copy-button');
  qs('.copy-button').addEventListener('click', (e) => {
    e.preventDefault()
  })

  qs('.toolbar-item a').classList.add('button', 'copy-json-button')
  let elem = qs('.copy-json-button')
  elem.innerHTML = 'Copy JSON'
  qs('.input-group-button:last-child').appendChild(elem)



// FUNCTIONS ///////////////////////////////////////////////////////////////////

  function getRef(path = root) {
    pathField.value ? path = pathField.value : null

    return firebase
      .database()
      .ref(path)
      .on('value', snap => {
        if (typeof snap.val === 'function') {
          // console.log('Current DB Snapshot: ', snap.val())
          output.innerHTML = JSON.stringify(snap.val(), null, 3)
          Prism.highlightAll()
          qs('.copy-json-button').setAttribute('data-clipboard-target', '.output')
          new ClipboardJS('.copy-json-button');
          createTokenLinks()
        }
      })
  }

  function createTokenLinks() {
    document.querySelectorAll('.token.property').forEach((t) => t.addEventListener('click', () => {
      let p = t.innerHTML.replace(/\"/g, '')
      pathField.value = pathField.value + '/' + p
      getRef()
    }))
  }
})
