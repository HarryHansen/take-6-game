import { InputHandler } from "./inputHandler.js";
import MenuHandler from "./menu-handler.js";

export class Player {
    constructor(deck, playerId) {
        this.ownDeck = deck;
        this.collectedPoints = 0;
        this.playerId = playerId;
    }

    async choose(piles) {
        let playedCard = 0;
        let chosenPile = 0;
        console.log(
            `Die Stapel sind ${piles.join(" oder ")}\nDu hast diese Karten: ${this.ownDeck}`,
        );

        playedCard = await this.ask("Welche Karte möchtest du spielen?");
        chosenPile = await this.ask("Auf welchen Stapel möchtest du deine Karte legen?");

        this.ownDeck = this.ownDeck.filter((e) => e !== playedCard);

        return [playedCard, chosenPile];
    }

    async ask(question = "An error occured") {
        const handler = new InputHandler();
        let answer;

        try {
            answer = await handler.askNumber(question);
        } catch (error) {
            // Hier wird der Fehler abgefangen, wenn die Validierung in askNumber fehlschlägt
            console.error(
                `\n❌ Ein kritischer Fehler ist aufgetreten: ${error.message}`,
            );
        } finally {
            // Die Schnittstelle muss immer geschlossen werden, egal ob Erfolg oder Misserfolg!
            handler.close();
        }
        return answer;
    }
}
