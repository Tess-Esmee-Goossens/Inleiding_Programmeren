console.log("sup")

let lampje = document.querySelector("#bulb")
let lampStatus = false
let knipperlichtAan = false
let intervalKnipperlicht

function lichtKnop(){
    if (lampStatus){
        lampje.src = "image/bulb_off.jpg"
    } else {
        lampje.src = "image/bulb_on.jpg"
    }
    lampStatus = !lampStatus
}

function schakelKnipperlicht(){
    if (!knipperlichtAan){
        knipperlichtAan = true
        intervalKnipperlicht = setInterval(lichtKnop, 500)
        console.log("Knipperlicht aan")
    } else {
        clearInterval(intervalKnipperlicht)
        knipperlichtAan = false
        console.log("Knipperlicht uit")
    }
}

lampje.addEventListener("click", lichtKnop)
lampje.addEventListener("dblclick", schakelKnipperlicht)
