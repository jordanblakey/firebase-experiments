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
    console.log('that', loginSignupForm)
    console.log('that.container', loginSignupForm.container)
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
  },

  handleLogout: function() {
    // Stub. Handled elsewhere.
    console.log('click -> handleLogout')
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
