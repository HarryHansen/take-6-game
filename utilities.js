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
}
