import { t } from "../utilities/load-translations.js";
import MenuHandler from "../utilities/menu-handler.js";
import { showOnboardingScreen } from "./onboarding-screen.js";

const menuHandler = new MenuHandler();
export async function showRulesScreen() {
    let rules = await t("rules.rules");
    console.log(rules);

    let exit = await t("rules.exit");
    let answer = await menuHandler.runMenu(exit, [], "freeInput");

    if (answer === "q") {
        await showOnboardingScreen();
    }
}
