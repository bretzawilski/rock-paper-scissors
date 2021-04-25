console.log("Testing");

function computerPlay(){
  
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1) + min);
  }

  let computerChoice = getRandomIntInclusive(1, 3);

  if (computerChoice === 1) {
    return "Rock";
  } else if (computerChoice ===2) {
    return "Paper";
  } else {
    return "Scissors";
  }

}

console.log(computerPlay());