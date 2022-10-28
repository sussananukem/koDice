// Getting the dice image
const element = document.querySelector(".rollDice");

// Adding an eventlistener-click to my roll-dice-image
element.addEventListener("click", myFunction);

//Function to execute when the rolldice image is clicked
function myFunction() {
    //Animation to do when the dice is clicked: FIX BUG HERE LATER(Animate on each click)
    element.classList.add("animate__animated", "animate__rotateIn");
    //Remove it after 5 seconds
    setTimeout(
        function () {
            element.classList.remove("animate__animated", "animate__rotateIn");
        },
        500
    );


    //Getting random number generator for each dice
    var randomNumber1 = Math.floor((Math.random() * 6) + 1);
    var randomNumber2 = Math.floor((Math.random() * 6) + 1);

    //Selecting dice image to display based on random number generated
    document.querySelector(".imgOne").setAttribute("src", "assets/images/dice" + randomNumber1 + ".png");
    document.querySelector(".imgTwo").setAttribute("src", "assets/images/dice" + randomNumber2 + ".png");

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








