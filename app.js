// forked and edited from https://github.com/kubowania/whac-a-mole

const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
const timePerformance = document.querySelector('#time_performance')
const elPrompt = document.querySelector('#prompt')

let result = 0
let hitPosition
let currentTime = 1000
let timerId = null
let numTrials = 0;
let timeperformance = 0.0;
let lastPerformance = 0.0;
let performanceHistory =[];

let timed = true;

keyboardKeys = [];
keyboardKeys.push("Backspace");
keyboardKeys.push("Tab");
keyboardKeys.push("Enter");
keyboardKeys.push("Shift");
keyboardKeys.push("Alt");
keyboardKeys.push("Control");
keyboardKeys.push("ArrowUp");
keyboardKeys.push("ArrowDown");
keyboardKeys.push("ArrowLeft");
keyboardKeys.push("ArrowRight");
keyboardKeys.push("a");
keyboardKeys.push("b");
keyboardKeys.push("c");
keyboardKeys.push("d");
keyboardKeys.push("e");
keyboardKeys.push("f");
keyboardKeys.push("g");
keyboardKeys.push("h");
keyboardKeys.push("i");
keyboardKeys.push("j");
keyboardKeys.push("k");
keyboardKeys.push("l");
keyboardKeys.push("m");
keyboardKeys.push("n");
keyboardKeys.push("o");
keyboardKeys.push("p");
keyboardKeys.push("q");
keyboardKeys.push("r");
keyboardKeys.push("s");
keyboardKeys.push("t");
keyboardKeys.push("u");
keyboardKeys.push("v");
keyboardKeys.push("q");
keyboardKeys.push("x");
keyboardKeys.push("y");
keyboardKeys.push("z");
keyboardKeys.push("1");
keyboardKeys.push("2");
keyboardKeys.push("3");
keyboardKeys.push("4");
keyboardKeys.push("5");
keyboardKeys.push("6");
keyboardKeys.push("7");
keyboardKeys.push("8");
keyboardKeys.push("9");
keyboardKeys.push("0");
keyboardKeys.push("-");
keyboardKeys.push("=");
keyboardKeys.push("[");
keyboardKeys.push("]");
keyboardKeys.push("\\");
keyboardKeys.push(";");
keyboardKeys.push("'");
keyboardKeys.push(",");
keyboardKeys.push(".");
keyboardKeys.push("/");
keyboardKeys.push("'");


function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}

currentIterm = "";

squares.forEach(square => {
  square.style.fontSize = 50;
  square.addEventListener('mousedown', () => {
    if (square.id == hitPosition) {
      timeperformance = performance.now(); 
      if(result > 0){
        
        performanceHistory.push(timeperformance - lastPerformance);
      }
      
      result++
      score.textContent = result + " / " + numTrials  + " trials"
      hitPosition = null
      square.classList.remove('mole')
      square.classList.add('cleared')
      if (timed == false) randomSquare();
    }
  })
})
if (timed == false) randomSquare();



function randomSquare() {
  
  lastPerformance = performance.now();
  squares.forEach(square => {
    square.classList.remove('mole')
    square.classList.remove('cleared')
  })

  let randomSquare = squares[Math.floor(Math.random() * 16)]
  //randomSquare.classList.add('mole')
  currentItem = random_item(keyboardKeys);
  randomSquare.textContent = currentItem;
  hitPosition = randomSquare.id
}



//function moveMole() {
//  timerId = setInterval(randomSquare, 500)
//}

//moveMole()

function countDown() {
 if (timed == true) randomSquare();
 numTrials++;
 currentTime--
 timeLeft.textContent = currentTime 

 if (currentTime == 0) {
   clearInterval(countDownTimerId)
   clearInterval(timerId)
   score.textContent = result + " / " + numTrials  + " trials"
   alert('GAME OVER! Your final score is ' + result)
   performanceHistory.sort((a,b)=>a-b);
   performanceHistory.forEach(x=>timePerformance.innerHTML += "<br>" + x);
   
 }

}


let countDownTimerId = setInterval(countDown, 400)
//let timeoutId = setTimeout(countDown, 1000)


