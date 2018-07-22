import { config } from '../../../../firebase'

firebase.initializeApp({
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  databaseURL: config.databaseURL,
  projectId: config.projectId,
  storageBucket: config.storageBucket,
  messagingSenderId: config.messagingSenderId
})

window.firebase = firebase

document.addEventListener('DOMContentLoaded', function() {
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION) // SESSION, LOCAL, NONE
})
