"use strict";
// Warte darauf, dass das DOM vollständig geladen ist
document.addEventListener("DOMContentLoaded", function () {
    // Zugriff auf das Canvas-Element
    let canvas = document.querySelector("#myCanvas");
    // Überprüfung, ob das Canvas-Element gefunden wurde
    if (canvas) {
        // Zugriff auf den Rendering-Kontext
        let crc2 = canvas.getContext("2d");
        // Überprüfung, ob der Rendering-Kontext gefunden wurde
        if (crc2) {
            // Hier hast du Zugriff auf die Zeichenbefehle des 2D-Rendering-Kontexts
            // Beispielsweise:
            crc2.fillStyle = "#FF0000";
            crc2.fillRect(200, 300, canvas.width, canvas.height);
            // Hier kannst du weitere Zeichenbefehle aufrufen
            // crc2. <- Hier siehst du die verfügbaren Methoden und Eigenschaften des Rendering-Kontexts
        }
        else {
            console.error("Konnte den Rendering-Kontext nicht erhalten.");
        }
    }
    else {
        console.error("Canvas-Element nicht gefunden.");
    }
});
//# sourceMappingURL=type.js.map