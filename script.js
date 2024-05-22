let array = [
    'rock',
    'paper',
    'scissors'
];

let humanScore;

function getComputerChoice(){
    
    let value = Math.floor(Math.random() * array.length);
    return value;
}
// console.log(getComputerChoice());

function getHumanChoice() {
    let choice = prompt("Rock paper or scissors? ");
}