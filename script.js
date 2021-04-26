function game() {

  let computerScore = 0;
  let playerScore = 0;

  while (playerScore < 3 && computerScore < 3) {
    
    let playerSelection = playerChoice(prompt('Rock, Paper, or Scissors?'));
    let computerSelection = (computerPlay());

    console.log(`The Player chose ${playerSelection}, and the Computer chose ${computerSelection}`)

    // If statement assesses input of player and computer; adds to score when result is not a tie
    // ! This seems overworked. Is there a way to simplify?
    if (playerSelection === "rock" && computerSelection === "rock"){
      console.log("tie");
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
      console.log("player wins");
      playerScore++
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
      console.log("computer wins");
      computerScore++
    }
    else if (playerSelection === "scissors" && computerSelection === "scissors") {
      console.log("tie");
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
      console.log("player wins");
      playerScore++
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
      console.log("computer wins");
      computerScore++
    }
    else if (playerSelection === "paper" && computerSelection === "paper") {
      console.log("tie");
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
      console.log("player wins");
      playerScore++
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
      console.log("computer wins");
      computerScore++
    }
    
    displayScore(playerScore, computerScore);

  }

  winCondition(playerScore, computerScore);
}

// FUNCTIONS BELOW THIS POINT

const winCondition = function(player, computer) {
  
  if (player === 3) {
    alert("The player wins the game!");
  }
  else if (computer === 3) {
    alert("The computer wins the game!");
  }
}

const playerChoice = function(playerParam) {
  
  if (playerParam === undefined || playerParam === "" || playerParam === null){
    alert("Invalid choice. Please try again.")
    playerChoice(prompt('Rock, Paper, or Scissors?'));
  } 

  let selection = playerParam.toLowerCase()
  if (selection != "rock" && selection != "paper" && selection != "scissors") {
    alert("Invalid choice. Please try again.")
    playerChoice(prompt('Rock, Paper, or Scissors?'));
  } else {
    return selection;
  }
}

const computerPlay = function() {
      
  const computerChoice = getRandomIntInclusive(1, 3);

  if (computerChoice === 1) {
    return "rock";
  } else if (computerChoice === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

const getRandomIntInclusive = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1) + min);
}


const displayScore = function(player, computer) {    
    console.log(`The player's score is ${player}`);
    console.log(`The computer's score is ${computer}`);
}

// Defines start-button on index.html as a button to begin the game function.
let startGame = document.getElementById('start-button');
startGame.addEventListener('click', game);
