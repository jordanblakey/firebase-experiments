import { arrive, Arrive } from '../lib/arrive'
const gebi = elm => document.getElementById(elm)
const qs = elm => document.querySelector(elm)
const appUrl =
  location.href.split('/')[0] + '//' + location.href.split('/')[2] + '/app'

////////////////////////////////////////////////////////////////////////////////
// FIREBASEUI AUTH CONFIG
////////////////////////////////////////////////////////////////////////////////
window.addEventListener('DOMContentLoaded', () => {
  let uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        let { user, credential, operationType } = authResult.user
        let { isNewUser, providerId } = authResult.additionalUserInfo
        sessionStorage.setItem('user', user)
        sessionStorage.setItem('credential', credential)
        sessionStorage.setItem('operationType', operationType)
        sessionStorage.setItem('isNewUser', isNewUser)
        sessionStorage.setItem('providerId', providerId)
        return true
      },
      signInFailure: function(error) {
        return handleUIError(error)
      },
      uiShown: function() {
        // Rename buttons
        document.arrive('.firebaseui-idp-text-long', elm => {
          elm.innerHTML = 'Log ' + elm.innerHTML.split(' ')[1]
        })
      }
    },
    credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM,
    queryParameterForWidgetMode: 'mode',
    queryParameterForSignInSuccessUrl: 'signInSuccessUrl',
    signInFlow: 'popup',
    signInSuccessUrl: appUrl,
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      // {
      //   provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      //   requireDisplayName: true
      // },
      {
        provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        recaptchaParameters: {
          type: 'image',
          size: 'invisible',
          badge: 'bottomleft'
        }
      }
    ],
    tosUrl: '',
    privacyPolicyUrl: ''
  }

  if (gebi('firebaseui-auth-container') !== null) {
    let ui = new firebaseui.auth.AuthUI(firebase.auth())
    // The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig)
  }
})

////////////////////////////////////////////////////////////////////////////////
// EMAIL LOGIN FORM
////////////////////////////////////////////////////////////////////////////////

