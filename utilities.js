import MenuHandler from "./menu-handler.js";

export default class Utilities {
    constructor() {
        this.handler = new MenuHandler();
    }

    calculatePoints(card = 0) {
        if (
            typeof card !== "number" ||
            card < 1 ||
            card > 104 ||
            card === null ||
            card === undefined ||
            card % Math.floor(card) !== 0
        ) {
            return undefined;
        }
        if (card % 55 === 0) return 7;
        if (card % 11 === 0) return 5;
        if (card % 10 === 0) return 3;
        if (card % 5 === 0) return 2;
        return 1;
    }

    calculatePointsOfPile(pile) {
        let points = 0;
        let invalid = false;

        if (Array.isArray(pile) !== true || pile.length > 5) return undefined;
        if (new Set(pile).size !== pile.length) return undefined;
        if (pile.filter((p) => typeof p === "number").length !== pile.length)
            return undefined;

        pile.forEach((p) => {
            let point = this.calculatePoints(p);
            if (point === undefined) {
                invalid = true;
            } else {
                points += point;
            }
        });
        if (invalid === true) return undefined;
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

    showPilesTable(piles) {
        console.log("Das sind die Stapel:");

        const pileNames = Array.from(
            { length: piles.length },
            (_, i) => `Stapel ${i + 1}`,
        );

        const transposed = Array.from({ length: 5 }, (_, i) =>
            piles.map((pile) => pile[i] ?? "-"),
        );
        console.table(transposed);
    }

    async ask(question = "An error occured", options) {
        let answer = await this.handler.runMenu(question, options);
        if (answer !== null) return answer;
        return options[0];
    }
}
