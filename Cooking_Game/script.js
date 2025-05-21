//-------------Start-Game-------------//

const button = document.querySelector("button"); 
button.addEventListener('click', toggleScreens);


//-------------Switch-Screen-------------//

const game = document.querySelector(".Game");           // Selects element with class "Game"
const levelScreen = document.querySelector(".LevelScreen"); // Selects element with class "LevelScreen"

game.classList.add("hide");

function toggleScreens(){
    if (game.classList.contains("hide")) {
        game.classList.remove("hide");
        levelScreen.classList.add("hide");

        startTimer();
    } else {
        game.classList.add("hide");
        levelScreen.classList.remove("hide");

        if(timer !== null){
            clearInterval(timer);
            timer = null;
        }
    }
}


//-------------Timer-------------//

let timerText = document.querySelector("h1");
let secondsPassed = 250; // Set the starting number
let timer = null;

function countSeconds() {
    let minutes = Math.floor(secondsPassed / 60); //how manny times can 60 fit inside snd round down
    let seconds = secondsPassed % 60; //take the left over seconds

    let formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`; //String(minutes) converts the number to a string. padStart(2, '0') ensures the string is at least 2 characters long:
    timerText.textContent = formattedTime;
    secondsPassed -= 1;

    if (secondsPassed < 0) {
        clearInterval(timer); // Stop when it reaches below 0
        timer = null;
        toggleScreens()
    }
}

function startTimer() {
    // Reset the timer if it's running
    if (timer !== null) {
        clearInterval(timer);
    }

    secondsPassed = 250; // Reset time
    countSeconds(); // Show the first second immediately
    timer = setInterval(countSeconds, 1000);
}