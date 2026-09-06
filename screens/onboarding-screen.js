import { variables } from "../variables.js";
import { t } from "../utilities/load-translations.js";
import SettingsScreen from "./settings-screen.js";
import Utilities from "../utilities/utilities.js";
import { showRulesScreen } from "./rules-screen.js";

const settingsScreen = new SettingsScreen();
const utilities = new Utilities();

export async function showOnboardingScreen() {
    console.clear();
    let answerTextHello = await t("onboarding.hello");
    answerTextHello += ", " + variables.settings.name;
    let answerTextOnboarding = await t("onboarding.options");

    let answer = await utilities.ask(answerTextHello, [
        answerTextOnboarding.startGame,
        answerTextOnboarding.showRules,
        answerTextOnboarding.showSettings,
        answerTextOnboarding.stopGame,
    ]);

    if (answer === answerTextOnboarding.showRules) await showRulesScreen();
    if (answer === answerTextOnboarding.stopGame) {
        variables.stopped = true;
        variables.aborted = true;
    }

    if (answer === answerTextOnboarding.showSettings) {
        await settingsScreen.showScreen();
        await showOnboardingScreen();
    }
}
