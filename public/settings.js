app = firebase.app()
features = ['auth', 'database', 'messaging', 'storage'].filter(
  feature => typeof app[feature] === 'function'
)
document.getElementById(
  'load'
).innerHTML = `Firebase SDK loaded with ${features.join(', ')}`
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION) // SESSION, LOCAL
firestore = firebase.firestore()
settings = { /* your settings... */ timestampsInSnapshots: true }
firestore.settings(settings)
