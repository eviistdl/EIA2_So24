"use strict";
window.addEventListener("load", handleLoad);
let crc2;
function handleLoad(_event) {
    // Zugriff auf das Canvas-Element
    let canvas = document.querySelector("canvas");
    if (!canvas)
        return;
    crc2 = canvas.getContext("2d");
    fillBackground(); // Nachdem das Canvas geladen wurde, fülle den Hintergrund
}
// Hintergrund einfärben
function fillBackground() {
    console.log("Background");
    // Definiere die grüne Farbe
    let color = "green";
    // Fülle den Hintergrund mit dem Gradienten
    crc2.fillStyle = color;
    crc2.fillRect(0, 0, 600, 600);
}
//# sourceMappingURL=canvas.js.map