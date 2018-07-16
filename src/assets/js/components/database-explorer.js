

document.addEventListener('DOMContentLoaded', () => {
  let output = document.querySelector('.db-explorer-container .output')
  let refField = document.querySelector('.db-explorer-container .ref-field')

  if (typeof output !== null && typeof ref !== null) {
    refField.addEventListener('change', getRef())
    getRef()
  }

  function getRef(ref = '/users') {
    refField.value ? (ref = refField.value) : null

    return firebase
      .database()
      .ref(ref)
      .on('value', snap => {
        let s = snap.val()
        s !== null
          ? (output.innerHTML = JSON.stringify(snap.val(), null, 3))
          : null
      })
  }
})
