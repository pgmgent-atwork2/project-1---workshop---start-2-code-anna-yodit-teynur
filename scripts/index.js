const sums = document.querySelectorAll('.sum');

let winWidth = window.innerWidth;
let winHeight = window.innerHeight;

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

for (let i = 0; i < sums.length; i++) {
  let thisSum = sums[i];
  
  let randomTop = Math.floor(getRandomNumber(0, winHeight));
  let randomLeft = Math.floor(getRandomNumber(0, winWidth));
  
  thisSum.style.top = randomTop + "px";
  thisSum.style.left = randomLeft + "px";
  
  setInterval(function() {
    randomTop = Math.floor(getRandomNumber(0, winHeight));
    randomLeft = Math.floor(getRandomNumber(0, winWidth));
  
    thisSum.style.top = randomTop + "px";
    thisSum.style.left = randomLeft + "px";
  }, 2500);
}
