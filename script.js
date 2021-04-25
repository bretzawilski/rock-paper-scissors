function game() {

  let computerScore = 0;
  let playerScore = 0;
  let score = 0;

  while (playerScore < 3 && computerScore < 3) {
    function computerPlay() {
      
      function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min +1) + min);
      }

      let computerChoice = getRandomIntInclusive(1, 3);

      if (computerChoice === 1) {
        return "rock";
      } else if (computerChoice === 2) {
        return "paper";
      } else {
        return "scissors";
      }

    }

    function playerChoice(playerParam) {
      let selection = playerParam.toLowerCase()
      if (selection != "rock" && selection != "paper" && selection != "scissors" && selection != undefined && selection != null) {
        console.log("Invalid choice, please try again.")
      } else {
        return selection;
      }
    }

    let playerSelection = playerChoice(prompt('Rock, Paper, or Scissors?'));
    let computerSelection = (computerPlay());

    console.log(`The Player chose ${playerSelection}, and the Computer chose ${computerSelection}`)


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
    console.log(`The player's score is ${playerScore}`);
    console.log(`The computer's score is ${computerScore}`);

    if (playerScore === 3) {
      console.log("The player wins the game!");
    }
    else if (computerScore === 3) {
      console.log("The computer wins the game!");
    }
  }
}

let startGame = document.getElementById('start-button');
startGame.addEventListener('click', game);
