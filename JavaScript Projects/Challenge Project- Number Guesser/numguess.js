let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = (min, max) => {
  return Math.floor(Math.random()*(10 - 1)) + 1;
}
generateTarget = secretTargetNumber;

function compareGuesses(humanGuess, computerGuess, secretTargetNumber) {
  let humanDiff = Math.abs(humanGuess - secretTargetNumber);
  let computerDiff = Math.abs(computerGuess - secretTargetNumber);
  let finalDigg;
    if (humanDiff <= computerDiff) {
      return true;
      } else (computerDigg < humanDiff) {
      return false;
  }
}