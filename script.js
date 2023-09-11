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

function updateStyles(resultRound) {
    const playerScore = document.querySelector('.player_score');
    const playerStrong = document.querySelector('.player_strong');
    const cpuScore = document.querySelector('.cpu_score');
    const cpuStrong = document.querySelector('.cpu_strong');

    if(resultRound == null) {
        playerStrong.style.color = 'darkgrey';
        cpuStrong.style.color = 'darkgrey';
    } else if(resultRound) {
        playerStrong.style.color = 'green';
        cpuStrong.style.color = 'red';
    } else {
        playerStrong.style.color = 'red';
        cpuStrong.style.color = 'green';
    }

    if(playerPoints > cpuPoints) {
        playerScore.style.color = 'green';
        cpuScore.style.color = 'red';
    } else if(playerPoints < cpuPoints) {
        playerScore.style.color = 'red';
        cpuScore.style.color = 'green';
    } else {
        playerScore.style.color = 'darkgrey';
        cpuScore.style.color = 'darkgrey';
    }
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
        roundResult.innerHTML = `It's a draw! ` +
            `<strong class="player_strong">${playerChoice}</strong> and ` +
            `<strong class="cpu_strong">${cpuChoice}</strong> are equal!`;
    } else if(result) {
        roundResult.innerHTML = `You win! ` +
            `<strong class="player_strong">${playerChoice}</strong> beats ` +
            `<strong class="cpu_strong">${cpuChoice}</strong>!`;
        playerPoints++;
    } else {
        roundResult.innerHTML = `You lose! ` +
            `<strong class="cpu_strong">${cpuChoice}</strong> beats ` +
            `<strong class="player_strong">${playerChoice}</strong>!`;
        cpuPoints++;
    }

    roundsPlayed++;

    if(roundsPlayed == 5) {
        if(playerPoints > cpuPoints)
            matchResult.innerHTML = 'Congratulations! You won the game!';
        else if(cpuPoints > playerPoints)
            matchResult.innerHTML = 'You lost! Better luck next time!';
        else
            matchResult.innerHTML = 'The game ended in a draw.';

        matchResult.innerHTML += `<br>Final score:<br>` +
            `Player <strong class="player_score">${playerPoints}</strong>:` +
            `<strong class="cpu_score">${cpuPoints}</strong> CPU`;

        updateStyles(result);

        roundsPlayed = 0;
        playerPoints = 0;
        cpuPoints = 0;
    } else {
        matchResult.innerHTML = `Player <strong class="player_score">` +
        `${playerPoints}</strong> X <strong class="cpu_score">${cpuPoints}` +
        `</strong> CPU`;

        updateStyles(result);
    }
}));
