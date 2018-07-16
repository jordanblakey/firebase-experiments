import firebase from 'firebase/app'
import 'firebase/auth'
// import 'firebase/database'
import 'firebase/firestore'
import 'firebase/storage'
import { config } from '../../../../firebase'

firebase.initializeApp({
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  databaseURL: config.databaseURL,
  projectId: config.projectId,
  storageBucket: config.storageBucket,
  messagingSenderId: config.messagingSenderId
})
firebase.firestore().settings({ timestampsInSnapshots: true })

window.firebase = firebase

export default firebase

// FOR INDEX PAGE ONLY /////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function() {
  try {
    let app = firebase.app()
    let features = ['auth', 'database', 'messaging', 'storage'].filter(
      feature => typeof app[feature] === 'function'
    )
    features = features.map(f => f.charAt(0).toUpperCase() + f.substr(1))
    qs('.load').innerHTML = `Firebase SDK: ${features.join(', ')} loaded.`

    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION) // SESSION, LOCAL, NONE
    firebase.firestore().settings({ timestampsInSnapshots: true })
  } catch (e) {
    qs('.login-page') ? console.error(e) : null
  }
})
