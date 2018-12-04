/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

const rollDice = document.querySelector('.btn-roll');
const dice1 = document.querySelector('.dice1');
const dice2 = document.querySelector('.dice2');

const current0Score = document.querySelector('#current-0');
const current1Score = document.querySelector('#current-1');
let currentplyr = 0;
let currentRoundScore = 0;
const player0Total = 0;
const player1Total = 0;

const plyr0scr = document.getElementById('score-0');
const plyr1scr = document.querySelector('#score-1');

const hold = document.querySelector('.btn-hold');

rollDice.addEventListener('click', function(e) {
    const random0 = Math.floor((Math.random() * 6) + 1);
    const random1 = Math.floor((Math.random() * 6) + 1);
    dice1.src = `dice-${random0}.png`;
    dice2.src = `dice-${random1}.png`;
    currentRoundScore = currentRoundScore + random0 + random1;
    
    current0Score.textContent = currentRoundScore;
    
});

hold.addEventListener('click', function(e) {
    if (currentplyr === 0) {
        player0Total = player0Total + currentRoundScore;
        current0Score.textContent = 0;
        plyr0scr.textContent = player0Total;
        currentplyr = 1;
        currentRoundScore = 0;

        if (player0Total >= 100) {
            document.getElementById('.name-0').textContent = WINNER;
        };
    } else {
        player1Total = player1Total + currentRoundScore;
        current1Score.textContent = 0;
        plyr1scr.textContent = player1Total;
        currentplyr = 0;
        currentRoundScore = 0

        if (player0Total >= 100) {
            document.getElementById('.name-0').textContent = WINNER;
        };
    }

}); 