if (document.querySelector('#phone-login-button') !== null) {
  document
    .querySelector('#phone-login-button')
    .addEventListener('click', showPhoneAuth)

  // CONFIGURATION
  firebase.auth().languageCode = 'us'
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
  document.getElementById('phone-login-form').classList.add('vis')

  // Add Event Listeners
  let isOverPhoneAuthModal = false
  document
    .querySelector('#phone-auth-button')
    .addEventListener('click', submitPhoneAuth)
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

  function submitPhoneAuth() {
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

////////////////////////////////////////////////////////////////////////////////
// EMAIL LOGIN FORM
////////////////////////////////////////////////////////////////////////////////

const loginSignupForm = {
  emailLoginButton: document.querySelector('#email-login-button'),
  container: document.querySelector('#login-signup-form-container'),
  form: document.querySelector('#login-signup-form'),
  overModal: false,
  emailField: document.querySelector('#email'),
  passwordField: document.querySelector('#password'),
  loginButton: document.querySelector('#login'),
  signupButton: document.querySelector('#signup'),
  status: document.querySelector('#status'),

  init: function() {
    // Env check and event handler attachment
    let that = loginSignupForm
    if (that.container !== null) {
      loginSignupForm.emailField.addEventListener('keyup', e => {
        loginSignupForm.email = e.target.value
      })
      that.passwordField.addEventListener('keyup', e => {
        that.password = e.target.value
      })
      that.loginButton.addEventListener('click', that.handleLogin)
      that.signupButton.addEventListener('click', that.handleSignup)
      that.emailLoginButton.addEventListener('click', loginSignupForm.activate)
      that.container.addEventListener('click', loginSignupForm.deactivate)
      that.form.addEventListener('mouseenter', e => {
        that.overModal = true
      })
      that.form.addEventListener('mouseleave', e => {
        that.overModal = false
      })
    }
  },

  activate: function() {
    // Click handler. Activates the modal.
    document.querySelector('.top-bar').style.filter = 'blur(3px)'
    document.querySelector('#intro-panel').style.filter = 'blur(3px)'
    loginSignupForm.container.classList.remove('invis')
    loginSignupForm.container.classList.add('vis')
  },

  deactivate: function() {
    // Click handler. Deactivates the modal.
    if (!loginSignupForm.overModal) {
      document.querySelector('.top-bar').style.filter = 'none'
      document.querySelector('#intro-panel').style.filter = 'none'
      loginSignupForm.container.classList.remove('vis')
      loginSignupForm.container.classList.add('invis')
    }
  },

  handleSignup: function() {
    // Click handler. Attempts to log in with email and password.
    let that = loginSignupForm

    console.log('click -> handleLogin')
    firebase
      .auth()
      .createUserWithEmailAndPassword(that.email, that.password)
      .then(function(user) {
        that.status.innerText = 'Sign up succeeded!'
      })
      .catch(function(error) {
        that.status.innerText = error.message
        console.log(error)
      })
  },

  handleLogin: function() {
    // Click handler. Checks for account.
    // If exists, logs in, else creates account and then logs in.

    let that = loginSignupForm

    if (typeof that.email !== 'string' || typeof that.password !== 'string') {
      that.status.innerText = `Email and password are required.`
    }

    firebase
      .auth()
      .signInWithEmailAndPassword(that.email, that.password)
      .then(function(user) {
        that.status.innerText = `Logging you in.`
      })
      .catch(function(error) {
        if (error.code === 'auth/invalid-email') {
          that.status.innerText = `The email is badly formatted. Typo?`
        } else if (error.code === 'auth/wrong-password') {
          that.status.innerText = `The password is incorrect.`
        } else if (error.code === 'auth/user-not-found') {
          that.status.innerText = `User doesn't exist. Signing up.`
          firebase
            .auth()
            .createUserWithEmailAndPassword(that.email, that.password)
            .then(function() {
              that.status.innerText = `Sign up succeeded!`
            })
            .catch(function(error) {
              if (error.code === 'auth/weak-password') {
                that.status.innerText = `Sign up failed: ${error.message}`
              }
              console.error(error)
            })
        }
      })
  }
} // End loginSignupForm

window.addEventListener('DOMContentLoaded', loginSignupForm.init)

////////////////////////////////////////////////////////////////////////////////
// OBSERVE AUTH STATUS
////////////////////////////////////////////////////////////////////////////////
window.addEventListener('DOMContentLoaded', observeAuthStatus)

export function observeAuthStatus() {
  firebase.auth().onAuthStateChanged(
    function(user) {
      if (user) {
        // console.log('LOGGED IN')
        if (window.location.origin === window.location.href.slice(0, -1)) {
          console.log("YOU'RE AT THE ORIGIN. GO INSIDE!")
          window.location.href = appUrl
        }

        if (gebi('log-in-status') !== null && gebi('log-in') !== null) {
          user.getIdToken().then(() => {
            // UPDATE TOP BAR
            gebi('log-in-status').textContent = `Welcome, ${
              user.displayName !== null ? user.displayName : 'anon'
            }.`

            // CLICK HANDLER FOR LOG OUT BUTTON
            gebi('log-in').textContent = 'Log out'
            gebi('log-in').addEventListener('click', () => {
              sessionStorage.clear()
              firebase.auth().signOut()
            })

            // RENDER ACCOUNT DETAILS
            gebi('account-details') !== null ? renderAccountDetails(user) : null
          })
        }
      } else {
        // console.log('LOGGED OUT')

        // BOUNCE TO ROOT
        if (window.location.origin !== window.location.href.slice(0, -1)) {
          window.location.href = window.location.origin
        }

        // UPDATE TOP BAR
        if (gebi('log-in-status') !== null && gebi('log-in') !== null) {
          gebi('log-in-status').textContent = 'Logged out'
          document.querySelectorAll('.firebaseui-idp-text-long').forEach(n => {
            let arr = n.innerHTML.split(' ')
            n.innerHTML = 'Log ' + arr[1]
          })
        }

        // CLICK HANDLER FOR ANON LOGIN BUTTON
        document.getElementById('anon-log-in').addEventListener('click', () => {
          gebi('log-in-status').textContent = `Authenticating...`
          firebase.auth().signInAnonymously()
        })
      }
    },
    err => console.log(err)
  )
}

////////////////////////////////////////////////////////////////////////////////
// FUNCTIONS
////////////////////////////////////////////////////////////////////////////////

export function renderAccountDetails(user) {
  gebi('account-details').style.display = 'flex'
  gebi('account-details').innerHTML = `
    <div class="avatar-name-row">
      <img
        style="border:${user.photoURL ? null : '4px solid #e5e5e5'};"
        src="${user.photoURL ? user.photoURL : '../assets/img/logo.svg'}"
      />
      <p><b>${user.displayName !== null ? user.displayName : 'anon'}</b></p>
    </div>
  <ul>
    <li><span>Email</span><br>${user.email ? user.email : 'None'}</li>
    <li><span>Verified</span><br>${user.emailVerified ? 'Yes' : 'No'}</li>
    <li><span>Phone</span><br>${
      user.phoneNumber ? user.phoneNumber : 'None'
    }</li>
    <li><span>UID</span><br>${user.uid}</li>
  </ul>`
}
