function renderEditor(editorContainer) {
  editorContainer.innerHTML = `
    <textarea id="editor"></textarea>
    <div class="editorInstructions">
      <button class="save-note-button" onclick="saveNote(editor)">Log to Console</button>
      <button class="save-note-button" onclick="loadMDTutorial(editor)">MD Tutorial</button>
      <div>
        <span>alt+z&nbsp;Zen</span>
        <span>alt+x&nbsp;Preview</span>
      </div>
    </div>
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

function loadMDTutorial() {
  editor.codemirror.setValue(`# Scorched Uses Markdown

## Here's a Self-documenting Formatting Tutorial.

If you need to **bold** something, *consider italics instead*.

> This blockquote introduces an unordered list.

- \`let code = inline\`
- [Link Text](https://google.com)

1. alt+z to enter Zen
2. alt+x to see your work.

### Safety First, ~~Then Teamwork~~.

![Image Caption](https://media1.giphy.com/media/dh2XvZthDl7ag/giphy.gif)`)
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
window.addEventListener('keydown', logKeys, false)
function logKeys(e) {
  console.log(e)
}
