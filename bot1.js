import Utilities from "./utilities.js";

export default class Bot1 {
    constructor(deck, playerId) {
        this.ownDeck = deck;
        this.collectedPoints = 0;
        this.playerId = playerId;
        this.utilities = new Utilities();
    }

    choose(piles) {
        let playableCards = [];
        let playedCard = 0;

        let pileMax = piles.map((row) => {
            return row[row.length - 1];
        });
        let smallestPileMax = Math.min(...pileMax);

        playableCards.push(
            ...this.ownDeck.filter((num) => num > smallestPileMax),
        );
        if (playableCards.length === 0) {
            playableCards.push(this.ownDeck[0]);
        }

        playedCard = playableCards[0];

        let possiblePiles = this.utilities.getValidPile(
            playedCard,
            piles,
            true,
        );

        this.ownDeck = this.ownDeck.filter((e) => e !== playedCard);

        return [playedCard, possiblePiles];
    }
}
