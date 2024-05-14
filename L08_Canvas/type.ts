document.addEventListener("DOMContentLoaded", function () {

    // Zugriff auf das Canvas-Element
    let crc2: CanvasRenderingContext2D;


// Hintergrund einfärben
function fillBackground(): void {
    console.log("Background");

    // Generiere zufällige Farben
    let color1: string = getRandomColorInRange();
    let color2: string = getRandomColorInRange();

    // Erstelle den Gradienten mit den zufälligen Farben
    let gradient: CanvasGradient = crc2.createLinearGradient(0, 10, 1200, 10);
    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);

    // Fülle den Hintergrund mit dem Gradienten
    crc2.fillStyle = gradient;
    crc2.fillRect(0, 0, 1200, 600);
}


// Funktion zum Generieren einer zufälligen Farbe
function getRandomColorInRange(): string {
    // Generiere zufällige RGB-Werte im Bereich von 0 bis 128
    let r: number = Math.floor(Math.random() * 129);
    let g: number = Math.floor(Math.random() * 129);
    let b: number = Math.floor(Math.random() * 89);

    // Konvertiere die RGB-Werte in einen Hexadezimalwert
    let hex: string = "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    return hex;
}

// Von RGB in einen Hexadezimalwert
function componentToHex(c: number): string {
    var hex: string = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}


function drawCat(x: number): void {
    let random1: number = Math.round(Math.random() * 5) / 5;
    let random2: number = Math.random();
    
    let randomRight: number = 230 + 100 * random1;
    let randomLeft: number = 170 - 100 * random1;
    let randomHeight: number = -170 - 200 * random2;

    crc2.save();
    
    // Wähle eine zufällige Farbe aus den angegebenen Optionen
    let randomColorIndex: number = Math.floor(Math.random() * 4);
    let randomColor: string = getRandomColor(randomColorIndex);

    // Setze die Farbe für den Stroke und Fill Style
    crc2.strokeStyle = "black";
    crc2.fillStyle = randomColor;
    
    // Zeichne die Katze
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
    crc2.fill();
    
    crc2.beginPath();
    crc2.ellipse(220, (randomHeight + 60), (3+random2*10), (3+random2*10), 0, 365, 0);
    crc2.closePath();
    crc2.stroke();
    
    crc2.beginPath();
    crc2.ellipse(180, (randomHeight + 60), (3+random2*10), (3+random2*10), 0, 365, 0);
    crc2.closePath();
    crc2.stroke();

    // Beende den Pfad und setze die Transformation zurück
    crc2.closePath();
    crc2.restore();
}

// Funktion zum Erstellen eines zufälligen Farbindex
function getRandomColor(index: number): string {
    switch (index) {
        case 0:
            return "#F79A42"; // Erste Farboption
        case 1:
            return "#F6B67B"; // Zweite Farboption
        case 2:
            return "#F7D2AF"; // Dritte Farboption
        case 3:
            return "#F9EFE6"; // Vierte Farboption
        default:
            return "#F79A42"; // Standardfarbe, falls etwas schief geht
    }
}


fillBackground();

for (let i = 0; i < 4; i++) {
    const xPosition = i * 250;
    drawCat(xPosition); 
}

});
