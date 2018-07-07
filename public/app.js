document.addEventListener('DOMContentLoaded', () => {
  let loggedInUser
  let authDiv = document.querySelector('#authStatus')
  console.log(authDiv)

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      loggedInUser = user
      renderPage(user)
      authDiv.innerHTML = loggedInUser.displayName + ' is logged in.'
    } else {
      authDiv.innerHTML = 'No user is signed in.'
    }
  })
})

function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider()

  firebase
    .auth()
    .signInWithPopup(provider)

    .then(result => {
      loggedInUser = result.user
      renderPage(result)
    })
    .catch(console.log)
}

function googleLogout() {
  firebase
    .auth()
    .signOut()
    .then(function() {
      console.log('Signed out')
      location.reload()
    })
    .catch(function(error) {
      console.log(error)
    })
}

function renderPage(res) {
  const app = firebase.app()
  console.log(app)

  const firestore = firebase.firestore()
  const settings = { /* your settings... */ timestampsInSnapshots: true }
  firestore.settings(settings)
  const myPost = firestore.collection('notes').doc('kqrOIlpWlbPrk6ZQNrmi')
  myPost.get().then(doc => {
    const data = doc.data()
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]
    let ts = data.createdAt.toDate()
    ts =
      monthNames[ts.getMonth()] + ' ' + ts.getDate() + ', ' + ts.getFullYear()

    // <code>Hello ${user.displayName}</code>
    let pageContent = document.querySelector('#pageContent')
    pageContent.innerHTML = `
      <h1>${data.title}</h1>
      <p>${data.body}</p>
      <code>${ts}</code>
      <button onclick="googleLogout()">Logout </button>
    `
  })
}
