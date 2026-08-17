export default class Decks {
    constructor(amountOfPlayers, cardsPerPlayer) {
        this.pile = this.initPile();
        this.deck = this.initDecks(amountOfPlayers, cardsPerPlayer);
    }

    initPile() {
        let cards = [];

        function shuffleArray(array) {
            let currentIndex = array.length;
            let randomIndex;

            while (currentIndex !== 0) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;

                [array[currentIndex], array[randomIndex]] = [
                    array[randomIndex],
                    array[currentIndex],
                ];
            }
            return array;
        }

        for (let i = 1; i <= 104; i++) {
            cards.push(i);
        }

        cards = shuffleArray(cards);

        return cards;
    }

    initDecks(amountOfPlayers, cardsPerPlayer) {
        if (amountOfPlayers * cardsPerPlayer > 104) return null;
        let decks = [];
        for (let i = 0; i < amountOfPlayers; i++) {
            decks.push(this.pile.splice(0, cardsPerPlayer));
        }

        return decks;
    }
}
