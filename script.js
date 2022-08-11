let computerScore = 0;
let userScore = 0;
let round = 0;

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

    if(
        (userSelection === "paper" && computerSelection === "rock") 
        || (userSelection === "rock" && computerSelection === "scissors") 
        || (userSelection === "scissors" && computerSelection === "paper")
        ) {
            console.log(`You have won,
            \nUser: ${userSelection}
            \nCPU: ${computerSelection}`);
            userScore++;
    } else if ((userSelection === "rock" && computerSelection === "paper") 
    || (userSelection === "scissors" && computerSelection === "rock") 
    || (userSelection === "paper" && computerSelection === "scissors")) {
        console.log(`You have lost,
        \nUser: ${userSelection}
        \nCPU: ${computerSelection}`);
        computerScore++;
    } else {
        console.log(`Tie,
        \nUser: ${userSelection}
        \nCPU: ${computerSelection}`);
    }
    round++;
}

for (let i = 1; i <= 5; i++) {
    game(getUserChoice(), getComputerChoice());
    console.log(`Round: ${round}
                \nUser Score: ${userScore}
                \nCPU Score: ${computerScore}`);
}