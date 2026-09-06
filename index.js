import Game from "./game.js";
import Bot1 from "./bots/bot1.js";
import { Player } from "./player.js";
import { styleText } from "node:util";
import { variables } from "./variables.js";
import MenuHandler from "./utilities/menu-handler.js";
import { t } from "./utilities/load-translations.js";
import { setDefaultLang } from "./utilities/language-settings.js";
import { showWinnerScreen } from "./screens/winner-screen.js";
import { readSingleString } from "./utilities/file-management.js";
import { showOnboardingScreen } from "./screens/onboarding-screen.js";

let amountOfPlayers = 2;
let cardsPerPlayer = 10;
let amountOfPiles = 3;

export const game = new Game(amountOfPlayers, cardsPerPlayer, amountOfPiles);
const bot1 = new Bot1(game.players[0].cards, 0);
const player = new Player(game.players[1].cards, 1);

async function play() {
    await showOnboardingScreen()

    for (let i = 0; i < cardsPerPlayer && variables.stopped === false; i++) {
        let cardBot1 = bot1.choose(game.piles);
        bot1.collectedPoints += game.playCard(cardBot1[1], cardBot1[0]);

        const leftPiles = game.piles[cardBot1[1]].slice(
            0,
            game.piles[cardBot1[1]].length - 1,
        );

        if (Array.isArray(leftPiles) && leftPiles.length > 0) {
            let botPlayedCardText = await t("gameplay.botPlayedCardText");
            let botPlayedCardTextArray = [
                botPlayedCardText[0],
                cardBot1[0].toString(),
                botPlayedCardText[1],
                leftPiles.join(", "),
                botPlayedCardText[2],
            ];
            console.log(styleText("green", botPlayedCardTextArray.join("")));
        } else {
            let botTookPileText = await t("gameplay.botTookPileText");
            let botTookPileTextArray = [
                botTookPileText[0],
                cardBot1[0],
                botTookPileText[1],
            ];
            console.log(styleText("green", botTookPileTextArray.join("")));
        }

        let cardPlayer = await player.choose(game.piles);
        player.collectedPoints += game.playCard(cardPlayer[1], cardPlayer[0]);

        if (i >= cardsPerPlayer) variables.stopped = true;
    }
    if (!variables.aborted) {
        showWinnerScreen(bot1.collectedPoints, player.collectedPoints);
    } else {
        let text = await t("gameplay.gameTerminated");
        console.log(text);
    }
}

console.clear();
await setDefaultLang();
variables.settings.name =
    await readSingleString("../data/name.txt") || "Mr. / Mrs. Unknown";
play();
