function renderEditor(editorContainer) {
  editorContainer.innerHTML = `
    <textarea id="editor"></textarea>
    <button class="save-note-button" onclick="saveNote(editor)">Log Markdown to Console</button>
    <span class="editorInstructions">ctrl+shift+z: Toggle Zen</span>
    <span class="editorInstructions">ctrl+shift+z: Toggle Preview</span>
  `

  window.editor = new Editor({
    element: document.getElementById('#editor'),
    // toolbar: [], // array or false
    status: ['lines'] // array or false
    // actions: {},
    // shortcuts: {}
  })

  window.editor.render()
  configEditor()
}

////////////////////////////////////////////////////////////////////////////////

function saveNote() {
  // Get the full value out of the editor
  // let val = window.editor.codemirror.getValue()
  // console.log(val)

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
// CONFIGURE EDITOR
////////////////////////////////////////////////////////////////////////////////

function configEditor() {
  window.editor.codemirror.setOption('tabSize', 2)
  window.editor.codemirror.setOption('lineWrapping', true)
  window.editor.codemirror.setOption('cursorBlinkRate', 99999999999999999)
  window.editor.codemirror.setOption('cursorHeight', 1)
  window.editor.redo() // Focuses the editor

  // window.editor.codemirror.doc.cm.on('focus', () =>
  //   window.editor.codemirror.doc.cm.execCommand('selectAll')
  // )
}

////////////////////////////////////////////////////////////////////////////////
// KEYBOARD SHORTCUTS
////////////////////////////////////////////////////////////////////////////////

// MAP KEY FOR ZEN MODE
window.zenMode = false
window.previewMode = false
window.addEventListener('keydown', checkKeyPressed, false)
function checkKeyPressed(e) {
  if (e.keyCode === 90 && e.ctrlKey && e.shiftKey) {
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
  } else if (e.keyCode === 88 && e.ctrlKey && e.shiftKey) {
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
window.addEventListener('keydown', logKeys, false)
function logKeys(e) {
  console.log(e)
}
