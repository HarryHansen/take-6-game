import MenuHandler from "../utilities/menu-handler.js";
import { variables } from "../variables.js";
import { loadTranslations, t } from "../utilities/load-translations.js";
import { saveSettings } from "../utilities/save-settings.js";

export default class SettingsScreen {
    constructor() {
        this.menuHandler = new MenuHandler();
    }

    async showScreen() {
        console.clear();
        let languageText = await t("settings.language");
        let name = await t("settings.name");
        let takeCheapestPileText = await t("settings.takeCheapestPile");
        const settings = [
            {
                question: languageText.question,
                type: "select",
                choices: [
                    { name: languageText.choices.de, value: "de" },
                    { name: languageText.choices.en, value: "en" },
                ],
                matchingSetting: "lang",
            },
            {
                question: name,
                type: "freeInput",
                choices: [],
                matchingSetting: "name",
            },
            /* {
                question: takeCheapestPileText.question,
                type: "select",
                choices: [
                    { name: takeCheapestPileText.choices.yes, value: true },
                    { name: takeCheapestPileText.choices.no, value: false },
                ],
                matchingSetting: "alwaysTakeCheapestPile",
            }, */
        ];
        for (let i = 0; i < settings.length; i++) {
            const setting = settings[i];
            const answer = await this.menuHandler.runMenu(
                setting.question,
                setting.choices,
                setting.type,
            );

            let setting2;
            if (
                variables.settings[setting.matchingSetting] !== answer &&
                setting.matchingSetting === "lang"
            ) {
                loadTranslations(answer);
                variables.settings[setting.matchingSetting] = answer;
                settings[1].question = await t("settings.name");
                /* setting2 = await t("settings.takeCheapestPile");
                settings[2].question = setting2.question;
                settings[2].choices[0].name = setting2.choices.yes;
                settings[2].choices[1].name = setting2.choices.no; */
            }
            variables.settings[setting.matchingSetting] = answer;
            await loadTranslations(variables.settings.lang);
        }
        saveSettings();
    }
}
