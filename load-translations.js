import { variables } from "./variables.js";
import * as fs from "fs/promises";

import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const languages = {
    de: { domain: "onboarding", files: ["onboarding", "rules"] },
    en: { domain: "onboarding", files: ["onboarding", "rules"] },
};

let loadedMessages = {};
let loadingPromise = null;

export async function loadTranslations(lang) {
    if (loadingPromise) {
        console.log("Daten werden bereits geladen. Warte...");
        return loadingPromise;
    }

    loadingPromise = (async () => {
        const messages = {};
        const langConfig = languages[lang];

        if (!langConfig) {
            console.error(`Sprache ${lang} ist nicht definiert.`);
            return null;
        }

        for (const filename of langConfig.files) {
            try {
                const filePath = path.join(
                    __dirname,
                    "translations",
                    lang,
                    `${filename}.json`,
                );

                const fileData = await fs.readFile(filePath, "utf8");

                const data = JSON.parse(fileData);
                messages[filename] = data;
            } catch (error) {
                console.error(
                    `[ERROR] Fehler beim Laden von ${filename}. Datei nicht gefunden oder ungültig.`,
                    error,
                );
            }
        }

        loadedMessages[lang] = messages;
        return loadedMessages[lang];
    })();

    return loadingPromise;
}

export async function t(key) {
    const [domain, messageKey] = key.split(".");

    if (!loadingPromise) {
        await loadTranslations(variables.settings.lang);
    }

    await loadingPromise;

    const messagesForLang = loadedMessages[variables.settings.lang];

    if (
        !messagesForLang ||
        !messagesForLang[domain] ||
        !messagesForLang[domain][messageKey]
    ) {
        console.warn(`FEHLER: Übersetzung fehlt! Schlüssel: ${key}`);
        return key;
    }

    return messagesForLang[domain][messageKey];
}
