import { arrive, Arrive } from '../../lib/arrive'
import './google'
import './email'
import './phone'
import './anon'

////////////////////////////////////////////////////////////////////////////////
// OBSERVE AUTH STATUS
////////////////////////////////////////////////////////////////////////////////
window.addEventListener('DOMContentLoaded', observeAuthStatus)

export function observeAuthStatus() {
  firebase.auth().onAuthStateChanged(
    function(user) {
      if (user) {
        // console.log('LOGGED IN')
        // GO TO /APP
        if (window.location.origin === window.location.href.slice(0, -1)) {
          window.location.href =
            location.href.split('/')[0] +
            '//' +
            location.href.split('/')[2] +
            '/app'
        }

        if (
          document.getElementById('log-in-status') !== null &&
          document.getElementById('log-in') !== null
        ) {
          user.getIdToken().then(() => {
            // UPDATE TOP BAR
            document.getElementById('log-in-status').textContent = `Welcome, ${
              user.displayName !== null ? user.displayName : 'anon'
            }.`

            // CLICK HANDLER FOR LOG OUT BUTTON
            document.getElementById('log-in').textContent = 'Log out'
            document.getElementById('log-in').addEventListener('click', () => {
              sessionStorage.clear()
              firebase.auth().signOut()
            })

            // RENDER ACCOUNT DETAILS
            document.getElementById('account-details') !== null
              ? renderAccountDetails(user)
              : null
          })
        }
      } else {
        // console.log('LOGGED OUT')
        // BOUNCE TO ROOT
        if (window.location.origin !== window.location.href.slice(0, -1)) {
          window.location.href = window.location.origin
        }

        // UPDATE TOP BAR
        if (
          document.getElementById('log-in-status') !== null &&
          document.getElementById('log-in') !== null
        ) {
          document.getElementById('log-in-status').textContent = 'Logged out'
        }
      }
    },
    err => console.log(err)
  )
}

////////////////////////////////////////////////////////////////////////////////
// FUNCTIONS
////////////////////////////////////////////////////////////////////////////////

export function renderAccountDetails(user) {
  document.getElementById('account-details').style.display = 'flex'
  document.getElementById('account-details').innerHTML = `
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
