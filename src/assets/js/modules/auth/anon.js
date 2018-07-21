// CLICK HANDLER FOR ANON LOGIN BUTTON
if (document.getElementById('anon-log-in') !== null) {
  document.getElementById('anon-log-in').addEventListener('click', () => {
    document.getElementById('log-in-status').textContent = `Authenticating...`
    firebase.auth().signInAnonymously()
  })
}
