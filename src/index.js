import process from 'socket:process'

if (process.env.DEBUG) {
  console.log('started in debug mode')
}

window.addEventListener('DOMContentLoaded', () => {
  var valueDisplay = document.getElementById('valueDisplay')
  var incrementButton = document.getElementById('incrementButton')
  var currentValue = 0
  
  incrementButton.addEventListener('click', function() {
    currentValue += 1
    valueDisplay.textContent = currentValue
  })
})

