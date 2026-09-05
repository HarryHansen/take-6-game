import Utilities from "../utilities.js";

export default class Bot2 {
    constructor(deck, playerId) {
        this.ownDeck = deck;
        this.collectedPoints = 0;
        this.playerId = playerId;
        this.utilities = new Utilities();
    }

    /**
     * @param {Array[]} piles - An array with n subarrays that contain all the cards that are currently distributed through the piles
     * @returns {Number[]} An array in the format [playedCard: Number, pileToChoose: Number]
     */

    choose(piles) {
        return [0, 0];
    }

    analyse(piles, cards, playedCards, depth, allCards) {
        let bestMove = {
            cardToPlay: 0,
            pileToChoose: 0,
            points: +Infinity,
        };

        let possibleMoves = calculatePossibleMoves(piles, cards);

        let original = {
            piles: piles,
            cards: cards,
            playedCards: playedCards,
        };

        for (let i = 0; i < possibleMoves.length; i++) {
            piles = original.piles;
            cards = original.cards;
            playedCards = original.playedCards;

            const move = possibleMoves[i];
            let points = 0;
            points += pointsOfMove(move.cardToPlay, move.pileToChoose, piles);

            cards = cards.filter((c) => c !== move.cardToPlay);
            piles[move.pileToChoose].push(move.cardToPlay);

            piles = piles.map((p) => {
                if (p.length > 5) {
                    return p.slice(-1);
                }
                return p;
            });

            playedCards.push(move.cardToPlay);

            let opponentsMove = analyse(
                piles,
                allCards.filter((c) => {
                    playedCards.includes(c) === false &&
                        cards.includes(c) === false;
                }),
                playedCards,
                1,
                allCards,
            );

            piles[opponentsMove.pileToChoose].push(opponentsMove.cardToPlay);
            piles = piles.map((p) => {
                if (p.length > 5) {
                    return p.slice(-1);
                }
                return;
            });
            playedCards.push(opponentsMove.cardToPlay);

            if (depth > 1) {
                let nextMove = analyse(
                    piles,
                    allCards.filter((c) => {
                        playedCards.includes(c) === false &&
                            cards.includes(c) === false;
                    }),
                    playedCards,
                    depth - 1,
                    allCards,
                );
                points += nextMove.points;
            }

            if (points < bestMove.points) {
                bestMove = {
                    cardToPlay: move.cardToPlay,
                    pileToChoose: move.pileToChoose,
                    points: points,
                };
            }
        }

        return bestMove;
    }

    calculatePossibleMoves() {}

    /**
     * @param {Array[]} piles - An array with n subarrays that contain all the cards that are currently distributed through the piles
     * @param {Object} move - gives the move
     */
    pointsOfMove(piles, move) {
        // Calculating points of a given move
        console.log(piles);
    }
}
