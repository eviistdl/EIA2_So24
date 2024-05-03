"use strict";
// Warte darauf, dass das DOM vollständig geladen ist
document.addEventListener("DOMContentLoaded", function () {
    // Zugriff auf das Canvas-Element
    let canvas = document.querySelector("canvas");
    let crc2 = canvas.getContext("2d");
    // Funktion zum Befüllen des Hintergrunds
    function fillBackground() {
        crc2.fillStyle = "#4E2A20";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    // Funktion zum Zeichnen einer Katze
    function drawCat(x) {
        let random1 = Math.round(Math.random() * 5) / 5;
        let random2 = Math.random();
        let randomRight = 230 + 100 * random1;
        let randomLeft = 170 - 100 * random1;
        let randomHeight = -170 - 200 * random2;
        crc2.save();
        crc2.strokeStyle = "#FFFFFF";
        crc2.translate(x, 400);
        crc2.beginPath();
        crc2.moveTo(200, 0);
        crc2.lineTo(randomRight, 0);
        crc2.lineTo(randomRight, randomHeight);
        crc2.lineTo((randomRight - 30), (randomHeight + 30));
        crc2.lineTo((randomLeft + 30), (randomHeight + 30));
        crc2.lineTo(randomLeft, randomHeight);
        crc2.lineTo(randomLeft, 0);
        crc2.lineTo(200, 0);
        crc2.closePath();
        crc2.stroke();
        crc2.beginPath();
        crc2.ellipse(220, (randomHeight + 60), 5, 5, 0, 365, 0);
        crc2.closePath();
        crc2.stroke();
        crc2.beginPath();
        crc2.ellipse(180, (randomHeight + 60), 5, 5, 0, 365, 0);
        crc2.closePath();
        crc2.stroke();
        // Beende den Pfad und setze die Transformation zurück
        crc2.closePath();
        crc2.restore();
    }
    fillBackground();
    // Zeichne die erste Katze ohne Verschiebung
    //drawCat();
    for (let i = 0; i < 4; i++) {
        const xPosition = i * 250;
        console.log(`Position von Katze ${i + 1}: ${xPosition}`);
        drawCat(xPosition);
    }
});
//# sourceMappingURL=type.js.map