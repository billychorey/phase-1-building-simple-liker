// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// fetch('http://example.com/movies.json')
// .then(res => res.json())
// .then(data => console.log(data));
//first get the buttons
let buttons = document.querySelectorAll('li span');

buttons.forEach(button => {
  button.addEventListener('click', addRemoveLike)
})





function addRemoveLike(e) {
  target = e.target;
  mimicServerCall()
  .then(function (response) {
    if (target.classList.contains('like-glyph')) {
      target.classList.remove('like-glyph');
      target.classList.add('activated-heart');
    } else {
      target.classList.remove('activated-heart');
      target.classList.add('like-glyph');
    }
    
  })
  .catch(function (error) {
    document.querySelector('#modal').classList.remove('hidden')
    setTimeout(function () {
      document.querySelector('#modal').classList.add('hidden')
    }, 3000)
  });

}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  console.log('in mimic server func')
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
