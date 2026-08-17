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
        let modifiedPiles = [];
        console.log(
            `Die Stapel sind ${piles.join(" oder ")}\nDu hast diese Karten: ${this.ownDeck}`,
        );

        playedCard = await this.ask(
            "Welche Karte möchtest du spielen?",
            this.ownDeck,
        );
        for (let i = 0; i < piles.length; i++) {
            modifiedPiles.push({ name: JSON.stringify(piles[i]), value: i });
        }
        chosenPile = await this.ask(
            "Auf welchen Stapel möchtest du deine Karte legen?",
            modifiedPiles,
        );

        this.ownDeck = this.ownDeck.filter((e) => e !== playedCard);

        return [playedCard, chosenPile];
    }

    async ask(question = "An error occured", options) {
        const handler = new MenuHandler();
        let answer = await handler.runMenu(question, options);
        if (answer !== null) return answer;
        return options[0];
    }
}
