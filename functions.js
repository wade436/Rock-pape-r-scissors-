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
        let outcome =  "It's a tie!";
      return outcome;
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "rock")
    ) {
     let outcome = "You won! ";
      return outcome
    } else {
      let outcome = "Computer won! ";
      return outcome 
    }
  }


  function game(){  
    
     let  player_points = 0;
     let  computer_points = 0;

    //while loop checks for winner.
    while(player_points < 3 && computer_points < 3){

       //Function calls for getComputerChoice() and play()
    let computerSelection = getComputerChoice();
    let result = play("rock", computerSelection);

    //if statements to check for current winner and overall winner
      //check if player has won 
      if(result ===( "You won! ")){
        player_points++
        console.log("You have: " + player_points + " points")
        //check is player is overall winner 
        if(player_points >= 3){
            console.log("You WIN!")
        }
      }
      //check if computer is current winner 
      else if (result === ("Computer won! ")){
       computer_points++
        console.log("Computer has: " + computer_points + " points")
        //check if computer is overall winner 
        if(computer_points >= 3){
            console.log("COMPUTER WINS!")
        }
      }
      //else statement for tie
      else{
        console.log("Zero points for y'all")
      }
    }
  }

 
  game()