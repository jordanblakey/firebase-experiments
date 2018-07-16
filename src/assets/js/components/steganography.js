import '../lib/stego'

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ALIASES
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
window.qs = s => document.querySelector(s)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TEXTAREA FILL STATUS
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function initTextarea() {
  if (qs('#message').getAttribute('maxlength')) {
    qs('#message').onkeydown = chkLen
    qs('#message').onblur = chkLen
  }
}

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

function togglePasswordVisibility() {
  let elm = qs('#password')
  elm.type === 'password' ? (elm.type = 'text') : (elm.type = 'password')
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ENCRYPTION AND DECRYPTION
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function writeIMG() {
  qs('#resultimg').src = ''
  qs('#status').innerHTML = 'Processing...'
  function writefunc() {
    let t = writeMsgToCanvas(
      'canvas',
      qs('#message').value,
      qs('#password').value
    )
    if (t != null) {
      let myCanvas = qs('#canvas')
      let image = myCanvas.toDataURL('image/png')
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
  loadIMGtoCanvas('file', 'canvas', writefunc, 500)
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
  loadIMGtoCanvas('file', 'canvas', readfunc)
}

export default function renderSteganography(targetElement) {
  targetElement.innerHTML = `<div class="scratchpad">
  <h3>Steganography Tool</h3>
  <form>
    <div class="input-group">
      <label for="file">Step 1. Select image</label>
      <input name="file" type="file" id="file" accept="image/*" />
    </div>
    <div class="input-group">
      <label for="password">Step 2. Create or re-enter encryption password</label>
      <input name="password" type="password" id="password" value="" placeholder="(Optional)" />
      <div class="inline">
        <input type="checkbox" onclick="togglePasswordVisibility()">
        <span>Show Password</span>
      </div>
    </div>
    <div class="input-group">
      <label for="message">Step 3: Enter a note to encrypt</label>
      <textarea rows="20" name="message" id="message" maxlength="8000" placeholder="(Skip for decryption)"></textarea>
      <p id="msgStatus">
        <span id="msgCount">8000</span> more characters will fit.
      </p>
    </div>
    <div class="inline">
      <a href="javascript: writeIMG()" class="button">Encrypt</a>
      <a href="javascript: readIMG()" class="button">Decrypt</a>
      <span id="status"></span>
    </div>
  </form>

  <p id="output">
    <b>Output</b>
    <br>
    <a href="" style="display:none;" class="button" id="download">Download</a>
    <span id="result"></span>
  </p>
  <img style="display:none;" id="resultimg" />
</div>`

  initTextarea()
}
