export default function renderEditor(editorContainer) {
  window.editor = new Editor({
    element: document.getElementById('#editor'),
    // toolbar: [], // array or false
    status: ['lines', 'words', 'cursor'] // array or false
    // actions: {},
    // shortcuts: {}
  })

  window.editor.render()
  configEditor()
}

////////////////////////////////////////////////////////////////////////////////

export function saveNote() {
  // Parse Title
  let noteTitle = window.editor.codemirror.getLine(0)
  console.log('Note Title:', noteTitle)

  // Parse Body
  let lines = []

  window.editor.codemirror
    .getDoc(0)
    .children[0].lines.forEach(
      (line, i) => (i > 0 ? lines.push(line.text) : null)
    )
  let noteBody = lines.join('\n')
  console.log('Note Body:', noteBody)
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
  window.editor.codemirror.setOption('tabSize', 2)
  window.editor.codemirror.setOption('lineWrapping', true)
  window.editor.codemirror.setOption('cursorBlinkRate', 99999999999999999)
  window.editor.codemirror.setOption('cursorHeight', 1)
  window.editor.redo() // Focuses the editor

  qs('.preview-shortcut').addEventListener('click', () =>
    editor.togglePreview()
  )
  qs('.zen-shortcut').addEventListener('click', () => editor.toggleFullScreen())
  qs('.markdown-tutorial-button').addEventListener('click', () =>
    loadMarkdownTutorial()
  )
  qs('.save-button').addEventListener('click', () => saveNote())

  // DOM MANIPULATION ////////////////////////////////////////////////////////////
  qs('.editor-buttons .align-left').appendChild(qs('.editor-statusbar'))

  // SCROLLBARS //////////////////////////////////////////////////////////////////
  let child = qs('.CodeMirror-scroll')
  let parent = child.parentNode
  let clippingMask = document.createElement('div')
  clippingMask.className = 'CodeMirror-clipping-mask'
  parent.replaceChild(clippingMask, child)
  clippingMask.appendChild(child)

  // TOOLBAR BORDER BOTTTOM ////////////////////////////////////////////////////
  child = qs('.editor-toolbar')
  parent = child.parentNode
  clippingMask = document.createElement('div')
  clippingMask.className = 'editor-toolbar-container'
  parent.replaceChild(clippingMask, child)
  clippingMask.appendChild(child)

  // TOOLBAR BORDER BOTTTOM ////////////////////////////////////////////////////
  qs('.editor-toolbar .icon-bold').title = 'Bold'
  qs('.editor-toolbar .icon-italic').title = 'Italic'
  qs('.editor-toolbar .icon-quote').title = 'Blockquote'
  qs('.editor-toolbar .icon-unordered-list').title = 'Unordered List'
  qs('.editor-toolbar .icon-ordered-list').title = 'Ordered List'
  qs('.editor-toolbar .icon-link').title = 'Link'
  qs('.editor-toolbar .icon-image').title = 'Image'
  qs('.editor-toolbar .icon-info').title = 'Markdown Reference'
  qs('.editor-toolbar .icon-preview').title = 'Preview'
  qs('.editor-toolbar .icon-fullscreen').title = 'Zen'
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
      window.editor.toggleFullScreen()
    } else {
      window.zenMode = false
      try {
        document.exitFullscreen()
      } catch (err) {
        console.log(null)
      }
      try {
        document.webkitExitFullscreen()
      } catch (err) {
        console.log(null)
      }
    }
  } else if (e.keyCode === 88 && e.altKey) {
    if (window.previewMode === false) {
      window.previewMode = true
      window.editor.togglePreview()
    } else {
      window.previewMode = false
      window.editor.togglePreview()
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
