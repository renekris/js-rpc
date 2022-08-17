let computerScore = 0;
let userScore = 0;
let round = 0;

roundCount = document.getElementById("results").firstElementChild;
scoreCount = document.getElementById("results").lastElementChild;


function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) + 1;

    if (random === 1) {
        return "rock";
    } else if (random === 2) {
        return "paper";
    } else if (random === 3) {
        return "scissors";
    } else {
        throw "Error: unexpected guess from the computer"
    }
}

function getUserChoice() {
    let userChoice = "";

    while(true) {
        userChoice = prompt("Please enter you choice below\nRock | Paper | Scissors").toLowerCase();
        if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
            return userChoice;
        }
    }
}

function game(userSelection, computerSelection) {

    if((userSelection === "paper" && computerSelection === "rock")
    || (userSelection === "rock" && computerSelection === "scissors")
    || (userSelection === "scissors" && computerSelection === "paper")
        ) {
            scoreCount.innerText = `You have won this round!
            \nUSER: ${userSelection}
            \nCPU: ${computerSelection}`;
            userScore++;

    } else if ((userSelection === "rock" && computerSelection === "paper")
    || (userSelection === "scissors" && computerSelection === "rock")
    || (userSelection === "paper" && computerSelection === "scissors")
        ) {
            scoreCount.innerText = `You have lost this round!
            \nUSER: ${userSelection}
            \nCPU: ${computerSelection}`;
            computerScore++;
    } else {
        scoreCount.innerText = `You have tied this round!
        \nUSER: ${userSelection}
        \nCPU: ${computerSelection}`;
    }
}

const button = document.getElementsByClassName("button");
Array.from(button).forEach(btn => btn.addEventListener("click", playRound));

function playRound(e) {
    if (e.target.classList.contains("rock")) {
        console.log("You've selected rock!")
        game("rock", getComputerChoice())
    } else if (e.target.classList.contains("paper")) {
        console.log("You've selected paper!")
        game("paper", getComputerChoice())
    } else if (e.target.classList.contains("scissors")) {
        console.log("You've selected scissors!")
        game("scissors", getComputerChoice())
    }
    countRounds();
    console.log(round);
}

function countRounds() {
    round++;

    if (round >= 5) {
        if (userScore > computerScore) {
            roundCount.innerText = "You have the overall victory!";
        } else if (userScore < computerScore) {
            roundCount.innerText = "Computer has the overall victory!";
        } else {
            roundCount.innerText = "This match has ended in a tie!";
        }
        Array.from(button).forEach(btn => btn.disabled = true);
    } else {
        roundCount.innerText = `This is round ${round}/5`
    }
}
