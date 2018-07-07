console.log('hello')

document.addEventListener('DOMContentLoaded', event => {
  const app = firebase.app()
  console.log(app)

  const firestore = firebase.firestore()
  const settings = { /* your settings... */ timestampsInSnapshots: true }
  firestore.settings(settings)
  const myPost = firestore.collection('notes').doc('kqrOIlpWlbPrk6ZQNrmi')
  myPost.get().then(doc => {
    const data = doc.data()
    let t = data.createdAt.toDate()
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

    let ts =
      monthNames[t.getMonth()] + ' ' + t.getDate() + ', ' + t.getFullYear()

    document.write(`<h1>` + data.title + `</h1>`)
    document.write(`<p>` + data.body + `</p>`)
    document.write(`<code>` + ts + `</code>`)
    // document.write(JSON.stringify(data, null, 2))
  })
})

function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider()

  firebase
    .auth()
    .signInWithPopup(provider)

    .then(result => {
      const user = result.user
      document.write(`Hello ${user.displayName}`)
    })
    .catch(console.log)
}
