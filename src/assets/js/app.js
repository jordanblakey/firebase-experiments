// MODULES /////////////////////////////////////////////////////////////////////
import './modules/firebase-init'
import './modules/macy'
import { getAuthStatus } from './modules/auth'

// COMPONENTS //////////////////////////////////////////////////////////////////
import renderEditor from './components/editor'
import styleFileInputs from './components/file-uploader'
import DBExplorer from './components/database-explorer'

// import './components/steganography'
import Scorch from './components/scorch'

// HANDLE AUTH /////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
  let s = document.querySelector('#splash')
  s ? s.classList.add('hidden') : null
  getAuthStatus()
  sessionStorage.getItem('user') ? renderPage() : null
})

////////////////////////////////////////////////////////////////////////////////
// ALIASES
////////////////////////////////////////////////////////////////////////////////
document.qs = sel => document.querySelector(sel)
document.qsa = sel => document.querySelectorAll(sel)

////////////////////////////////////////////////////////////////////////////////
// RENDER PAGE
////////////////////////////////////////////////////////////////////////////////

export function renderPage() {
  console.groupCollapsed('Initialization Log')

  let editorContainer = document.querySelector('#editor-container')
  renderEditor(editorContainer)
  styleFileInputs()

  DBExplorer.init()
  Scorch.init()

  console.groupEnd('Initialization Log')
}
