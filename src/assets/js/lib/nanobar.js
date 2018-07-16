// NANOBAR: Very lightweight progress bars /////////////////////////////////////
// http://nanobar.jacoborus.codes/

import Nanobar from 'nanobar'

// EXAMPLE /////////////////////////////////////////////////////////////////////
const button = document.getElementById('nanobar-button')

if (button !== null) {
  let nanobar = new Nanobar({ id: 'nanobar' })

  // Create the success message in memory
  const success = document.createElement('h3')
  const txt = document.createTextNode('Success!')
  success.appendChild(txt)

  // Add click listener
  let percent = 0
  button.addEventListener('click', function() {
    // Increment the percentage and sent it to Nanobar instance progress
    percent += 25
    nanobar.go(percent)

    // Check for 100%
    if (percent === 100) {
      nanobar = null

      // Append the success message to the DOM
      let successmsg = document.querySelector('#success-message')
      successmsg.appendChild(success)
      let h3 = document.querySelector('#success-message h3')

      // Success Message Lifecycle, toggle animation class
      setTimeout(() => {
        h3.classList.toggle('on')
        setTimeout(() => {
          h3.classList.toggle('on')
          setTimeout(() => {
            successmsg.removeChild(h3)
            percent = 0
            nanobar = new Nanobar({ id: 'nanobar' })
          }, 100)
        }, 1000)
      }, 100);
    }
  })
}

export { Nanobar }