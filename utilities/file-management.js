import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


/**
 * @param {string} fileName - Der Name der Datei (z.B. 'setting.txt').
 * @returns {Promise<string>} Der gesamte Inhalt der Datei als String.
 * @throws {Error} Wenn die Datei nicht gefunden oder ein Lesefehler auftritt.
 */
export async function readSingleString(fileName) {
    const filePath = path.join(__dirname, fileName);
    
    try {
        const content = await fs.readFile(filePath, 'utf8');
        
        return content.trim(); 
        
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error(`Die Datei '${fileName}' wurde nicht gefunden. ${new Date().toISOString()}`);
        }
        throw new Error(`Fehler beim Lesen der Datei '${fileName}': ${error.message}`);
    }
}


/**
 * @param {string} fileName - Der Name der Datei (z.B. 'setting.txt').
 * @param {string} newValue - Der neue String, der gespeichert werden soll (z.B. 'de').
 * @returns {Promise<void>} Keine Rückgabe, da die Funktion nur den Speichervorgang durchführt.
 * @throws {Error} Wenn ein Schreibfehler auftritt.
 */
export async function writeSingleString(fileName, newValue) {
    const filePath = path.join(__dirname, fileName);
    
    if (typeof newValue !== 'string' || newValue.trim() === '') {
        throw new Error('Der Wert, der gespeichert werden soll, muss ein nicht leeres String sein.');
    }

    try {
        await fs.writeFile(filePath, newValue, 'utf8');
        console.log(`🎉 Erfolgreich: Der Wert der Datei "${fileName}" wurde auf "${newValue}" gesetzt.`);
    } catch (error) {
        throw new Error(`Fehler beim Speichern der Datei '${fileName}': ${error.message}`);
    }
}