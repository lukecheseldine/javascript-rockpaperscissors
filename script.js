function computerPlay () {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(computerSelection, playerSelection) {
    let result = 'loss';
    playerSelection = playerSelection.toLowerCase();

    if (computerSelection == 'rock' && playerSelection == 'paper') result = 'win';
    else if (computerSelection == 'paper' && playerSelection == 'scissors') result = 'win';
    else if (computerSelection == 'scissors' && playerSelection == 'rock') result = 'win';
    else if (computerSelection == playerSelection) result = 'tie';

    if (result == 'loss') return `You lose! ${computerSelection} beats ${playerSelection}!`;
    else if (result == 'tie') return `You tied! You both threw ${computerSelection}!`
    else return `You win! ${playerSelection} beats ${computerSelection}!`;
}

function game() {
    let playerWins = 0, computerWins = 0;
    for (let i = 0; i < 5; i++) {
        let message = playRound(computerPlay(), prompt('What do you want to play?'))
        console.log(message);
        if (message.includes('win')) playerWins++;
        else if (message.includes('lose')) computerWins++;
        console.log(`The score is ${playerWins} - ${computerWins}.`)
    }
    if (playerWins > computerWins) console.log('You win!');
    else if (playerWins < computerWins) console.log('You lose!');
    else console.log('You tied!');
}