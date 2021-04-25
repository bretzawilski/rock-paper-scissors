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

if (playerSelection === "rock" && computerSelection === "rock"){
  console.log("tie");
}
else if (playerSelection === "rock" && computerSelection === "scissors") {
  console.log("player wins");
}
else if (playerSelection === "rock" && computerSelection === "paper") {
  
}
else if (playerSelection === "scissors" && computerSelection === "scissors") {
  console.log("tie");
}
else if (playerSelection === "scissors" && computerSelection === "paper") {
  console.log("player wins");
}
else if (playerSelection === "scissors" && computerSelection === "rock") {
  
}
else if (playerSelection === "paper" && computerSelection === "paper") {
  console.log("tie");
}
else if (playerSelection === "paper" && computerSelection === "rock") {
  console.log("player wins");
}
else if (playerSelection === "paper" && computerSelection === "scissors") {
  console.log("computer wins");
}




// switch (playerSelection, computerSelection) {
//   case playerSelection === "rock" && computerSelection === "rock":
//     console.log("tie");
//     break;
//   case playerSelection === "rock" && computerSelection === "scissors":
//     console.log("player wins");
//     break;
//   case playerSelection === "rock" && computerSelection === "paper":
//     console.log("computer wins");
//     break;
//   case playerSelection === "scissors" && computerSelection === "scissors":
//     console.log("tie");
//     break;
//   case playerSelection === "scissors" && computerSelection === "paper":
//     console.log("player wins");
//     break;
//   case playerSelection === "scissors" && computerSelection === "rock":
//     console.log("computer wins");
//     break;
//   case playerSelection === "paper" && computerSelection === "paper":
//     console.log("tie");
//     break;
//   case playerSelection === "paper" && computerSelection === "rock":
//     console.log("player wins");
//     break;
//   case playerSelection === "paper" && computerSelection === "scissors":
//     console.log("computer wins");
//     break;
// }
console.log(playerSelection);
console.log(computerSelection);