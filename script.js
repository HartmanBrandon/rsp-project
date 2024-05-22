let array = [
    'rock',
    'paper',
    'scissors'
];

let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);



function getComputerChoice(){

    let computerSelection = Math.floor(Math.random() * array.length);
    return computerSelection;
    
}
// console.log(getComputerChoice());

function getHumanChoice() {

    let humanSelection = prompt("Rock paper or scissors? ").toLowerCase();
    return humanSelection;

}

function playRound(humanSelection, computerSelection){

    let playGame = prompt("Would you like to play the game? Y/N");

    while (playGame == 'Y' || playGame == 'y'){
        if (humanSelection == 'rock' && computerSelection)
    }
}



