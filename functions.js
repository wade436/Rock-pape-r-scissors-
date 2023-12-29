function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
  
    if (choice === 1) {
      return "rock";
    } else if (choice === 2) {
      return "paper";
    } else {
      return "scissors";
    }
  }
  
  function play(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return "It's a tie!";
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "rock")
    ) {
      return "You won! " + playerSelection + " beats " + computerSelection;
    } else {
      return "Computer won! " + computerSelection + " beats " + playerSelection;
    }
  }
  
  let computerSelection = getComputerChoice();
  let result = play("rock", computerSelection);
  console.log(result);
  