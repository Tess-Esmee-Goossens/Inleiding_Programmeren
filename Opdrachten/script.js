console.log("Hallo Wereld!")

let bericht = "Hello world!"
let kop = document.querySelector("h1")
//kop.textContent = bericht

const button = document.querySelector("button")

function veranderKop() {
    kop.textContent = bericht
}

button.addEventListener("click", veranderKop)