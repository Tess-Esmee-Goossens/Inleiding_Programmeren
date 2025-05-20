console.log("Hallo Wereld!");
let hintP = document.querySelector("p");

function showHint() {
    hintP.textContent = "It’s old and squeeky";
    setTimeout(hideHint, 3000);
};

function hideHint() {
    hintP.textContent = "";
};

showHint();


console.log("Hallo Wereld!");

let bericht = "Hello world!";
let kop = document.querySelector("h1");

let secondsPassed = 0


function countSeconds() {
    kop.textContent = secondsPassed
    secondsPassed += 1
}

let timer = setInterval(countSeconds, 1000)
const btnStop = document.querySelector("button");

btnStop.addEventListener("click", stopCountingTime)

function stopCountingTime(){
    clearInterval(timer)
} 