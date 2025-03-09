/* script.js
 * JavaScript for rock, paper, scissors game
 * Pessie Mittelman
 * 3/10/25 */

// global variables
let computerChoice = "";
let result = "";

window.onload = function() {
    document.getElementById("rock").addEventListener("click", function() {
        play("rock");
        const rockImage = document.getElementById("rock");
        rockImage.classList.add("rockStyle");
    });
    document.getElementById("paper").addEventListener("click", function() {
        play("paper");
        const paperImage = document.getElementById("paper");
        paperImage.classList.add("paperStyle");
    });
    document.getElementById("scissors").addEventListener("click", function() {
        play("scissors");
        const scissorsImage = document.getElementById("scissors");
        scissorsImage.classList.add("scissorsStyle");
    });
}

document.addEventListener('keydown', function(event) {
    const key = event.key.toLowerCase();
    if (key === "r") {
        play("rock");
        const rockImage = document.getElementById("rock");
        rockImage.classList.add("rockStyle");
    } else if (key === "p") {
        play("paper");
        const paperImage = document.getElementById("paper");
        paperImage.classList.add("paperStyle");
    } else if (key === "s") {
        play("scissors");
        const scissorsImage = document.getElementById("scissors");
        scissorsImage.classList.add("scissorsStyle");
    } else {
        console.log("Invalid key pressed.");
    }
});

// computer choice
function computerChooses() {
    const choices = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random() * 3);
    computerChoice = choices[randomNum];
    document.getElementById("displayComputerChoice").innerHTML = "Computer's Choice: "+computerChoice;
}

// determine winner
function determineWinner(user, computer) {
    if (user === computer) {
        return "It's a tie!";
    } else if (user === "rock") {
        if (computer === "scissors") {
            return "You win! Rock beats scissors.";
        } else {
            return "You lose! Paper beats rock.";
        }
    } else if (user === "paper") {
        if (computer === "rock") {
            return "You win! Paper beats rock.";
        } else {
            return "You lose! Scissors beats paper.";
        }
    } else if (user === "scissors") {
        if (computer === "paper") {
            return "You win! Scissors beats paper.";
        } else {
            return "You lose! Rock beats scissors.";
        }
    } else {
        return "Invalid choice. Please choose rock, paper, or scissors.";
    }
}

 // Function to play a round of rock, paper, scissors
function play(userChoice) {
    computerChooses();
    let result = determineWinner(userChoice, computerChoice);
    document.getElementById("result").innerHTML = result;
}

// Function to reset the game
function reset() {
    userChoice = "";
    computerChoice = "";
    result = "";

    const rockImage = document.getElementById("rock");
    rockImage.classList.remove("rockStyle");
    const paperImage = document.getElementById("paper");
    paperImage.classList.remove("paperStyle");
    const scissorsImage = document.getElementById("scissors");
    scissorsImage.classList.remove("scissorsStyle");

    document.getElementById("result").innerHTML = "";
    document.getElementById("userChoice").innerHTML = "";
    document.getElementById("displayComputerChoice").innerHTML = "";
}