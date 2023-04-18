var minimum = 1;
var maximum = 100;
var int1 = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
var int2 = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
const car = document.querySelector('.red__car').innerHTML
document.querySelector('.math__question').innerHTML = int1 + " " + "+" + " " + int2;
var qanswer = int1 + int2;
      
function move() {
      var uanswer = document.querySelector('.math__answer').value;
      if (uanswer == qanswer) {
            alert("Het antwoord is juist.");
            /* car.style.left = parseInt(car.style.left) + 10 + 'px';*/
      } else {
            alert("Het antwoord is onjuist. Probeer het opnieuw.");
      }
}