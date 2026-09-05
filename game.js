import Decks from "./decks.js";
import Utilities from "./utilities.js";
import { variables } from "./variables.js";

export default class Game {
    constructor(amountOfPlayers, cardsPerPlayer, amountOfPiles) {
        this.decks = new Decks(amountOfPlayers, cardsPerPlayer);
        this.utilities = new Utilities();
        this.cardsPerPlayer = cardsPerPlayer;
        this.amountOfPlayers = amountOfPlayers;
        this.players = this.initPlayers(amountOfPlayers);
        this.pile = this.decks.pile;
        this.piles = this.initPiles(amountOfPiles);
    }

    initPlayers() {
        let array = [];
        for (let i = 0; i < this.amountOfPlayers; i++) {
            array.push({
                cards: this.decks.deck[i].sort((a, b) => a - b),
            });
        }
        return array;
    }

    initPiles(amountOfPiles) {
        let array = [];
        for (let i = 0; i < amountOfPiles; i++) {
            array.push([this.pile.pop()]);
        }
        return array;
    }

    playCard(pileId, cardToPlay) {
        if (this.piles[pileId][this.piles[pileId].length - 1] > cardToPlay) {
            let oldPile = this.piles[pileId];
            this.piles[pileId] = [cardToPlay];
            return this.utilities.calculatePointsOfPile(oldPile);
        }
        this.piles[pileId].push(cardToPlay);
        return this.checkPiles();
    }

    checkPiles() {
        let points = 0;
        this.piles.forEach((p) => {
            if (p.length > 5) {
                let invalidCarts = p.splice(0, 5);
                invalidCarts.forEach((i) => {
                    points += this.utilities.calculatePoints(i);
                });
            }
        });
        return points;
    }
}
