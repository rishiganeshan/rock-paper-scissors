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

function getHumanChoice(choice) {
    choice = choice.toLowerCase();

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
let div = document.querySelector("div")


function playRound(humanChoice) {
    humanChoice = getHumanChoice(humanChoice);
    let computerChoice = getComputerChoice();
    // console.log(humanChoice)
    
    let roundSummary = document.createElement("div")
    

    if (humanChoice === "Rock") {
        if (computerChoice === "Rock") {
            roundSummary.textContent = "It's a tie!"


        } else if (computerChoice === "Paper") {
            roundSummary.textContent = "You lose! Paper beats Rock"

            computerScore++;


        } else if (computerChoice === "Scissors") {
            roundSummary.textContent = "You win! Rock beats Scissors"

            humanScore++;


        }
    } else if (humanChoice === "Paper") {
        if (computerChoice === "Rock") {
            roundSummary.textContent = "You win! Paper beats Rock"

            humanScore++;



        } else if (computerChoice === "Paper") {
            roundSummary.textContent = "It's a tie!"




        } else if (computerChoice === "Scissors") {
            roundSummary.textContent = "You lose! Scissors beats Paper"

            computerScore++;


        }

    } else if (humanChoice === "Scissors") {
        if (computerChoice === "Rock") {
            roundSummary.textContent = "You lose! Rock beats Scissors"

            computerScore++;


        } else if (computerChoice === "Paper") {
            roundSummary.textContent = "You win! Scissors beats Paper"

            humanScore++;



        } else if (computerChoice === "Scissors") {
            roundSummary.textContent = "It's a tie!"



        }
    }

    if (humanScore === 5 || computerScore === 5) {
        finishGame()


    } else {
        // roundSummary.textContent = "It's a tie!"
        let computerScoreText = document.createElement("div")
        let humanScoreText = document.createElement("div")
        computerScoreText.textContent = "Computer Score: " + computerScore
        humanScoreText.textContent = "Your Score: " + humanScore




        div.appendChild(roundSummary)
        div.appendChild(computerScoreText)
        div.appendChild(humanScoreText)
        let newline = document.createElement("div")
        newline.textContent = "------------------------------------"
        div.appendChild(newline)

    }


    
    



}

function finishGame() {
    let text = document.createElement("div")
    if (humanScore === 5) {
        text.textContent = "Congratulations. You reached 5 points first!"
    } else {
        text.textContent = "The computer reached 5 points first! Better luck next time.s"
    }
    div.appendChild(text)

    buttons.forEach((button) => {
        button.remove()
        
    })
}


let buttons = document.querySelectorAll("button");


buttons.forEach((button) => {
    button.addEventListener("click", (button) => {
        playRound(button.currentTarget.textContent);
    })
});



