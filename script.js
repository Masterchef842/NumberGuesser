let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
    return Math.floor(Math.random()*10);
}
function compareGuesses(humanGuess, computerGuess, target){
    if(Math.abs(humanGuess-target) === Math.abs(computerGuess-target)){
        return true;
    }
    if(Math.abs(humanGuess-target) < Math.abs(computerGuess-target)){
        return true;
    }
    return false
}
function updateScore(winner){

    if(winner === 'human')
    {
        humanScore++;
    }
    if(winner === 'computer')
    {
        computerScore++;
    }

}
function advanceRound(){
    currentRoundNumber++;
}

console.log(generateTarget());
console.log(generateTarget());
console.log(compareGuesses(9,2,3));
console.log(compareGuesses(2,7,3));
console.log(compareGuesses(1,3,2))