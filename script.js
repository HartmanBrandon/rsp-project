let arr = [
    'Rock',
    'Paper',
    'Scissors'
];

function random(mn, mx){
    return Math.random() * (mx - mn) + mn;
}




function getComputerChoice(){

    //TODO: Get it to pull string types instead of index values
    let computerSelection = arr[Math.floor(randon(1, 4)) - 1];
    return computerSelection;

}
// console.log(getComputerChoice());

function getHumanChoice() {

    let humanSelection = prompt("Rock paper or scissors? ").toLowerCase();
    return humanSelection;

}

function playRound(humanSelection, computerSelection){

    let humanScore = 0;
    let computerScore = 0;

    let playGame = prompt("Would you like to play the game? Y/N");


    while (playGame == 'Y' || playGame == 'y'){

        getHumanChoice();
        getComputerChoice();

        if  (humanSelection == 'rock' && computerSelection == 'scissors'
            || humanSelection == 'paper' && computerSelection == 'rock'
            || humanSelection == 'scissors' && computerSelection == 'paper') { 
            
                // Display the human won
                alert("You won this round!");

                // Increment humanScore
                humanScore++;

                // Play again
                playRound(); 

               
                
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

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);