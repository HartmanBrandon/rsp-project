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
  let playGame = prompt("Would you like to play the game? Y/N");
  HUMANSELECTION = getHumanChoice();
  COMPUTERSELECTION = getComputerChoice();

  while (playGame == "Y" || playGame == "y") {
    if (
      [
        (HUMANSELECTION == "rock" && COMPUTERSELECTION == "scissors") ||
          (HUMANSELECTION == "paper" && COMPUTERSELECTION == "rock") ||
          (HUMANSELECTION == "scissors" && COMPUTERSELECTION == "paper"),
      ]
    ) {
      // Display the human won
      alert("You won this round! The score is being incremented.");
      // Increment humanScore
      humanScore++;

      alert(
        "The score is currently... Player: " +
          humanScore +
          " and Computer: " +
          computerScore
      );

      // Play again
      playRound();
    } else if (
      [
        (COMPUTERSELECTION == "rock" && HUMANSELECTION == "scissors") ||
          (COMPUTERSELECTION == "paper" && HUMANSELECTION == "rock") ||
          (COMPUTERSELECTION == "scissors" && HUMANSELECTION == "paper"),
      ]
    ) {
      // Display the computer won
      alert("The computer won this round! The score is being incremented.");
      // Increment computerScore
      computerScore++;

      alert(
        "The score is currently... Player: " +
          humanScore +
          " and Computer: " +
          computerScore
      );

      // Play again or exit

      playRound();
    } else if (
      [
        (HUMANSELECTION == "rock" && COMPUTERSELECTION == "rock") ||
          (HUMANSELECTION == "paper" && COMPUTERSELECTION == "paper") ||
          (HUMANSELECTION == "scissors" && COMPUTERSELECTION == "scissors"),
      ]
    ) {
      alert("This round was a TIE.");
      alert(
        "The score is currently... Player: " +
          humanScore +
          " and Computer: " +
          computerScore
      );

      // Play again or exit

      playRound();
    } else {
      alert(
        "Final score was Player: " +
          humanScore +
          " and computer: " +
          computerScore
      );
      // return;
    }
  }
}
