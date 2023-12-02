//Picking up the buttons with a class of drum
let listOfButtons = document.querySelectorAll(".drum");


//Creating audio objects for each instrument and preloading them
let crash = new Audio();
crash.src = "sounds/crash.mp3";
crash.preload = "auto";

let kick = new Audio();
kick.src = "sounds/kick-bass.mp3";
kick.preload = "auto";

let snare = new Audio();
snare.src = "sounds/snare.mp3";
snare.preload = "auto";

let tom1 = new Audio();
tom1.src = "sounds/tom-1.mp3";
tom1.preload = "auto";

let tom2 = new Audio();
tom2.src = "sounds/tom-2.mp3";
tom2.preload = "auto";

let tom3 = new Audio();
tom3.src = "sounds/tom-3.mp3";
tom3.preload = "auto";

let tom4 = new Audio();
tom4.src = "sounds/tom-4.mp3";
tom4.preload = "auto";


//Creating a dictionary of key-value pairs for each instrument
let instrumentKeyPairs = {
    "w": tom1,
    "a": tom2,
    "s": tom3,
    "d": tom4,
    "j": crash,
    "k": kick,
    "l": snare
};


//Function to add animation when pressing the button
function buttonAnimation(key) {
    let activeButton = (document.querySelector(`.${key}`));
    activeButton.classList.add("pressed");
    setTimeout(() => activeButton.classList.remove("pressed"), 200);
}


//Function to play the instrument and activate animation of the button
function playInstrument(key) {
    if (key in instrumentKeyPairs) {
        instrumentKeyPairs[key].play();
        buttonAnimation(key);
    }
}


//Adding mouseclick event listeners to the buttons
for (let i = 0; i < listOfButtons.length; i++) {
    listOfButtons[i].addEventListener("click", () => playInstrument(listOfButtons[i].innerHTML));
}


//Adding keydown event listener to the document
document.addEventListener("keydown", (event) => playInstrument(event.key)); 