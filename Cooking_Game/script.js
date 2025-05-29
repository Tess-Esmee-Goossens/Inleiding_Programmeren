
//-------------Customers-------------//

const customerImages = [
    "Images/Man.png",                   // Bron personage: https://www.freepik.com/free-vector/flat-teenager-collection_842822.htm#fromView=keyword&page=1&position=21&uuid=ee4d5e12-e603-4275-ad69-3c59a01df59d&query=Young+Children+Characters 
    "Images/Woman_Pink_Hair.png",       // Bron personage: https://www.freepik.com/free-vector/flat-teenager-collection_842822.htm#fromView=keyword&page=1&position=21&uuid=ee4d5e12-e603-4275-ad69-3c59a01df59d&query=Young+Children+Characters 
    "Images/Woman_Black_Hair.png",      // Bron personage: https://www.freepik.com/free-vector/flat-teenager-collection_842822.htm#fromView=keyword&page=1&position=21&uuid=ee4d5e12-e603-4275-ad69-3c59a01df59d&query=Young+Children+Characters 
    "Images/Woman_Blond_Hair.png"       // Bron personage: https://www.freepik.com/free-vector/flat-teenager-collection_842822.htm#fromView=keyword&page=1&position=21&uuid=ee4d5e12-e603-4275-ad69-3c59a01df59d&query=Young+Children+Characters 
];


//-------------Order-Items-------------//

const orderItems = [
    "Images/Slice_Of_Bread.png",        // Bron bread 2: https://www.vecteezy.com/png/47084338-white-bread-slice-on-transparent-background
    "Images/Bread.png",                 // Bron bread 1: https://www.pngkey.com/maxpic/u2w7q8o0w7w7e6y3/
    "Images/White_Glossy_Bread.png"     // Bron bread 3: https://pngimg.com/image/2250
];


//-------------Generate-Random-Customer-------------//

function generateRandomCustomer() {
    const randomImage = customerImages[Math.floor(Math.random() * customerImages.length)];

    const orderLength = Math.floor(Math.random() * 3) + 1; // 1–3 items
    const randomOrder = [];

    for (let i = 0; i < orderLength; i++) {
        const randomItem = orderItems[Math.floor(Math.random() * orderItems.length)];
        randomOrder.push(randomItem);
    }

    return {
        image: randomImage,
        order: randomOrder
    };
}


//-------------Render-Customer-------------//

function renderCustomer(container, customer) {
    const img = container.querySelector("img");
    const orderContainer = container.querySelector(".Order");

    // Set or hide customer image
    if (customer.image) {
        img.src = customer.image;
        img.style.visibility = "visible";
    } else {
        img.src = "";
        img.style.visibility = "hidden";
    }

    // Add order after delay
    const orderDelay = Math.random() * 3000 + 3000; // 3–6 seconds

    setTimeout(() => {
        orderContainer.innerHTML = ""; // clear old order images

        customer.order.forEach(item => {
            const itemImg = document.createElement("img");
            itemImg.src = item;
            orderContainer.appendChild(itemImg);
        });

        orderContainer.style.display = "block"; // show order after adding
    }, orderDelay);
}


//-------------Randomize Customers With Delay-------------//

function randomizeCustomers() {
    const customerContainers = document.querySelectorAll(".Customers > div");

    customerContainers.forEach(container => {
        const customerDelay = Math.random() * 7000 + 3000; // 3–10 seconds

        setTimeout(() => {
            const customer = generateRandomCustomer();
            renderCustomer(container, customer);
        }, customerDelay);
    });
}


//-------------Audio-------------//




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
        randomizeCustomers();
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
let secondsPassed = 30; // Set the starting number
let timer = null;

function countSeconds() {
    //----ChatGPT----//
    // Promt: show in time minutes and seconds let timerText = document.querySelector("h1"); let secondsPassed = 120; // Set the starting number function countSeconds() {timerText.textContent = secondsPassed;  secondsPassed -= 1; if (secondsPassed < 0) { clearInterval(timer); // Stop when it reaches below 0 } } let timer = setInterval(countSeconds, 1000);
    
    let minutes = Math.floor(secondsPassed / 60); //how manny times can 60 fit inside snd round down
    let seconds = secondsPassed % 60; //take the left over seconds

    let formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`; //String(minutes) converts the number to a string. padStart(2, '0') ensures the string is at least 2 characters long:
    timerText.textContent = formattedTime;
    //----------------//
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

    secondsPassed = 30; // Reset time
    countSeconds(); // Show the first second immediately
    timer = setInterval(countSeconds, 1000);
}