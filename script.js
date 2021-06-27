let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10);

const compareGuesses = (human, computer, target) => {
    let humanTargetDiff = Math.abs(human - target);
    let computerTargetDiff = Math.abs(computer - target);
    if (humanTargetDiff === computerTargetDiff)
        return true;
    else if (humanTargetDiff < computerTargetDiff)
        return true;
    else
        return false;
}

const updateScore = (winner) => {
    if (winner === 'human')
        humanScore += 1;
    else if (winner === 'computer')
        computerScore += 1;
}

const advanceRound = () => currentRoundNumber += 1;
