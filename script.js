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

    //TODO: Get it to pull string types instead of index values
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

        getHumanChoice();
        getComputerChoice();

        if  (humanSelection == 'rock' && computerSelection == 'scissors'
            || humanSelection == 'paper' && computerSelection == 'rock'
            || humanSelection == 'scissors' && computerSelection == 'paper') { 
            
                // Display the human won
                // Increment humanScore
                // Play again or exit

                if (playGame != 'Y' || playGame != 'y'){
                    //exit game
                }
        }
        else if (computerSelection == 'rock' && humanSelection == 'scissors'
            || computerSelection == 'paper' && humanSelection == 'rock'
            || computerSelection == 'scissors' && humanSelection == 'paper') {
                
                // Display the computer wom
                // Increment computerScore
                // Play again or exit
            }
        else {
            alert("Final score was Player: " +  humanSelection + " and computer: " + computerSelection);
            return;
        }

        
    
    }
}
