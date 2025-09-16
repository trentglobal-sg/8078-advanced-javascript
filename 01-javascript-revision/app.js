function createDeck() {
    // we use arrays to store a sequence of values
    let deck = [];

    // C = clubs, D = diamonds, H = heaarts, S = Spades
    let suits = ["C", "D", "H", "S"];

    for (let suit of suits) {
        // create all the Diamonds
        for (let i = 1; i < 14; i++) {

            // if i is 1, then the rank should be "A"
            // if i is 11, then the rank should be "J"
            // if i is 12, then the rank should be "Q"
            // if i is 13, then the rank should be "K"
            let rank = i;

            if (i == 1) {
                rank = "A"
            }
            if (i == 11) {
                rank = "J"
            }
            if (i == 12) {
                rank = "Q"
            }
            if (i == 13) {
                rank = "K"
            }

            deck.push({
                "suit": suit,
                "rank": rank
            })
        }
    }

    return deck;
}

function shuffleDeck(deck) {
    for (let i = 0; i < 100000; i++) {
        let index1 = Math.floor(Math.random() * 51);
        let index2 = Math.floor(Math.random() * 51);

        // how to swap 2 elements in an array
        let temp = deck[index1];
        deck[index1] = deck[index2];
        deck[index2] = temp;
    }
    return deck;
}

function calculateScore(hand) {
    // A can be either 1 or 11
    // J, Q, K are 10
    // go for the most general case to the least likely case
    // OR go for the most specific case then to the more general case
    let score = 0;
    for (let card of hand) {

        if (card.rank >= 2 && card.rank <= 10) {
            score = score + card.rank;
        } else if (card.rank == 'J' || card.rank == 'Q' || card.rank == 'K') {
            score = score + 10
        } else {
            if (score + 11 > 21) {
                score = score + 1
            }
            if (score + 11 <= 21) {
                score = score + 11
            } 
        }

    }
    return score;
}

// deck is an array 
// let deck = createDeck();
// shuffleDeck(deck);

// let hand = [
//     deck[0], deck[1]
// ];

console.log(calculateScore([
    {"suit":"D", "rank": 2}, {"suit":"D", "rank": 3}
]))
console.log(calculateScore([
    {"suit":"D", "rank": 2}, {"suit":"D", "rank": "Q"}
]))
console.log(calculateScore([
    {"suit":"D", "rank": "Q"}, {"suit":"D", "rank": "A"}
]))
console.log(calculateScore([
    {"suit":"D", "rank": "A"}, {"suit":"D", "rank": "Q"}
]))
console.log(calculateScore([
    {"suit":"D", "rank": "A"}, {"suit":"S", "rank": "A"}
]))


