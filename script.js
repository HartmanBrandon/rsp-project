let arr = ["Rock", "Paper", "Scissors"];

let humanScore = 0;

let computerScore = 0;

let HUMANSELECTION = "";

let COMPUTERSELECTION = "";

playRound();

function random(mn, mx) {
  return Math.random() * (mx - mn) + mn;
}

function getComputerChoice() {
  let computerSelection = arr[Math.floor(random(1, 4)) - 1];

  return computerSelection;
}

function getHumanChoice() {
  let humanSelection = prompt("Rock paper or scissors? ").toLowerCase();

  return humanSelection;
}

function playRound() {
  let playGame = prompt("Would you like to play the game? Y/N").toLowerCase();

  while (playGame === "y") {
    HUMANSELECTION = getHumanChoice();

    COMPUTERSELECTION = getComputerChoice();

    if (HUMANSELECTION === COMPUTERSELECTION) {
      alert("It's a TIE.");

      playGame = prompt("Would you like to play again? Y/N").toLowerCase();
    }

    if (HUMANSELECTION === "rock") {
      if (COMPUTERSELECTION === "scissors") {
        alert("Human wins");

        humanScore++;

        alert("Human score is now: " + humanScore);

        playGame = prompt("Would you like to play again? Y/N").toLowerCase();
      } else {
        alert("Computer wins");

        computerScore++;

        alert("Computer score is now: " + computerScore);

        playGame = prompt("Would you like to play again? Y/N").toLowerCase();
      }
    }

    if (HUMANSELECTION === "paper") {
      if (COMPUTERSELECTION === "scissors") {
        alert("Computer wins");

        computerScore++;

        alert("Computer score is now: " + computerScore);

        playGame = prompt("Would you like to play again? Y/N").toLowerCase();
      } else {
        alert("Human wins");

        humanScore++;

        alert("Human score is now: " + humanScore);

        playGame = prompt("Would you like to play again? Y/N").toLowerCase();
      }
    }

    if (HUMANSELECTION === "scissors") {
      if (COMPUTERSELECTION === "rock") {
        alert("Computer wins");

        computerScore++;

        alert("Computer score is now: " + computerScore);

        playGame = prompt("Would you like to play again? Y/N").toLowerCase();
      } else {
        alert("Human wins");

        humanScore++;

        alert("Human score is now: " + humanScore);

        playGame = prompt("Would you like to play again? Y/N").toLowerCase();
      }
    }
  }
}
