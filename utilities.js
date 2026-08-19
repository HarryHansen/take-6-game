import MenuHandler from "./menu-handler.js";

export default class Utilities {
    constructor() {}

    calculatePoints(card) {
        if (card % 55 === 0) return 7;
        if (card % 11 === 0) return 5;
        if (card % 10 === 0) return 3;
        if (card % 5 === 0) return 2;
        return 1;
    }

    calculatePointsOfPile(pile) {
        let points = 0;
        pile.forEach((p) => {
            points += this.calculatePoints(p);
        });
        return points;
    }

    getValidPile(cardToPlay, piles, choosePileWithLeastPoints) {
        let possiblePiles = [];

        for (let i = 0; i < piles.length; i++) {
            const e = piles[i];
            if (e[e.length - 1] < cardToPlay) possiblePiles.push(i);
        }
        if (possiblePiles.length > 1) {
            possiblePiles = possiblePiles.sort(
                (a, b) =>
                    piles[a][piles[a].length - 1] -
                    piles[b][piles[b].length - 1],
            );
            possiblePiles = [possiblePiles[possiblePiles.length - 1]];
        }

        if (choosePileWithLeastPoints === true) {
            if (possiblePiles.length === 0) {
                let bestPile = [];
                let pointsOfBestPile = 100;
                for (let i = 0; i < piles.length; i++) {
                    const e = piles[i];
                    if (this.calculatePointsOfPile(e) < pointsOfBestPile) {
                        bestPile = [i];
                    }
                }
                possiblePiles = bestPile;
            }

            return possiblePiles[0];
        } else {
            if (possiblePiles.length === 0) {
                for (let i = 0; i < piles.length; i++) {
                    possiblePiles.push(i);
                }
                return [possiblePiles, true];
            }

            return [possiblePiles[0], false];
        }
    }

    async ask(question = "An error occured", options) {
        const handler = new MenuHandler();
        let answer = await handler.runMenu(question, options);
        if (answer !== null) return answer;
        return options[0];
    }
}
