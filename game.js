function getComputerChoice() {
    const pick = ["rock", "paper", "scissors"];
    return pick[Math.floor(Math.random() * pick.length)];
}

let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `You both picked ${playerSelection}! It's a tie! Score: ${playerScore} to ${computerScore}`
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}. Score: ${playerScore} to ${computerScore}`;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return `You win!  ${playerSelection} beats ${computerSelection}. Score: ${playerScore} to ${computerScore}`;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}. Score: ${playerScore} to ${computerScore}`;
    } else {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}. Score: ${playerScore} to ${computerScore}`;
    }
}

function game() {
    while (computerScore < 5 && playerScore < 5) {
        const playerSelection = prompt("rock, paper, or scissors?").toLowerCase();
        const computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection));
    } if (computerScore == 5) {
        return `Computer wins! Score: ${playerScore} to ${computerScore}`;
    } else if (playerScore == 5) {
        return `You win! Score: ${playerScore} to ${computerScore}`;
    }
}
//const playerSelection = prompt("To start the game, pick among the choices: 'Rock, Paper, Scissors'").toLowerCase();
//console.log(playerSelection);
//const computerSelection = getComputerChoice();
//console.log(computerSelection);
//console.log(playRound(playerSelection, computerSelection));
//console.log(computerScore);
//console.log(playerScore);

console.log(game());