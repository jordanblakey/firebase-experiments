const functions = require('firebase-functions')
const admin = require('firebase-admin')

admin.initializeApp(functions.config().firebase)

exports.createUser = functions.firestore
  .document('users/{userId}')
  .onCreate((snap, context) => {
    // Get an object representing the document
    // e.g. {'name': 'Marie', 'age': 66}
    const newValue = snap.data()

    // access a particular field as you would any JS property
    const name = newValue.name

    return snap.ref.set(
      {
        message: `Welcome to Functions, ${name}!`
      },
      { merge: true }
    )

    // perform desired operations ...
  })

// Listen for updates to any `user` document.
exports.countNameChanges = functions.firestore
  .document('users/{userId}')
  .onUpdate((change, context) => {
    // Retrieve the current and previous value
    const data = change.after.data()
    const previousData = change.before.data()

    // We'll only update if the name has changed.
    // This is crucial to prevent infinite loops.
    if (data.name === previousData.name) return null

    // Retrieve the current count of name changes
    let count = data.name_change_count
    if (!count) {
      count = 0
    }

    // Then return a promise of a set operation to update the count
    return change.after.ref.set(
      {
        name_change_count: count + 1
      },
      { merge: true }
    )
  })
