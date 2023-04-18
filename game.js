var minimum = 1;
var maximum = 100;
var int1 = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
var int2 = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
const car = document.querySelector('.red-car').innerHTML
document.querySelector('.math__question').innerHTML = int1 + " " + "+" + " " + int2;
var qanswer = int1 + int2;
      
function move() {
      var uanswer = document.querySelector('.math__answer').value;
      if (uanswer == qanswer) {
      var car = document.querySelector('.red-car');
      var moveDistances = [50, 100, 75, 120]; 
      var finalLeft = moveDistances.reduce(function(acc, distance) {
            return acc + distance; // 
      }, parseInt(getComputedStyle(car).getPropertyValue("left"))); 
      
      car.style.left = finalLeft + 'px'; 
      } else {
      alert("Het antwoord is onjuist. Probeer het opnieuw.");
      }
}