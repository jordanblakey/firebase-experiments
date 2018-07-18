import clipboard from 'clipboard'
let qs = (x, y) => document.querySelector(x, y)

const DBExplorer = {
  root: '/',
  container: qs('.db-explorer-container'),
  output: qs('.db-explorer-container .output'),
  pathField: qs('.db-explorer-container .path-field'),
  clear: qs('.clear-button'),
  copy: qs('.copy-button'),
  copyJSON: qs('.copy-json-button'),

  init: function() {
    if (document.readyState !== 'loading' && this.container !== null) {
      this.config()
    }
  },

  config: function() {
    this.pathField.placeholder = this.root
    if (typeof output !== null && typeof this.pathField !== null) {
      this.pathField.addEventListener('keyup', this.getRef)
      this.getRef()
    }

    this.clear.addEventListener('click', e => {
      e.preventDefault()
      this.pathField.value = ''
      this.getRef()
    })

    this.copy.setAttribute('data-clipboard-target', '.path-field')
    new clipboard('.copy-button')
    this.copy.addEventListener('click', e => e.preventDefault())

    new clipboard('.copy-json-button')
    this.copyJSON.addEventListener('click', e => e.preventDefault())
  },

  getRef: function(path = this.root) {
    this.pathField.value ? (path = this.pathField.value) : null

    return firebase
      .database()
      .ref(path)
      .on('value', snap => {
        if (typeof snap.val === 'function') {
          // console.log('Current DB Snapshot: ', snap.val())
          this.output.innerHTML = JSON.stringify(snap.val(), null, 3)
          Prism.highlightAll()

          new clipboard('.copy-json-button')
          this.createTokenLinks()
        }
      })
  },

  createTokenLinks: function() {
    document.querySelectorAll('.token.property').forEach(t =>
      t.addEventListener('click', () => {
        let p = t.innerHTML.replace(/\"/g, '')
        this.pathField.value = this.pathField.value + '/' + p
        DBExplorer.getRef()
      })
    )
  }
}

export default DBExplorer
