function getHand() {
    const hands = ['rock', 'paper', 'scissors'];
    const index = parseInt(Math.random() * 10) % 3;
    return hands[index];
}

function playRound(p1, p2) {
    const x = p1.getHand();
    const y = p2.getHand();

    if ((x === 'scissors' && y === 'paper') || (x === 'rock' && y === 'scissors') || (x === 'paper' && y === 'rock')) {
        console.log(`Player 1 (${p1.name}) won: ${x} vs ${y}`);
        return 'p1';
    } else if ((x === 'paper' && y === 'scissors') || (x === 'scissors' && y === 'rock') || (x === 'rock' && y === 'paper')) {
        console.log(`Player 2 (${p2.name}) won: ${x} vs ${y}`);
        return 'p2';
    } else {
        console.log(`It's a tie: Player 1 (${p1.name}): ${x} vs Player 2 (${p2.name}): ${y}`);
        return 'tie';
    }
}

function playGame(player1, player2, playUntil) {
    let p1Wins = 0;
    let p2Wins = 0;

    while (p1Wins < playUntil && p2Wins < playUntil) {
        const result = playRound(player1, player2);
        if (result === 'p1') {
            p1Wins++;
        } else if (result === 'p2') {
            p2Wins++;
        }
        console.log(`Score: Player 1 (${player1.name}) - ${p1Wins}, Player 2 (${player2.name}) - ${p2Wins}`);
    }

    if (p1Wins === playUntil) {
        console.log(`Player 1 (${player1.name}) wins the game!`);
        return player1;
    } else {
        console.log(`Player 2 (${player2.name}) wins the game!`);
        return player2;
    }
}

function playTournament(player1, player2, player3, player4, playUntil) {
    // First round
    const winner1 = playGame(player1, player2, playUntil);
    const winner2 = playGame(player3, player4, playUntil);

    // Final round
    const tournamentWinner = playGame(winner1, winner2, playUntil);

    // Announce the winner
    console.log(`${tournamentWinner.name} is the world champion!`);
}

const p1 = {
    name: 'John',
    getHand: getHand
};
const p2 = {
    name: 'Jill',
    getHand: getHand
};
const p3 = {
    name: 'Alice',
    getHand: getHand
};
const p4 = {
    name: 'Bob',
    getHand: getHand
};

const playUntil = 3;
playTournament(p1, p2, p3, p4, playUntil);
