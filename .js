console.log("Hello World")

function getComputerChoice() {
    // Produce random integer between 0 and 2 inclusive
    let randomInt = Math.floor(Math.random() * 3);

    if (randomInt === 0) {
        return 'Rock'

    } else if (randomInt === 1) {
        return 'Paper'

    } else if (randomInt === 2) {
        return 'Scissors'

    }

}

function getHumanChoice() {
    let choice = prompt("Please enter one of the following values: Rock, Paper, Scissors").toLowerCase();

    if (choice === "rock") {
        return 'Rock'

    } else if (choice === "paper") {
        return 'Paper'


    } else if (choice === "scissors") {
        return 'Scissors'


    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock") {
        if (computerChoice === "Rock") {
            console.log("It's a tie!");

        } else if (computerChoice === "Paper") {
            console.log("You lose! Paper beats Rock");


        } else if (computerChoice === "Scissors") {
            console.log("You win! Rock beats Scissors");


        }
    } else if (humanChoice === "Paper") {
        if (computerChoice === "Rock") {
            console.log("You win! Paper beats Rock");


        } else if (computerChoice === "Paper") {
            console.log("It's a tie!");


        } else if (computerChoice === "Scissors") {
            console.log("You lose! Scissors beats Paper");


        }
        
    } else if (humanChoice === "Scissors") {
        if (computerChoice === "Rock") {
            console.log("You lose! Rock beats Scissors");


        } else if (computerChoice === "Paper") {
            console.log("You win! Scissors beats Paper");


        } else if (computerChoice === "Scissors") {
            console.log("It's a tie!");


        }    
    }


}