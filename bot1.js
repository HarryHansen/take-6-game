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
        console.log("\nBot1 is choosing which card to play ...");
        console.log("Evaluating minimium ...");

        let pileMax = piles.map((row) => {
            console.log(`Min in row is ${row[row.length - 1]}`);

            return row[row.length - 1];
        });
        let smallestPileMax = Math.min(...pileMax);
        console.log(`chose ${smallestPileMax}`);

        playableCards.push(
            ...this.ownDeck.filter((num) => num > smallestPileMax),
        );
        if (playableCards.length === 0) {
            playableCards.push(this.ownDeck[0]);
        }

        let possiblePiles = [];

        for (let i = 0; i < piles.length; i++) {
            const e = piles[i];
            if (e[e.length - 1] < playableCards[0]) possiblePiles.push(i);
        }
        console.log(possiblePiles);
        if (possiblePiles.length > 1) {
            possiblePiles = possiblePiles.sort((a, b) => a - b);
            console.log(
                "possiblePiles[possiblePiles.length - 1]:" +
                    possiblePiles[possiblePiles.length - 1],
            );
            possiblePiles = [possiblePiles[possiblePiles.length - 1]];
        }
        console.log(possiblePiles);

        if (possiblePiles.length === 0) {
            let bestPile = [];
            let pointsOfBestPile = 100;
            for (let i = 0; i < piles.length; i++) {
                const e = piles[i];
                if (
                    this.utilities.calculatePointsOfPile(e) < pointsOfBestPile
                ) {
                    bestPile = [i];
                }
            }
            possiblePiles = bestPile;
        }

        playedCard = playableCards[0];
        this.ownDeck = this.ownDeck.filter((e) => e !== playedCard);

        return [playedCard, possiblePiles[0]];
    }
}
