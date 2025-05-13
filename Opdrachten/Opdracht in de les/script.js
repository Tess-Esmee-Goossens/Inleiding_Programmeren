console.log("Hallo Wereld!");

let getalEen = 5;
let getalTwee = "vijf";

console.log(getalEen+getalEen);
console.log(getalEen+getalTwee);
console.log(getalTwee+getalTwee);
console.log(getalEen*3);
console.log(getalTwee*4);

console.log("Hallo Wereld!");
console.log(1>3);
console.log(1==1);
console.log(1=="1");
console.log(1==="1");
console.log(1==3);
console.log(1!=3);
console.log(3*5==15);
console.log(4>2);
console.log(3<=15);
console.log("drie"=="drie");
console.log("drie"=='vier');

console.log("Hallo Wereld!");
const toegang = 18;
const toOld = 65;
const Jeugd = 9;
let leeftijd = 16;

if (leeftijd >= toegang && leeftijd <= toOld) {
    console.log("Welcome");
} else if (leeftijd >= Jeugd && leeftijd <= toegang) {
    console.log("Graag naar zaal B")
} else {
    console.log("Geen toegang");
};


function ChangeText(Text) {
    let eersteH1 = document.querySelector("h1")
    eersteH1.textContent = Text;
}
ChangeText("Lets try");

let eersteButton = document.querySelector("button")
eersteButton.textContent = "Dit wordt de tekst in de eerste Button";
