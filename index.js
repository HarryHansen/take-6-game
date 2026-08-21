import Game from "./game.js";
import Bot1 from "./bots/bot1.js";
import { Player } from "./player.js";
import { styleText } from "node:util";
import Utilities from "./utilities.js";

let amountOfPlayers = 2;
let cardsPerPlayer = 10;
let amountOfPiles = 3;

export const game = new Game(amountOfPlayers, cardsPerPlayer, amountOfPiles);
const bot1 = new Bot1(game.players[0].cards, 0);
const player = new Player(game.players[1].cards, 1);
const utilities = new Utilities();

async function play() {
    let answer = await utilities.ask(
        'Herzlich willkommen bei "Sechs nimmt - die inoffiziele Terminal Version" 👋🏻',
        ["Spiel direkt starten", "Regeln anzeigen", "Spiel abbrechen"],
    );
    if (answer === "Regeln anzeigen")
        console.log(
            "Hier stehen in gewisser Zeit vielleicht wirklich die Regeln ... 🫪",
        );
    if (answer === "Spiel abbrechen") {
        game.stopped = true;
        game.aborted = true;
    }

    for (let i = 0; i < cardsPerPlayer && game.stopped === false; i++) {
        let cardBot1 = await bot1.choose(game.piles);
        bot1.collectedPoints += game.playCard(cardBot1[1], cardBot1[0]);

        const leftPiles = game.piles[cardBot1[1]].slice(
            0,
            game.piles[cardBot1[1]].length - 1,
        );

        if (Array.isArray(leftPiles) && leftPiles.length > 0) {
            console.log(
                styleText(
                    "green",
                    `Der Bot hat die Karte ${cardBot1[0]} auf den Stapel mit der Karte/den Karten ${leftPiles.join(", ")} gelegt \n`,
                ),
            );
        } else {
            console.log(
                styleText(
                    "green",
                    `Der Bot hat mit der Karte ${cardBot1[0]} einen Stapel genommen.\n`,
                ),
            );
        }

        let cardPlayer = await player.choose(game.piles);
        player.collectedPoints += game.playCard(cardPlayer[1], cardPlayer[0]);

        if (i >= cardsPerPlayer) game.stopped = true;
    }
    if (!game.aborted) {
        console.log(
            `\nSpieler ${bot1.playerId + 1} hat ${bot1.collectedPoints} Hornochsen gesammelt.\nSpieler ${player.playerId + 1} hat ${player.collectedPoints} Hornochsen gesammelt.`,
        );
    } else {
        console.log("Spiel abgebrochen");
    }
}

play();
