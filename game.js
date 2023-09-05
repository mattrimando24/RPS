let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
    const pick = ["rock", "paper", "scissors"];
    return pick[Math.floor(Math.random() * pick.length)];
}

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

const playerScorePara = document.getElementById("player-score");
const computerScorePara = document.getElementById("computer-score");

function clickListener(event) {
    if (event.target.tagName !== "BUTTON") {
        return;
    }
    const playerSelection = event.target.id;
    console.log(playerSelection);
    const computerSelection = getComputerChoice();
    console.log(computerSelection);
    playRound(playerSelection, computerSelection);
}

document.getElementById("button-container").addEventListener("click", clickListener);

function playerWin() {
    ++playerScore;
    console.log(playerScore);
}

function computerWin() {
    ++computerScore;
    console.log(computerScore);
}

function tieResult() {
    console.log(playerScore + computerScore);
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        tieResult();
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerWin();
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerWin();
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerWin();
    } else {
        computerWin();
    }
}

// function game() {
//    while (computerScore < 5 && playerScore < 5) {
//        const playerSelection = prompt("rock, paper, or scissors?").toLowerCase();
//        const computerSelection = getComputerChoice();

//        console.log(playRound(playerSelection, computerSelection));
//    } if (computerScore == 5) {
//        return `Computer wins! Score: ${playerScore} to ${computerScore}`;
//    } else if (playerScore == 5) {
//        return `You win! Score: ${playerScore} to ${computerScore}`;
//    }
//}
//const playerSelection = prompt("To start the game, pick among the choices: 'Rock, Paper, Scissors'").toLowerCase();
//console.log(playerSelection);
//const computerSelection = getComputerChoice();
//console.log(computerSelection);
//console.log(playRound(playerSelection, computerSelection));
//console.log(computerScore);
//console.log(playerScore);


// console.log(game());