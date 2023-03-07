let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

let generateTarget = (min, max) => {
  return Math.floor(Math.random() * 10);
}


const compareGuesses = (humanGuess, computerGuess, secretTargetNumber) =>
{
  let humanDiff = Math.abs(secretTargetNumber - humanGuess)
  let computerDiff = Math.abs(secretTargetNumber - computerGuess)
  return humanDiff <= computerDiff;
}

const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
}

const advanceRound = () => currentRoundNumber++;