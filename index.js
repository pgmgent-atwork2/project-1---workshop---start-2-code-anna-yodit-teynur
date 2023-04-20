document.addEventListener("DOMContentLoaded", function() {
    const sums = document.querySelectorAll('.sum');
    
    let winWidth = window.innerWidth;
    let winHeight = window.innerHeight;
  
    for ( let i=0; i < sums.length; i++ ) {
      let thisSum = sums[i];
      
      let randomTop = Math.floor(getRandomNumber(100, winHeight));
      let randomLeft = Math.floor(getRandomNumber(10, winWidth));
      
      thisSum.style.top = randomTop +"px";
      thisSum.style.left = randomLeft +"px";
    }
  
    function getRandomNumber(min, max) {
      return Math.random() * (max - min) + min;
    }
});