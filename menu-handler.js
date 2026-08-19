import inquirer from "inquirer";

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
}
