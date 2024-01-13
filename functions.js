const score = document.querySelector('#score');


//Button functionality
let option;

const rock = document.querySelector('#Rock');
rock.addEventListener('click', ()=>{
  option = 'rock'
  game();
  return option;
})

const paper = document.querySelector('#Paper');
paper.addEventListener('click', ()=>{
   option = 'paper'
   game();
  return option;
})

const scissors = document.querySelector('#Scissors');
scissors.addEventListener('click', ()=>{
  option = 'scissors'
  game();
  return option;
})


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
  
// Winner funtionality
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

       //Function calls for getComputerChoice() and playerChoice()
    let computerSelection = getComputerChoice();
    let result = play(option, computerSelection);

    //if statements to check for current winner and overall winner
      //check if player has won 
      if(result ===( "You won! ")){
        player_points++
        score.textContent = "You have: " + player_points + " points";
        //check is player is overall winner 
        if(player_points >= 3){
           score.textContent = "You WIN!";
        }
      }
      //check if computer is current winner 
      else if (result === ("Computer won! ")){
       computer_points++
        score.textContent = "Computer has: " + computer_points + " points";
        //check if computer is overall winner 
        if(computer_points >= 3){
            score.textContent = "COMPUTER WINS!";
        }
      }
      //else statement for tie
      else{
        score.textContent = "Zero points for y'all";
      }
    }
  }


  
 
