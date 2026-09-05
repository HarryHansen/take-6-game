import { readSingleString, writeSingleString } from "./file-management.js";

import { variables } from "../variables.js";

export async function setDefaultLang() {
    try {
        let lang = await readSingleString("../data/default_lang.txt");
        variables.settings.lang = lang;
    } catch (error) {
        console.log("An error occured during loading the right language");
        variables.settings.lang = "de";
    }
}

export async function writeDefaultLang(lang) {
    try {
        await writeSingleString("../data/default_lang.txt", lang);
    } catch (error) {
        console.log("An error occured during saving the new language");
    }
}
