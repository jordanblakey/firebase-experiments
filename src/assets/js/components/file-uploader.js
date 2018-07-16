////////////////////////////////////////////////////////////////////////////////
// STYLE FILE INPUTS
////////////////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', () => {
  styleFileInputs()
})

function styleFileInputs() {
  let inputs = document.querySelectorAll('input[type="file"]')
  ;[].forEach.call(inputs, input => {
    let label = input.nextElementSibling,
      labelVal = label.innerHTML

    // console.log( 'inputs: ', inputs, '\ninput: ', input, '\nlabel: ', label, '\nlabelVal:', labelVal )

    input.addEventListener('change', e => {
      console.log('this.files: ', input.files)
      let fileName = ''
      if (input.files && input.files.length > 1) {
        fileName = (input.getAttribute('data-multiple-caption') || '').replace(
          '{count}',
          input.files.length
        )
      } else {
        fileName = e.target.value.split('\\').pop()
      }

      let sel = label.querySelector('span')
      if (fileName) {
        sel.innerHTML = fileName
        sel.classList.remove('hide')
      } else {
        label.innerHTML = labelVal
        sel.classList.add('hide')
      }
    })
  })
}


////////////////////////////////////////////////////////////////////////////////
// FIREBASE STORAGE UPLOAD
////////////////////////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', () => {
  let qs = q => document.querySelector(q)
  let uploader = qs('.file-uploader-container .uploader')
  let filename = qs('.file-uploader-container label span')
  console.log(filename)
  let status = qs('.file-uploader-container .status')
  let viewer = qs('.file-uploader-container .viewer')
  if (uploader) {
    uploader.addEventListener('change', e => uploadFile(e, status, viewer, filename))
  }
})

function uploadFile(e, status, viewer, filename) {
  let file = e.target.files.item(0)
  let uploadTask = firebase
    .storage()
    .ref()
    .child(file.name).put(file)

  uploadTask.on('state_changed', function(snapshot){
    let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    filename.innerHTML = `${file.name}: ${parseInt(progress)}%`
    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED:
        console.log('Upload is paused');
        break;
      case firebase.storage.TaskState.RUNNING:
        console.log('Upload is running');
        break;
    }
  }, function(error) {
    status.innerHTML = `Error: ${error}`
  }, function() {
    uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
      console.log('File available at', downloadURL);
      if (file.name.match(/\.(jpeg|jpg|gif|png|svg)$/) != null) {
        viewer.src = downloadURL
      }
      e.target.value = ''
        status.innerHTML = `Success.&nbsp;&nbsp;<a href="${downloadURL}">Download</a>`
        status.classList.remove('alert', 'hidden')
        status.classList.add('success', 'shown')
    });
  });
}

