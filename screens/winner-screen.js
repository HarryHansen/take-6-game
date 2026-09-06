import { t } from "../utilities/load-translations.js";
import { styleText } from "node:util";

export async function showWinnerScreen(
    botCollectedPoints = 0,
    playerCollectedPoints = 0,
) {
    console.clear();
    let text = await t("gameplay.printResults");
    let textArray = [
        text[0],
        botCollectedPoints,
        text[1],
        playerCollectedPoints,
        text[2],
    ];
    let winner;
    if (botCollectedPoints < playerCollectedPoints) {
        winner = 0;
    } else if (botCollectedPoints > playerCollectedPoints) {
        winner = 1;
    } else {
        winner = 2;
    }
    let winnerText = await t("gameplay.winnerText");
    winnerText = winnerText[winner];
    textArray.push(winnerText);
    console.log(styleText("magenta", textArray.join("")));
}
