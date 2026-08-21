import Utilities from "../utilities.js";

export default class Bot2 {
    constructor(deck, playerId) {
        this.ownDeck = deck;
        this.collectedPoints = 0;
        this.playerId = playerId;
        this.utilities = new Utilities();
    }

    choose(piles) {
        return [0, 0];
    }
}
