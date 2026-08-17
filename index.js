import Game from "./game.js";
import Bot1 from "./bot1.js";
import { Player } from "./player.js";
import { styleText } from "node:util";

let amountOfPlayers = 2;
let cardsPerPlayer = 10;

let game = new Game(amountOfPlayers, cardsPerPlayer, 3);
let bot1 = new Bot1(game.players[0].cards, 0);
let player = new Player(game.players[1].cards, 1);

async function loop() {
    for (let i = 0; i < cardsPerPlayer; i++) {
        let cardBot1 = await bot1.choose(game.piles);
        bot1.collectedPoints += game.playCard(cardBot1[1], cardBot1[0]);
        console.log(
            styleText(
                "green",
                `Der Bot hat die Karte ${cardBot1[0]} auf den Stapel mit der Karte/den Karten ${game.piles[cardBot1[1]].slice(0, game.piles[cardBot1[1]].length - 1)} gelegt \n`,
            ),
        );

        let cardPlayer = await player.choose(game.piles);
        player.collectedPoints += game.playCard(cardPlayer[1], cardPlayer[0]);

        if (i >= cardsPerPlayer) game.stopped = true;
    }

    console.log(
        `\nSpieler ${bot1.playerId + 1} hat ${bot1.collectedPoints} Hornochsen gesammelt.\nSpieler ${player.playerId + 1} hat ${player.collectedPoints} Hornochsen gesammelt.`,
    );
}

loop();
