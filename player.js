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

        console.log("Das sind die Stapel:");

        const pileNames = Array.from(
            { length: piles.length },
            (_, i) => `Stapel ${i + 1}`,
        );

        const maxLen = Math.max(...piles.map((p) => p.length));

        const transposed = Array.from({ length: maxLen }, (_, i) =>
            piles.map((pile) => pile[i] ?? "-"),
        );
        console.table(transposed);

        playedCard = await this.utilities.ask(
            "Welche Karte möchtest du spielen?",
            [...this.ownDeck, "Spiel abbrechen"],
        );
        if (playedCard === "Spiel abbrechen") {
            game.stopped = true;
            game.aborted = true;
            return [this.ownDeck.pop(), Math.floor(Math.random() * 3)];
        }
        let possiblePiles = this.utilities.getValidPile(
            playedCard,
            piles,
            false,
        );
        if (possiblePiles[1] === true) {
            for (let i = 0; i < possiblePiles[0].length; i++) {
                let pile = piles[possiblePiles[0][i]];
                modifiedPiles.push({
                    name: `${JSON.stringify(pile)} -> ${this.utilities.calculatePointsOfPile(pile)} Hornochse(n)`,
                    value: i,
                });
            }
            chosenPile = await this.utilities.ask(
                "Welchen Stapel möchtest du nehmen?",
                modifiedPiles,
            );
        } else {
            chosenPile = possiblePiles[0];
        }

        this.ownDeck = this.ownDeck.filter((e) => e !== playedCard);

        return [playedCard, chosenPile];
    }
}
