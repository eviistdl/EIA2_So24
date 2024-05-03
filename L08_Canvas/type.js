"use strict";
// Warte darauf, dass das DOM vollständig geladen ist
document.addEventListener("DOMContentLoaded", function () {
    // Zugriff auf das Canvas-Element
    let canvas = document.querySelector("canvas");
    let crc2 = canvas.getContext("2d");
    function fillBackround() {
        crc2.fillStyle = "#4E2A20";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    fillBackround();
    function drawCat() {
        let random1 = Math.round(Math.random() * 5) / 5;
        let random2 = Math.random();
        let randomRight = 330 + 100 * random1;
        let randomLeft = 270 - 100 * random1;
        let randomHeight = -170 - 100 * random2;
        crc2.strokeStyle = "#FFFFFF";
        crc2.translate(300, 400);
        crc2.beginPath();
        crc2.moveTo(300, 0);
        crc2.lineTo(randomRight, 0);
        crc2.lineTo(randomRight, randomHeight);
        crc2.lineTo((randomRight - 30), (randomHeight + 30));
        crc2.lineTo((randomLeft + 30), (randomHeight + 30));
        crc2.lineTo(randomLeft, randomHeight);
        crc2.lineTo(randomLeft, 0);
        crc2.lineTo(300, 0);
        crc2.closePath();
        crc2.stroke();
        crc2.beginPath();
        crc2.ellipse(320, (randomHeight + 60), 5, 5, 0, 365, 0);
        crc2.closePath();
        crc2.stroke();
        crc2.beginPath();
        crc2.ellipse(280, (randomHeight + 60), 5, 5, 0, 365, 0);
        crc2.closePath();
        crc2.stroke();
    }
    //drawCat(); 
    // Schleife, die drawCat fünfmal ausführt
    for (let i = 0; i < 5; i++) {
        // Zufällige Position innerhalb des definierten Bereichs
        let randomX = Math.random() * (700 - 100) + 100; // Zufällige x-Koordinate zwischen 100 und 700
        let randomY = Math.random() * (800 - 300) + 300; // Zufällige y-Koordinate zwischen 300 und 800
        // Setze die Translation auf die zufällige Position
        crc2.translate(randomX, randomY);
        // Zeichne die Katze
        drawCat();
        // Setze die Translation zurück
        crc2.translate(-randomX, -randomY);
    }
});
//# sourceMappingURL=type.js.map