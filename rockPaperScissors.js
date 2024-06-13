function getHand(){
    const hands = ['rock', 'paper', 'scissors'];

    const index = parseInt(Math.random() * 10) % 3;

    return hands[index]
    
};

function playRound(p1,p2){
    const x = p1.getHand();
    const y = p2.getHand();

    if (x === 'scissors' && y === 'paper' || x === 'rock' && y === 'scissors' || x === 'rock' && y === 'paper'){
        console.log(`Player 1 won: ${x}`)
    } else if (x === 'paper' && y === 'scissors' || x === 'scissors' && y === 'rock' || x === 'paper' && y === 'rock' ){
        console.log(`Player 2 won ${y}`)
    } else {
        console.log(`It's a tie player 1: ${x} Player 2: ${y}`)
    }


}

const p1 = {
    name: 'John',
    getHand: getHand
};
const p2 = {
    name: 'Jill',
    getHand: getHand
}
playRound(p1, p2)
// console.log(`${p1.name} got ${p1.getHand()}`);
// console.log(`${p2.name} got ${p2.getHand()}`);
