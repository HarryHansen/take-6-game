import inquirer from "inquirer";
import { variables } from "./variables.js";

export default class MenuHandler {
    constructor() {}

    /**
     * @param {number[]} choicesArray - Das Array der zu wählenden Optionen (z.B. ['A', 'B', 'C']).
     * @returns {Promise<string|null>} Die gewählte Option als String, oder null bei Abbruch/Fehler.
     */
    async runMenu(question, choicesArray) {
        if (!choicesArray || choicesArray.length === 0) {
            console.error("Fehler: Menüoptionen wurden nicht übergeben.");
            return null;
        }

        const params = [
            {
                type: "select",
                name: "selectedOption",
                message: question,
                choices: choicesArray,
                default: choicesArray[0],
            },
        ];

        try {
            const answers = await inquirer.prompt(params);

            return answers.selectedOption;
        } catch (error) {
            console.log(
                "\n[MenuHandler] Menüabbruch erkannt. Operation abgebrochen.",
            );
            console.log(error);
            return null;
        }
    }

    async showSettings() {
        const settings = [
            {
                question: "Welche Sprache sprichst du?",
                type: "select",
                choices: ["Deutsch", "English"],
                matchingSetting: "lang",
            },
            {
                question: "Was ist dein Name?",
                type: "freeInput",
                choices: [],
                matchingSetting: "name",
            },
            {
                question: "Wie viele Leute spielen mit?",
                type: "freeInput",
                choices: [],
                matchingSetting: "amountOfPlayers",
            },
            {
                question:
                    "Möchtest du beim Nehmen automatisch den günstigsten Stapel nehmen?",
                type: "select",
                choices: ["Ja", "Nein"],
                matchingSetting: "alwaysTakeCheapestPile",
            },
        ];
        for (let i = 0; i < settings.length; i++) {
            const setting = settings[i];
            const answer = await this.runMenu(
                setting.question,
                setting.choices,
            );

            variables.settings[setting.matchingSetting] = answer;
        }
    }
}
