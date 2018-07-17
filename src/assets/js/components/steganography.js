////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ALIASES
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
window.qs = s => document.querySelector(s)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TEXTAREA FILL STATUS
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default function initTextarea() {
  if (qs('#message').getAttribute('maxlength')) {
    qs('#message').onkeyup = chkLen
    qs('#message').change = chkLen
    qs('#message').onblur = chkLen
  }
}
result

function chkLen() {
  let maxLen = parseInt(this.getAttribute('maxlength'), 10)
  let charsLeft
  charsLeft = maxLen - this.value.length
  qs('#msgCount').innerHTML = charsLeft
  charsLeft <= 0
    ? (qs('#msgStatus').className = 'msgWarn')
    : (qs('#msgStatus').className = '')
  if (this.value.length >= maxLen) {
    console.log(
      'Maximum length exceeded: ' + maxLen,
      '\nText has been shortened!'
    )
  }
}

let passToggle = qs('#password-toggle')
if (passToggle !== null) {
  passToggle.addEventListener('click', function() {
    togglePasswordVisibility()
  })
}

function togglePasswordVisibility() {
  let elm = qs('#password')
  elm.type === 'password' ? (elm.type = 'text') : (elm.type = 'password')
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ENCRYPTION AND DECRYPTION
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let writeButton = qs('.button.write-button')
if (writeButton !== null) {
  writeButton.addEventListener('click', function() {
    writeIMG()
  })
}

function writeIMG() {
  qs('#resultimg').src = ''
  qs('#status').innerHTML = 'Processing...'
  console.info('processing...')
  function writefunc() {
    let t = writeMsgToCanvas(
      'canvas',
      qs('#message').value,
      qs('#password').value
    )
    console.info('assigned t')
    if (t != null) {
      let myCanvas = qs('#canvas')
      let image = myCanvas.toDataURL('image/png')
      console.info('got data URL')
      qs('#resultimg').src = image
      qs('#status').innerHTML = 'Successfully encrypted note in image.'
      qs('#result').innerHTML =
        'To read your note, select this file in step 1, enter your password, and press "Decrypt".'
      qs('#output').style.display = 'block'
      qs('#download').style.display = 'inline-block'
      qs('#resultimg').style.display = 'block'
      qs('#download').href = qs('#resultimg').src
      qs('#download').download = 'download.png'
    }
  }
  loadIMGtoCanvas('cover-file', 'canvas', writefunc, 500)
}

let readButton = qs('.button.read-button')
if (readButton !== null) {
  readButton.addEventListener('click', function() {
    writeIMG()
  })
}

function readIMG() {
  qs('#download').style.display = 'none'
  qs('#resultimg').style.display = 'none'
  qs('#result').innerHTML = ''
  qs('#status').innerHTML = 'Processing...'
  function readfunc() {
    let t = readMsgFromCanvas('canvas', qs('#password').value)
    if (t != null) {
      t = t
        .split('&')
        .join('&amp;')
        .split(' ')
        .join('&nbsp;')
        .split('<')
        .join('&lt;')
        .split('>')
        .join('&gt;')
        .replace(/(?:\r\n|\r|\n)/g, '<br />')
      qs('#status').innerHTML = 'Successfully decrypted note from image:'
      qs('#output').style.display = 'block'
      qs('#result').innerHTML = t
    } else {
      qs('#status').innerHTML = 'Error decypting message.'
    }
  }
  loadIMGtoCanvas('cover-file', 'canvas', readfunc)
}
