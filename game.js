let minimum = 1;
let maximum = 100;
let car = document.querySelector('.red-car').innerHTML;

function generateQuestion() {
  let int1 = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  let int2 = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
      document.querySelector('.math__question').innerHTML = int1 + " " + "+" + " " + int2;
      return int1 + int2;
}

let qanswer = generateQuestion();

function move() {
      let uanswer = document.querySelector('.math__answer').value;
      if (uanswer == qanswer) {
      let car = document.querySelector('.red-car');
      let moveDistances = [170];
      let finalLeft = moveDistances.reduce(function(acc, distance) {
            return acc + distance;
      }, parseInt(getComputedStyle(car).getPropertyValue("left")));
      car.style.left = finalLeft + 'px';
      qanswer = generateQuestion();
      } else {
      alert("Het antwoord is onjuist. Probeer het opnieuw.");
      }
}