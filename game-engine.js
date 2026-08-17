// game-engine.js
import MenuHandler from "./menu-handler.js";

async function startGame() {
    // 1. Instanzierung des Handlers
    const menuManager = new MenuHandler();
    
    // Definition der Menüoptionen (Ihr Array)
    const gameOptions = ['Start', 'Steuerung', 'Speichern & Beenden'];

    console.log("--- START DES GAMES ---");
    console.log("Bitte wählen Sie eine Hauptfunktion:");

    // 2. Aufruf und Warten auf das Ergebnis
    let selection = await menuManager.runMenu(gameOptions);

    if (selection) {
        console.log(`\n✅ Der Spieler hat die Option "${selection}" ausgewählt!`);
        
        // Hier beginnt nun der Game Flow basierend auf 'selection'
        switch (selection) {
            case 'Start':
                console.log("Das Spiel wird gestartet...");
                break;
            case 'Steuerung':
                console.log("Hier werden die Tastaturbelegungen angezeigt.");
                break;
            case 'Speichern & Beenden':
                console.log("Spiel gespeichert und geschlossen.");
                break;
        }

    } else {
        // Das Ergebnis war null, weil der Nutzer abgebrochen hat
        console.log("\n❌ Game over oder Menü abgebrochen.");
    }
}

startGame(); // Wir rufen die Hauptfunktion aus. 
