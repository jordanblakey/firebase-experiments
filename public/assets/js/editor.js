function renderEditor(editorContainer) {
  editorContainer.innerHTML = `
    <textarea id="editor">
# Scorched Uses Markdown

----

> The idea is that a [Markdown](https://www.markdownguide.org/cheat-sheet) formatted document should be **publishable as-is**, as plain text, *without looking like it’s been marked up with tags or formatting instructions.*
    </textarea>
    <button class="save-note-button" onclick="saveNote(editor)">Log Markdown to Console</button>
  `
  const editor = new Editor({
    element: document.getElementById('#editor')
    // toolbar: [], // array or false
    // status: [] // array or false
    // actions: {},
    // shortcuts: {}
  })

  editor.render()

  saveNote = () => {
    // Get the value out of the editor
    let val = editor.codemirror.getValue()
    console.log(val)
  }
}
