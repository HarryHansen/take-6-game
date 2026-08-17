import Game from "./game.js";
import Bot1 from "./bot1.js";
import { Player } from "./player.js";
import { styleText } from "node:util";
import Utilities from "./utilities.js";

let amountOfPlayers = 3;
let cardsPerPlayer = 10;

export const game = new Game(amountOfPlayers, cardsPerPlayer, 3);
const bot1 = new Bot1(game.players[0].cards, 0);
const bot2 = new Bot1(game.players[1].cards, 1);
const player = new Player(game.players[2].cards, 2);
const utilities = new Utilities();

async function play() {
    let answer = await utilities.ask("Herzlich willkommen bei \"Sechs nimmt - die inoffiziele Terminal Version\" 👋🏻", ["Spiel direkt starten", "Regeln anzeigen"])
    if (answer === "Regeln anzeigen") console.log("Hier stehen in gewisser Zeit vielleicht wirklich die Regeln ... 🫪");
    for (let i = 0; i < cardsPerPlayer && game.stopped === false; i++) {
        let cardBot1 = await bot1.choose(game.piles);
        bot1.collectedPoints += game.playCard(cardBot1[1], cardBot1[0]);
        console.log(
            styleText(
                "green",
                `Der Bot hat die Karte ${cardBot1[0]} auf den Stapel mit der Karte/den Karten ${game.piles[cardBot1[1]].slice(0, game.piles[cardBot1[1]].length - 1).join(", ")} gelegt \n`,
            ),
        );

        let cardBot2 = await bot2.choose(game.piles);
        bot2.collectedPoints += game.playCard(cardBot2[1], cardBot2[0]);
        console.log(
            styleText(
                "green",
                `Der Bot hat die Karte ${cardBot2[0]} auf den Stapel mit der Karte/den Karten ${game.piles[cardBot2[1]].slice(0, game.piles[cardBot2[1]].length - 1).join(", ")} gelegt \n`,
            ),
        );

        let cardPlayer = await player.choose(game.piles);
        player.collectedPoints += game.playCard(cardPlayer[1], cardPlayer[0]);

        if (i >= cardsPerPlayer) game.stopped = true;
    }

    console.log(
        `\nSpieler ${bot1.playerId + 1} hat ${bot1.collectedPoints} Hornochsen gesammelt.\nSpieler ${bot2.playerId + 1} hat ${bot2.collectedPoints} Hornochsen gesammelt.\nSpieler ${player.playerId + 1} hat ${player.collectedPoints} Hornochsen gesammelt.`,
    );
}

play();
