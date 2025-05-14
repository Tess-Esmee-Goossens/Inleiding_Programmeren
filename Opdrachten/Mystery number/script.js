const plusKnop = document.querySelector("#plus");
const minKnop = document.querySelector("#min");
const controleerKnop = document.querySelector("#controleer")
const h1 = document.querySelector("h1");
const p = document.querySelector("p");

let getal = 0;
let mysteryNumber = Math.random() * 6;

mysteryNumber = Math.round(mysteryNumber);

plusKnop.addEventListener('click', verhoogGetal);
minKnop.addEventListener('click', verlaagGetal);
controleerKnop.addEventListener('click', controleerGetal);

function verhoogGetal(){
    getal = getal + 1;
    updateGetal();
};

function verlaagGetal(){
    getal = getal - 1;
    updateGetal();
};

function updateGetal(){
    console.log("getal: " + getal);
    h1.textContent = getal;
};

function controleerGetal(){
    if(getal === mysteryNumber){
        p.textContent = "je hebt het juiste nummer gevonden gefeliciteerd!!!";
    } else if(getal > mysteryNumber){
        p.textContent = "Helaas, te hoog.";
    } else{
        p.textContent = "Helaas, te laag.";
    };
};

