const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const roundOutcome = document.getElementById('round-outcome');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const endGameDiv = document.getElementById('end-game');
const endGameText = document.getElementById('end-game-text');
const restartButton = document.getElementById('restart');

rock.addEventListener('click', playRound);
paper.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);
restartButton.addEventListener('click', restart);

function computerPlay () {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(e) {
    let result = 'loss';
    const playerSelection = e.target.id;
    const computerSelection = computerPlay();

    if (computerSelection == 'rock' && playerSelection == 'paper') result = 'win';
    else if (computerSelection == 'paper' && playerSelection == 'scissors') result = 'win';
    else if (computerSelection == 'scissors' && playerSelection == 'rock') result = 'win';
    else if (computerSelection == playerSelection) result = 'tie';

    if (result == 'loss') {
        roundOutcome.innerText = `You lose! ${capitalizeFirstLetter(computerSelection)} beats ${playerSelection}!`;
        updateScore(computerScore);
    }
    else if (result == 'tie') {
        roundOutcome.innerText = `Tie! You both threw ${computerSelection}!`;
    }
    else {
        roundOutcome.innerText = `You win! ${capitalizeFirstLetter(playerSelection)} beats ${computerSelection}!`;
        updateScore(playerScore);
    }
}

function updateScore(winner) {
    score = winner.innerText;
    score++;
    winner.innerText = score;
    if (score >= 5) endGame();
}

function endGame() {
    if (playerScore.innerText > computerScore.innerText) endGameText.innerText = 'You win! Yay :)';
    else endGameText.innerText = 'You lose! Boo hoo :(';
    endGameDiv.style['display'] = 'block';
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}

function restart() {
    playerScore.innerText = 0;
    computerScore.innerText = 0;
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
    roundOutcome.innerText = '';
    endGameDiv.style['display'] = 'none';
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }