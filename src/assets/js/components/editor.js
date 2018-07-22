import CryptoJS from 'crypto-js'

export default function renderEditor(editorContainer) {
  if (editorContainer !== null) {
    window.editor = new Editor({
      element: document.getElementById('#editor'),
      // toolbar: [], // array or false
      status: ['lines', 'words', 'cursor'] // array or false
      // actions: {},
      // shortcuts: {}
    })

    editor.render()
    configEditor()
  }
}

////////////////////////////////////////////////////////////////////////////////

export function loadMarkdownTutorial() {
  editor.codemirror.setValue(`# Scorched Uses Markdown

### Here's a quick formatting to get you up and running.

If you need to **bold** something, *consider italics instead*.

> This blockquote introduces an unordered list.

- \`let code = inline\`
- [Link Text](https://google.com)


1. alt+z to enter Zen mode
2. alt+x to see your work as HTML
3. Use the toolbar to format, insert links, or learn more about Markdown
4. Safety First, ~~Then Teamwork~~

![Image Caption](https://media1.giphy.com/media/dh2XvZthDl7ag/giphy.gif)`)
}

////////////////////////////////////////////////////////////////////////////////
// CONFIGURE EDITOR
////////////////////////////////////////////////////////////////////////////////

export function configEditor() {
  editor.codemirror.setOption('tabSize', 2)
  editor.codemirror.setOption('lineWrapping', true)
  editor.codemirror.setOption('cursorBlinkRate', 99999999999999999)
  restoreAutosave()
  editor.codemirror.focus()
  editor.codemirror.setCursor(editor.codemirror.lineCount(), 0)

  // AUTOSAVE //////////////////////////////////////////////////////////////////
  setInterval(autosave, 10000)
  function autosave() {
    if (localStorage.getItem('scorched-autosave-key') === null) {
      localStorage.setItem(
        'scorched-autosave-key',
        firebase.auth().currentUser.uid
      )
    }
    let ciphertext = CryptoJS.AES.encrypt(
      editor.codemirror.getValue(),
      localStorage.getItem('scorched-autosave-key')
    )
    localStorage.setItem('scorched-autosave', ciphertext)
  }

  // RESTORE AUTOSAVE //////////////////////////////////////////////////////////
  function restoreAutosave() {
    if (localStorage.getItem('scorched-autosave') !== null) {
      let bytes = CryptoJS.AES.decrypt(
        localStorage.getItem('scorched-autosave').toString(),
        localStorage.getItem('scorched-autosave-key')
      )
      let plaintext = bytes.toString(CryptoJS.enc.Utf8)
      editor.codemirror.setValue(plaintext)
    }
  }

  // BOTTOM TOOLBAR ////////////////////////////////////////////////////////////
  document
    .querySelector('.preview-shortcut')
    .addEventListener('click', () => editor.togglePreview())
  document
    .querySelector('.zen-shortcut')
    .addEventListener('click', () => editor.toggleFullScreen())
  document
    .querySelector('.markdown-tutorial-button')
    .addEventListener('click', () => loadMarkdownTutorial())
  // document
  //   .querySelector('.save-button')
  //   .addEventListener('click', () => saveNote())

  // DOM MANIPULATION ////////////////////////////////////////////////////////////
  document
    .querySelector('.editor-buttons .align-left')
    .appendChild(document.querySelector('.editor-statusbar'))

  // SCROLLBARS //////////////////////////////////////////////////////////////////
  let child = document.querySelector('.CodeMirror-scroll')
  let parent = child.parentNode
  let clippingMask = document.createElement('div')
  clippingMask.className = 'CodeMirror-clipping-mask'
  parent.replaceChild(clippingMask, child)
  clippingMask.appendChild(child)

  // TOOLBAR BORDER BOTTTOM ////////////////////////////////////////////////////
  child = document.querySelector('.editor-toolbar')
  parent = child.parentNode
  clippingMask = document.createElement('div')
  clippingMask.className = 'editor-toolbar-container'
  parent.replaceChild(clippingMask, child)
  clippingMask.appendChild(child)

  // TOOLBAR BORDER BOTTTOM ////////////////////////////////////////////////////
  document.querySelector('.editor-toolbar .icon-bold').title = 'Bold'
  document.querySelector('.editor-toolbar .icon-italic').title = 'Italic'
  document.querySelector('.editor-toolbar .icon-quote').title = 'Blockquote'
  document.querySelector('.editor-toolbar .icon-unordered-list').title =
    'Unordered List'
  document.querySelector('.editor-toolbar .icon-ordered-list').title =
    'Ordered List'
  document.querySelector('.editor-toolbar .icon-link').title = 'Link'
  document.querySelector('.editor-toolbar .icon-image').title = 'Image'
  document.querySelector('.editor-toolbar .icon-info').title =
    'Markdown Reference'
  document.querySelector('.editor-toolbar .icon-preview').title = 'Preview'
  document.querySelector('.editor-toolbar .icon-fullscreen').title = 'Zen'
}

////////////////////////////////////////////////////////////////////////////////
// KEYBOARD SHORTCUTS
////////////////////////////////////////////////////////////////////////////////

// MAP KEY FOR ZEN MODE
window.zenMode = false
window.previewMode = false
window.addEventListener('keydown', checkKeyPressed, false)
function checkKeyPressed(e) {
  if (e.keyCode === 90 && e.altKey) {
    if (window.zenMode === false) {
      window.zenMode = true
      editor.toggleFullScreen()
    } else {
      window.zenMode = false
      try {
        document.exitFullscreen()
      } catch (err) {
        console.log(err)
      }
      try {
        document.webkitExitFullscreen()
      } catch (err) {
        console.log(err)
      }
    }
  } else if (e.keyCode === 88 && e.altKey) {
    if (window.previewMode === false) {
      window.previewMode = true
      editor.togglePreview()
    } else {
      window.previewMode = false
      editor.togglePreview()
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// DEBUG TOOLS
////////////////////////////////////////////////////////////////////////////////

// LOG KEYS
// window.addEventListener('keydown', logKeys, false)
// function logKeys(e) {
//   console.log(e)
// }
