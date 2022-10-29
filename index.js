// Getting the dice image
const element = document.querySelector(".rollDice");

// Adding an eventlistener-click to my roll-dice-image
element.addEventListener("click", myFunction);

//Function to execute when the rolldice image is clicked
function myFunction() {
    //Getting random number generator for each dice
    var randomNumber1 = Math.floor((Math.random() * 6) + 1);
    var randomNumber2 = Math.floor((Math.random() * 6) + 1);
    //Animation to do when the dice is clicked: FIX BUG HERE LATER(Animate on each click)
    element.classList.add("animate__animated", "animate__rotateIn");
    //Remove it after 5 seconds
    // Also display dice results after 5 seconds
    setTimeout(
        function () {
            element.classList.remove("animate__animated", "animate__rotateIn");
            //Selecting dice image to display based on random number generated
            document.querySelector(".imgOne").setAttribute("src", "assets/images/dice" + randomNumber1 + ".png");
            document.querySelector(".imgTwo").setAttribute("src", "assets/images/dice" + randomNumber2 + ".png");
        },
        500
    );

    //Add sound
    var sound = new Audio("assets/sound/dicesound.mp3");
    sound.play();


    //What to output based on the output of the dice roll
    if (randomNumber1 === randomNumber2) {
        document.querySelector(".headerOne").textContent = "Draw!";
    }
    else if (randomNumber1 < randomNumber2) {
        document.querySelector(".headerOne").textContent = "Player 2 Wins! 🚩";
    }
    else {
        document.querySelector(".headerOne").textContent = "🚩 Player 1 Wins!";
    }
}

//Add Sound








