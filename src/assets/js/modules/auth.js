import { arrive, Arrive } from '../lib/arrive'
const gebi = elm => document.getElementById(elm)
const qs = elm => document.querySelector(elm)

////////////////////////////////////////////////////////////////////////////////
// FIREBASEUI AUTH CONFIG
////////////////////////////////////////////////////////////////////////////////
window.addEventListener('DOMContentLoaded', () => {
  let uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        let user = authResult.user
        let credential = authResult.credential
        let isNewUser = authResult.additionalUserInfo.isNewUser
        let providerId = authResult.additionalUserInfo.providerId
        let operationType = authResult.operationType
        // Do something with the returned AuthResult.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        sessionStorage.setItem('accessToken', 'pending')
        sessionStorage.setItem('user', JSON.stringify(user))
        qs('body').insertAdjacentHTML('afterbegin', `<div id="splash"></div>`)
        sessionStorage.setItem('fresh-login', true)

        return true
      },
      signInFailure: function(error) {
        // Some unrecoverable error occurred during log-in.
        // Return a promise when error handling is completed and FirebaseUI
        // will reset, clearing any UI. This commonly occurs for error code
        // 'firebaseui/anonymous-upgrade-merge-conflict' when merge conflict
        // occurs. Check below for more details on this.
        return handleUIError(error)
      },
      uiShown: function() {
        // The widget is rendered.
        // Hide the loader.
      }
    },
    credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM,
    // Query parameter name for mode.
    queryParameterForWidgetMode: 'mode',
    // Query parameter name for sign in success url.
    queryParameterForSignInSuccessUrl: 'signInSuccessUrl',
    // Will use popup for IDP Providers log-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl:
      location.href.split('/')[0] + '//' + location.href.split('/')[2] + '/app',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      // {
      //   provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      //   // Whether the display name should be displayed in the Sign Up page.
      //   requireDisplayName: true
      // },
      {
        provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        // Invisible reCAPTCHA with image challenge and bottom left badge.
        recaptchaParameters: {
          type: 'image',
          size: 'invisible',
          badge: 'bottomleft'
        }
      }
    ],
    // Terms of service url.
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
// TRACK AUTH ACROSS PAGES
////////////////////////////////////////////////////////////////////////////////
window.addEventListener('DOMContentLoaded', initApp)

export function initApp() {
  firebase.auth().onAuthStateChanged(
    user => {
      // IF LOGGED IN ////////////////////////////////////////////////////////////////
      if (user) {
        if (
          gebi('log-in-status') !== null &&
          gebi('log-in') !== null &&
          gebi('account-details') !== null
        ) {
          user.getIdToken().then(function(accessToken) {
            // TOP BAR: LOGGED IN
            gebi('log-in-status').textContent = `Welcome, ${
              user.displayName !== null ? user.displayName : 'anon'
            }.`
            gebi('log-in').textContent = 'Log out'
            gebi('log-in').addEventListener('click', () => logout())
            // RENDER ACCOUNT DETAILS
            gebi('account-details').style.display = 'flex'
            gebi('account-details').innerHTML = `<div class="avatar-name-row">
            <img src="${user.photoURL}" />
            <p><b>${user.displayName}</b></p>
          </div>
          <ul>
            <li><span>Email</span><br>${user.email}</li>
            <li><span>Verified</span><br>${
              user.emailVerified ? 'Yes' : 'No'
            }</li>
            <li><span>Phone</span><br>${
              user.phoneNumber ? user.phoneNumber : 'Not provided'
            }</li>
            <li><span>UID</span><br>${user.uid}</li>
          </ul>`
            // SET SESSION DATA
            sessionStorage.setItem(
              'providerData',
              JSON.stringify(user.providerData[0], null, 3)
            )
            sessionStorage.setItem('accessToken', user.accessToken)
            sessionStorage.setItem('user', JSON.stringify(user))
          })
        }
      }

      // IF LOGGED OUT ///////////////////////////////////////////////////////////////
      else {
        sessionStorage.removeItem('accessToken')
        sessionStorage.removeItem('user')
        let href = window.location.href
        href = href.substring(0, href.length - 1)
        href === window.location.origin ? null : (window.location.href = '/')

        if (
          gebi('log-in-status') !== null &&
          gebi('log-in') !== null &&
          gebi('account-details') !== null
        ) {
          // HIDE ACCOUNT DETAILS
          gebi('account-details').style.display = 'none'
          // TOP BAR: LOGGED OUT
          gebi('log-in-status').textContent = 'Logged out'
          document.querySelectorAll('.firebaseui-idp-text-long').forEach(n => {
            let arr = n.innerHTML.split(' ')
            n.innerHTML = 'Log ' + arr[1]
          })
        }
      }
    },
    error => console.log(error)
  )
}

////////////////////////////////////////////////////////////////////////////////
// FUNCTIONS
////////////////////////////////////////////////////////////////////////////////

export function logout() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      sessionStorage.clear()
      window.location.href = '/'
    })
    .catch(error => console.log(error))
}

document.arrive('.firebaseui-idp-text-long', elm => {
  let arr = elm.innerHTML.split(' ')
  elm.innerHTML = 'Log ' + arr[1]
  document.unbindArrive('.firebaseui-idp-text-long')
})

document.arrive('.firebaseui-idp-button', elm => {
  if (elm.querySelector('.firebaseui-idp-text-short').innerText === 'Google') {
    elm.addEventListener('click', () => {
      qs('body').insertAdjacentHTML('afterbegin', `<div id="splash"></div>`)
    })
    document.unbindArrive('.firebaseui-idp-button')
  }
})

document.arrive('.firebaseui-id-submit', elm => {
  if (elm.innerText === 'Continue') {
    console.log('FOUND YOU PHONE')
    elm.addEventListener('click', () => {
      qs('body').insertAdjacentHTML('afterbegin', `<div id="splash"></div>`)
    })
  }
  document.unbindArrive('.firebaseui-id-submit')
})
