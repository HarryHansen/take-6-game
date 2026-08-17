import Utilities from "./utilities.js";
import { game } from "./index.js";

export class Player {
    constructor(deck, playerId) {
        this.ownDeck = deck;
        this.collectedPoints = 0;
        this.playerId = playerId;
        this.utilities = new Utilities();
    }

    async choose(piles) {
        let playedCard = 0;
        let chosenPile = 0;
        let modifiedPiles = [];
        console.log(
            `Die Stapel sind ${piles.map((p) => p.join(", ")).join(" oder ")}\nDu hast diese Karten: ${this.ownDeck.join(", ")}`,
        );

        playedCard = await this.utilities.ask("Welche Karte möchtest du spielen?", [
            ...this.ownDeck,
            "Spiel abbrechen",
        ]);
        if (playedCard === "Spiel abbrechen") {
            game.stopped = true;
            return [this.ownDeck.pop(), Math.floor(Math.random() * 3)];
        }
        for (let i = 0; i < piles.length; i++) {
            modifiedPiles.push({ name: JSON.stringify(piles[i]), value: i });
        }
        chosenPile = await this.utilities.ask(
            "Auf welchen Stapel möchtest du deine Karte legen?",
            modifiedPiles,
        );

        this.ownDeck = this.ownDeck.filter((e) => e !== playedCard);

        return [playedCard, chosenPile];
    }
}
