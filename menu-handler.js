import inquirer from 'inquirer'

/**
 * MenuHandler - Verwaltet alle Interaktionslogiken mit dem Benutzer (z.B. Menüs).
 */
export default class MenuHandler {
    constructor() {
        // Hier könnten Sie eventuelle globale Einstellungen des Handlers speichern.
        console.log("MenuHandler wurde initialisiert.");
    }

    /**
     * Führt ein interaktives Choices-Menü aus.
     * @param {string[]} choicesArray - Das Array der zu wählenden Optionen (z.B. ['A', 'B', 'C']).
     * @returns {Promise<string|null>} Die gewählte Option als String, oder null bei Abbruch/Fehler.
     */
    async runMenu(choicesArray) {
        if (!choicesArray || choicesArray.length === 0) {
            console.error("Fehler: Menüoptionen wurden nicht übergeben.");
            return null;
        }

        // Die Konfiguration, die Inquirer benötigt
        const questions = [
            {
                type: "select", // Aktiviert Pfeil-Tasten / Auswahlmenü
                name: "selectedOption", // Name, unter dem der Wert gespeichert wird
                message: "👉 Wähle eine Option aus:",
                choices: choicesArray,
                default: choicesArray[0], // Setzt die erste Option als Standardauswahl
            },
        ];

        try {
            // Await wartet hier auf die Konsoleninteraktion (Tastenanschlag/Enter)
            const answers = await inquirer.prompt(questions);

            // Rückgabe der gewählten Option
            return answers.selectedOption;
        } catch (error) {
            // Dies fängt Abbrüche ab (z.B. durch Ctrl+C oder andere IO-Fehler)
            console.log(
                "\n[MenuHandler] Menüabbruch erkannt. Operation abgebrochen.",
            );
            console.log(error)
            return null; // Zeigt dem Aufrufer an, dass nichts ausgewählt wurde
        }
    }
}
