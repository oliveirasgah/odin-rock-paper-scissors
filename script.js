function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1

    if(choice == 1)
        return 'Rock';

    if(choice == 2)
        return 'Paper';

    return 'Scissors';
}

function playRound(plyChoice, cpuChoice) {
    let playerWon = null;
    plyChoice = plyChoice.toUpperCase();
    cpuChoice = cpuChoice.toUpperCase();

    if(plyChoice == 'ROCK') {
        if(cpuChoice == 'SCISSORS')
            playerWon = true;
        else if(cpuChoice == 'PAPER')
            playerWon = false;
    } else if(plyChoice == 'PAPER') {
        if(cpuChoice == 'SCISSORS')
            playerWon = false;
        else if(cpuChoice == 'ROCK')
            playerWon = true;
    } else {
        if(cpuChoice == 'PAPER')
            playerWon = true;
        else if(cpuChoice == 'ROCK')
            playerWon = false;
    }

    return playerWon;
}

function game() {
    let playerPoints = 0;
    let cpuPoints = 0;

    for(let i = 1; i <= 1; i++) {
        let playerChoice = prompt('Rock, paper, or scissors?').toUpperCase();
        let cpuChoice = getComputerChoice().toUpperCase();

        let result = playRound(playerChoice, cpuChoice);

        console.log(`Round ${i}:`);

        if(result == null) {
            console.log(`It's a draw! ${playerChoice} and ${cpuChoice} are equal!`)
        } else if(result) {
            console.log(`You win! ${playerChoice} beats ${cpuChoice}!`)
            playerPoints++;
        } else {
            console.log(`You lose! ${cpuChoice} beats ${playerChoice}!`)
            cpuPoints++;
        }

        console.log('\n');
    }

    if(playerPoints > cpuPoints)
        console.log('Congratulations! You won the game!');
    else if(cpuPoints > playerPoints)
        console.log('You lost! Better luck next time!');
    else
        console.log('The game ended in a draw.');

    console.log(`Final score: ${playerPoints}:${cpuPoints}`);
}

const buttons = document.querySelectorAll('.btn_choice');
let playerPoints = 0;
let cpuPoints = 0;
let roundsPlayed = 0;

buttons.forEach(button => button.addEventListener('click', e => {
    const roundResult = document.querySelector('.round_result');
    const matchResult = document.querySelector('.match_result');

    const playerChoice = e.target.textContent;
    const cpuChoice = getComputerChoice().toUpperCase();

    const result = playRound(playerChoice, cpuChoice);

    if(result == null) {
        roundResult.textContent = `It's a draw! ` +
            `${playerChoice} and ${cpuChoice} are equal!`;
    } else if(result) {
        roundResult.textContent = `You win! ` +
            `${playerChoice} beats ${cpuChoice}!`;
        playerPoints++;
    } else {
        roundResult.textContent = `You lose! ` +
            `${cpuChoice} beats ${playerChoice}!`
        cpuPoints++;
    }

    roundsPlayed++;

    if(roundsPlayed == 5) {
        if(playerPoints > cpuPoints)
            matchResult.textContent = 'Congratulations! You won the game!';
        else if(cpuPoints > playerPoints)
            matchResult.textContent = 'You lost! Better luck next time!';
        else
            matchResult.textContent = 'The game ended in a draw.';

        matchResult.innerHTML += `<br>Final score: ${playerPoints}:${cpuPoints}`;

        roundsPlayed = 0;
        playerPoints = 0;
        cpuPoints = 0;
    } else {
        matchResult.textContent = `Player ${playerPoints} X ${cpuPoints} CPU`;
    }
}));
