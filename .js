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


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "Rock") {
            if (computerChoice === "Rock") {
                console.log("It's a tie!");


            } else if (computerChoice === "Paper") {
                console.log("You lose! Paper beats Rock");
                computerScore++;


            } else if (computerChoice === "Scissors") {
                console.log("You win! Rock beats Scissors");
                humanScore++;


            }
        } else if (humanChoice === "Paper") {
            if (computerChoice === "Rock") {
                console.log("You win! Paper beats Rock");
                humanScore++;



            } else if (computerChoice === "Paper") {
                console.log("It's a tie!");
                


            } else if (computerChoice === "Scissors") {
                console.log("You lose! Scissors beats Paper");
                computerScore++;
                

            }
            
        } else if (humanChoice === "Scissors") {
            if (computerChoice === "Rock") {
                console.log("You lose! Rock beats Scissors");
                computerScore++;
                

            } else if (computerChoice === "Paper") {
                console.log("You win! Scissors beats Paper");
                humanScore++;



            } else if (computerChoice === "Scissors") {
                console.log("It's a tie!");


            }    
        }


    }

    for (let i = 0; i < 5; i++) {
        console.log("Round: " + (i+1));
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection);
        console.log("Computer Score: " + computerScore);
        console.log("Your Score: " + humanScore);
        console.log()
    }

    



}


playGame()