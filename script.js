playRound();

let arr = ["Rock", "Paper", "Scissors"];
const HUMANSELECTION = getHumanChoice();
const COMPUTERSELECTION = getComputerChoice();

function random(mn, mx) {
  return Math.random() * (mx - mn) + mn;
}

function getComputerChoice() {
  // This has been tested. It pulls the string name instead of index value.
  let computerSelection = arr[Math.floor(random(1, 4)) - 1];
  return computerSelection;
}

// This function has been tested and works

function getHumanChoice() {
  let humanSelection = prompt("Rock paper or scissors? ").toLowerCase();
  return humanSelection;
}

function playRound() {
  let humanScore = 0;
  let computerScore = 0;

  let playGame = prompt("Would you like to play the game? Y/N");

  getHumanChoice();
  alert("The player picked " + humanSelection);

  getComputerChoice();
  alert("The computer picked " + computerSelection);

  
  while (playGame == "Y" || playGame == "y") {
    if (
      (humanSelection == "rock" && computerSelection == "scissors") ||
      (humanSelection == "paper" && computerSelection == "rock") ||
      (humanSelection == "scissors" && computerSelection == "paper")
    ) {
      // Display the human won
      alert("You won this round! The score is being incremented.");

      // Increment humanScore
      humanScore++;

      // Play again

      playRound();
    } else if (
      (computerSelection == "rock" && humanSelection == "scissors") ||
      (computerSelection == "paper" && humanSelection == "rock") ||
      (computerSelection == "scissors" && humanSelection == "paper")
    ) {
      // Display the computer won
      alert("The computer won this round! The score is being incremented.");

      // Increment computerScore
      computerScore++;

      // Play again or exit

      playRound();
    } else if (
      (humanSelection == "rock" && computerSelection == "rock") ||
      (humanSelection == "paper" && computerSelection == "paper") ||
      (humanSelection == "scissors" && computerSelection == "scissors")
    ) {
      console.log("This round was a TIE.");

      // Play again or exit

      playRound();
    } else {
      alert(
        "Final score was Player: " +
          humanSelection +
          " and computer: " +
          computerSelection
      );
      return;
    }
  }
}
