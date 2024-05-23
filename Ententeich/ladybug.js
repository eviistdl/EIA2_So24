"use strict";
var L09_Pond;
(function (L09_Pond) {
    class Ladybug {
        x;
        y;
        speedX;
        speedY;
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
            this.speedX = Math.random() * 2 - 1; // Zufällige Geschwindigkeit in x-Richtung
            this.speedY = Math.random() * 2 - 1; // Zufällige Geschwindigkeit in y-Richtung
        }
        move() {
            console.log("ladybug draw");
            // Bewegung der Ladybug durch Anpassung der Position basierend auf der Geschwindigkeit
            this.x += this.speedX;
            this.y += this.speedY;
            // Begrenzung der Bewegung auf das Canvas
            if (this.x < 0 || this.x > L09_Pond.crc2.canvas.width) {
                this.speedX *= -1; // Richtung umkehren, wenn Rand erreicht wird
            }
            if (this.y < 0 || this.y > L09_Pond.crc2.canvas.height) {
                this.speedY *= -1; // Richtung umkehren, wenn Rand erreicht wird
            }
        }
        draw() {
            L09_Pond.crc2.save();
            L09_Pond.crc2.translate(this.x, this.y);
            // Körper 
            L09_Pond.crc2.beginPath();
            L09_Pond.crc2.ellipse(0, 0, 15, 12, 0, 0, 2 * Math.PI);
            L09_Pond.crc2.closePath();
            L09_Pond.crc2.fillStyle = "red";
            L09_Pond.crc2.fill();
            // Schwarze Punkte auf dem Körper
            L09_Pond.crc2.beginPath();
            L09_Pond.crc2.arc(-5, -5, 3, 0, 2 * Math.PI);
            L09_Pond.crc2.arc(-5, 5, 3, 0, 2 * Math.PI);
            L09_Pond.crc2.arc(0, 0, 2, 0, 2 * Math.PI);
            L09_Pond.crc2.closePath();
            L09_Pond.crc2.fillStyle = "black";
            L09_Pond.crc2.fill();
            // Fühler
            L09_Pond.crc2.beginPath();
            L09_Pond.crc2.moveTo(-10, -15); // linker Fühler
            L09_Pond.crc2.lineTo(-20, -30);
            L09_Pond.crc2.strokeStyle = "black";
            L09_Pond.crc2.lineWidth = 1;
            L09_Pond.crc2.stroke();
            L09_Pond.crc2.closePath();
            L09_Pond.crc2.beginPath();
            L09_Pond.crc2.moveTo(10, -15); // rechter Fühler
            L09_Pond.crc2.lineTo(20, -30);
            L09_Pond.crc2.strokeStyle = "black";
            L09_Pond.crc2.lineWidth = 1;
            L09_Pond.crc2.stroke();
            L09_Pond.crc2.closePath();
            L09_Pond.crc2.restore();
        }
    }
    L09_Pond.Ladybug = Ladybug;
})(L09_Pond || (L09_Pond = {}));
//# sourceMappingURL=ladybug.js.map