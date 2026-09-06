import Utilities from "./utilities/utilities.js";
import { variables } from "./variables.js";
import { t } from "./utilities/load-translations.js";

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

        await this.utilities.showPilesTable(piles);

        let cardToPlay = await t("gameplay.cardToPlay");
        let terminateGameText = await t("gameplay.terminateGame");
        playedCard = await this.utilities.ask(cardToPlay, [
            ...this.ownDeck,
            terminateGameText,
        ]);
        if (playedCard === terminateGameText) {
            variables.stopped = true;
            variables.aborted = true;
            return [this.ownDeck.pop(), Math.floor(Math.random() * 3)];
        }

        console.log(variables.settings.alwaysTakeCheapestPile);
        let possiblePiles = this.utilities.getValidPile(
            playedCard,
            piles,
            variables.settings.alwaysTakeCheapestPile,
        );
        console.log(possiblePiles);

        if (!variables.settings.alwaysTakeCheapestPile) {
            if (possiblePiles[1] === true) {
                let hornochsenText = await t("gameplay.hornochsen");
                for (let i = 0; i < possiblePiles[0].length; i++) {
                    let pile = piles[possiblePiles[0][i]];
                    modifiedPiles.push({
                        name: `${JSON.stringify(pile)} -> ${this.utilities.calculatePointsOfPile(pile)} ${hornochsenText}`,
                        value: i,
                    });
                }
                let whichPileToChoose = await t("gameplay.whichPileToChoose");
                chosenPile = await this.utilities.ask(
                    whichPileToChoose,
                    modifiedPiles,
                );
            } else {
                chosenPile = possiblePiles[0];
            }
        } else{
            chosenPile = possiblePiles;
        }

        this.ownDeck = this.ownDeck.filter((e) => e !== playedCard);

        return [playedCard, chosenPile];
    }
}
