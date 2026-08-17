// inputHandler.js
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "process";

/**
 * Service zur Abfrage von Benutzereingaben mit eingebauter Promise-Unterstützung.
 */
export class InputHandler {
    constructor() {
        // Wir bauen das Interface trotzdem (damit wir es sauber verwalten können),
        // aber die Methoden nutzen dann direkt die readline/promises-Funktionen.
        this.rl = readline.createInterface({ input, output });
    }

    /**
     * Fragt nach einer allgemeinen Zeichenkette und gibt diese als Promise zurück.
     * @param {string} question Die zu stellende Frage.
     * @returns {Promise<string>} Die eingegebene Antwort.
     */
    async ask(question) {
        // Hier nutzen wir die Methode aus dem readline/promises-Namespace, da sie bereits ein Promise zurückgibt.
        return this.rl.question(question);
    }

    /**
     * Fragt nach einer ganzen Zahl und validiert diese automatisch mit einem Catch-Mechanismus.
     * @param {string} question Die zu stellende Frage.
     * @returns {Promise<number>} Die validierte ganze Zahl.
     */
    async askNumber(question) {
        let answer;
        let zahl = 0;
        let isValid = false;

        // Wir verwenden eine Schleife, um zu zwingen, bis eine gültige Eingabe kommt.
        while (!isValid) {
            try {
                answer = await this.ask(question);
                zahl = Number(answer); // Versuch der Umwandlung

                // Validierung: Prüfen auf NaN (Not a Number).
                // Beachten Sie auch den Fall "" (leerer String), da NaN nicht immer reicht.
                if (!isNaN(zahl) && answer.trim() !== "") {
                    isValid = true; // Eingabe war erfolgreich
                } else {
                    throw new Error(
                        "Eingaben-Fehler: Bitte geben Sie eine echte Zahl ein.",
                    );
                }
            } catch (error) {
                console.error(`❌ ${error.message}`);
            }
        }
        return zahl;
    }

    /**
     * Schließt die Readline-Schnittstelle und beendet den I/O-Prozess sauber.
     */
    close() {
        this.rl.close();
    }
}

// Wir exportieren auch eine Methode, um das Objekt zu schließen (wichtig für `main`).
export const closeInputHandler = (handler) => {
    if (handler && handler.rl) {
        handler.close();
    }
};
