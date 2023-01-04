let numOfDrumButtons = document.querySelectorAll("button.drum").length;

// Detecting Button Press 

for (let i = 0; i < numOfDrumButtons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        let drumLetter = this.innerHTML;
        playSound(drumLetter);

        buttonAnimation(drumLetter);
    });
}


// Detecting Keyboard Press

document.addEventListener("keypress", function (event) {
    let keyPressChar = event.key;
    playSound(keyPressChar);

    buttonAnimation(keyPressChar);
});

function playSound(char) {
    switch (char) {
        case 'w':
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case 's':
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case 'd':
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case 'j':
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case 'k':
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case 'l':
            let bass = new Audio("sounds/kick-bass.mp3");
            bass.play();
            break;

        default:
            console.log(char);
            break;
    }
}

function buttonAnimation(element) {
    let buttonPressed = document.querySelector("."+element);
    buttonPressed.classList.add("pressed");

    setTimeout(function(){
        buttonPressed.classList.remove("pressed");
    }, 100);
}