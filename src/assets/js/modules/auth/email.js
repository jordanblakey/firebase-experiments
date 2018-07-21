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
      document.addEventListener('keyup', e => {
        if (e.keyCode == 27) {
          that.deactivate()
        }
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
