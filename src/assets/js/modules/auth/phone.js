////////////////////////////////////////////////////////////////////////////////
// PHONE LOGIN FORM
////////////////////////////////////////////////////////////////////////////////

if (document.querySelector('#phone-login-button') !== null) {
  document
    .querySelector('#phone-login-button')
    .addEventListener('click', showPhoneAuth)

  // CONFIGURATION
  firebase.auth().useDeviceLanguage()
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
    'recaptcha-container',
    {
      size: 'invisible',
      callback: function(response) {
        console.log('reCAPTCHA:', response)
      },
      'expired-callback': function() {
        console.log('Response expired. Ask user to solve reCAPTCHA again.')
      }
    }
  )
}

function showPhoneAuth() {
  // Click handler. Activates the first modal asking for phone #.
  document.querySelector('.top-bar').style.filter = 'blur(3px)'
  document.querySelector('#intro-panel').style.filter = 'blur(3px)'
  document.getElementById('phone-auth-container').classList.remove('invis')
  document.getElementById('phone-auth-container').classList.add('vis')
  document.getElementById('phone-login-form').classList.remove('invis')

  // Add Event Listeners
  let isOverPhoneAuthModal = false
  document
    .querySelector('#phone-auth-button')
    .addEventListener('click', e => submitPhoneAuth(e))
  document
    .getElementById('phone-auth-container')
    .addEventListener('click', hidePhoneAuth)
  document
    .getElementById('phone-login-form')
    .addEventListener('mouseenter', () => {
      isOverPhoneAuthModal = true
    })
  document
    .getElementById('phone-login-form')
    .addEventListener('mouseleave', () => {
      isOverPhoneAuthModal = false
    })
  document
    .getElementById('phone-verification-form')
    .addEventListener('mouseenter', () => {
      isOverPhoneAuthModal = true
    })
  document
    .getElementById('phone-verification-form')
    .addEventListener('mouseleave', () => {
      isOverPhoneAuthModal = false
    })
  document.addEventListener('keyup', e => {
    if (e.keyCode == 27) {
      document.querySelector('.top-bar').style.filter = 'none'
      document.querySelector('#intro-panel').style.filter = 'none'
      document.querySelector('#phone-auth-container').classList.remove('vis')
      document.querySelector('#phone-auth-container').classList.add('invis')
      document.getElementById('phone-login-form').classList.remove('vis')
      document.getElementById('phone-login-form').classList.add('invis')
      document.getElementById('phone-verification-form').classList.remove('vis')
      document.getElementById('phone-verification-form').classList.add('invis')
    }
  })

  function hidePhoneAuth() {
    // Click handler. Deactivates the modal.
    if (!isOverPhoneAuthModal) {
      document.querySelector('.top-bar').style.filter = 'none'
      document.querySelector('#intro-panel').style.filter = 'none'
      document.querySelector('#phone-auth-container').classList.remove('vis')
      document.querySelector('#phone-auth-container').classList.add('invis')
      document.getElementById('phone-verification-form').classList.remove('vis')
      document.getElementById('phone-verification-form').classList.add('invis')
    }
  }

  function submitPhoneAuth(e) {
    e.preventDefault()

    // Click handler that submits phone number.
    let phoneNumber = document.getElementById('tel').value
    let status = document.getElementById('tel-status')
    status.innerText = 'Sending...'

    firebase
      .auth()
      .signInWithPhoneNumber('+1 ' + phoneNumber, window.recaptchaVerifier)
      .then(function(confirmationResult) {
        // console.log('signInWithPhoneNumber => confirmationResult: ', confirmationResult)
        window.confirmationResult = confirmationResult
        status.innerText = ''
        askForCode(confirmationResult)
      })
      .catch(function(error) {
        // Error; SMS not sent
        // console.log('SignInWIthPhoneNumber => error:', error)
        if (error.message === 'TOO_SHORT') {
          status.innerText = 'Not enough digits, in your digits.'
        } else if (error.code === 'auth/invalid-phone-number') {
          status.innerText = 'Invalid format. \nExample: (555) 123-1234'
        } else {
          status.innerText = error.message
        }

        // Reset reCAPTCHA
        recaptchaVerifier.render().then(function(widgetId) {
          grecaptcha.reset(widgetId)
        })
      })

    function askForCode(confirmationResult) {
      // Reveal the second modal asking for verification code.
      document.getElementById('phone-login-form').classList.remove('vis')
      document.getElementById('phone-login-form').classList.add('invis')
      document
        .getElementById('phone-verification-form')
        .classList.remove('invis')
      document.getElementById('phone-verification-form').classList.add('vis')

      // Click handler to submit the verification code.
      document
        .getElementById('phone-verification-button')
        .addEventListener('click', e => {
          e.preventDefault()
          let code = document.getElementById('code').value
          let status = document.getElementById('verification-status')

          confirmationResult
            .confirm(code)
            .then(function(result) {
              // Will be authenticated & auto redirected to /app
            })
            .catch(function(error) {
              status.innerText = error.message
            })
        })
    }
  }
}

// LIVE PHONE INPUT REFORMATING
const isNumericInput = event => {
  const key = event.keyCode
  return (
    (key >= 48 && key <= 57) || // Allow number line
    (key >= 96 && key <= 105) // Allow number pad
  )
}

const isModifierKey = event => {
  const key = event.keyCode
  return (
    event.shiftKey === true ||
    key === 35 ||
    key === 36 || // Allow Shift, Home, End
    (key === 8 || key === 9 || key === 13 || key === 46) || // Allow Backspace, Tab, Enter, Delete
    (key > 36 && key < 41) || // Allow left, up, right, down
    // Allow Ctrl/Command + A,C,V,X,Z
    ((event.ctrlKey === true || event.metaKey === true) &&
      (key === 65 || key === 67 || key === 86 || key === 88 || key === 90))
  )
}

const enforceFormat = event => {
  // Input must be of a valid number format or a modifier key, and not longer than ten digits
  if (!isNumericInput(event) && !isModifierKey(event)) {
    event.preventDefault()
  }
}

const formatToPhone = event => {
  if (isModifierKey(event)) {
    return
  }

  // I am lazy and don't like to type things more than once
  const target = event.target
  const input = event.target.value.replace(/\D/g, '').substring(0, 10) // First ten digits of input only
  const zip = input.substring(0, 3)
  const middle = input.substring(3, 6)
  const last = input.substring(6, 10)

  if (input.length > 6) {
    target.value = `(${zip}) ${middle}-${last}`
  } else if (input.length > 3) {
    target.value = `(${zip}) ${middle}`
  } else if (input.length > 0) {
    target.value = `(${zip}`
  }
}

if (document.getElementById('tel') !== null) {
  const inputElement = document.getElementById('tel')
  inputElement.addEventListener('keydown', enforceFormat)
  inputElement.addEventListener('keyup', formatToPhone)
}
