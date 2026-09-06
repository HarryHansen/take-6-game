import { variables } from "../variables.js";
import { writeSingleString } from "./file-management.js";

export function saveSettings() {
    writeSingleString("../data/name.txt", variables.settings.name.trim());
    writeSingleString("../data/default_lang.txt", variables.settings.lang);
}
