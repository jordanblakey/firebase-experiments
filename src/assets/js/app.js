// MODULES /////////////////////////////////////////////////////////////////////
import './modules/macy'
import './modules/auth/auth'

// COMPONENTS //////////////////////////////////////////////////////////////////
import renderEditor from './components/editor'
import styleFileInputs from './components/file-uploader'
import Scorch from './components/scorch'

// HANDLE AUTH /////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
  let s = document.querySelector('#splash')
  renderPage()
})

// REGISTER SERVICE WORKER /////////////////////////////////////////////////////
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./../../service-worker.js', { scope: './' })
    .then(() => {
      return
    })
}

////////////////////////////////////////////////////////////////////////////////
// RENDER PAGE
////////////////////////////////////////////////////////////////////////////////
export function renderPage() {
  let editorContainer = document.querySelector('#editor-container')
  renderEditor(editorContainer)
  styleFileInputs()
  Scorch.init()
}
