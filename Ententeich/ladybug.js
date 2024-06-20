"use strict";
var L09_Pond;
(function (L09_Pond) {
    class Ladybug extends L09_Pond.Movable {
        speedX;
        speedY;
        constructor(_x, _y, _direction, _speedY, _speedX) {
            super(_x, _y, _direction);
            this.speedX = Math.random() * 10 - 1; // Zufällige Geschwindigkeit in x-Richtung
            this.speedY = Math.random() * 8 - 1; // Zufällige Geschwindigkeit in y-Richtung
        }
        move() {
            //console.log("ladybug draw")
            // Bewegung durch anpassung der Geschwindigkeit
            this.x += this.speedX;
            this.y += this.speedY;
            // Begrenzung der Bewegung auf das Canvas
            if (this.x < 0 || this.x > L09_Pond.crc2.canvas.width) {
                this.speedX *= -1; // Richtung umkehren
            }
            if (this.y < 0 || this.y > L09_Pond.crc2.canvas.height) {
                this.speedY *= -1; // Richtung umkehren
            }
        }
        draw() {
            L09_Pond.crc2.save();
            L09_Pond.crc2.translate(this.x, this.y);
            //Fühler
            L09_Pond.crc2.beginPath();
            L09_Pond.crc2.moveTo(-10, -3);
            L09_Pond.crc2.lineTo(-25, 0);
            L09_Pond.crc2.strokeStyle = "black";
            L09_Pond.crc2.lineWidth = 2;
            L09_Pond.crc2.stroke();
            L09_Pond.crc2.closePath();
            L09_Pond.crc2.beginPath();
            L09_Pond.crc2.moveTo(-6, -10);
            L09_Pond.crc2.lineTo(-17, -25);
            L09_Pond.crc2.strokeStyle = "black";
            L09_Pond.crc2.lineWidth = 2;
            L09_Pond.crc2.stroke();
            L09_Pond.crc2.closePath();
            // Körper
            L09_Pond.crc2.beginPath();
            L09_Pond.crc2.ellipse(2, -2, 12, 12, -2, 0, 2 * Math.PI, false);
            L09_Pond.crc2.closePath();
            L09_Pond.crc2.fillStyle = "black";
            L09_Pond.crc2.fill();
            L09_Pond.crc2.beginPath();
            L09_Pond.crc2.ellipse(0, 0, 15, 12, 20, 0, Math.PI, false);
            L09_Pond.crc2.closePath();
            L09_Pond.crc2.fillStyle = "red";
            L09_Pond.crc2.fill();
            L09_Pond.crc2.beginPath();
            L09_Pond.crc2.ellipse(5, -5, 15, 12, 22, 0, Math.PI, false);
            L09_Pond.crc2.closePath();
            L09_Pond.crc2.fillStyle = "red";
            L09_Pond.crc2.fill();
            // Schwarze Punkte auf dem Körper
            L09_Pond.crc2.beginPath();
            L09_Pond.crc2.arc(-7, -2, 3, 0, 2 * Math.PI);
            L09_Pond.crc2.closePath();
            L09_Pond.crc2.fillStyle = "black";
            L09_Pond.crc2.fill();
            L09_Pond.crc2.beginPath();
            L09_Pond.crc2.arc(-3, 8, 3, 0, 2 * Math.PI);
            L09_Pond.crc2.closePath();
            L09_Pond.crc2.fillStyle = "black";
            L09_Pond.crc2.fill();
            L09_Pond.crc2.beginPath();
            L09_Pond.crc2.arc(1, -10, 3, 0, 2 * Math.PI);
            L09_Pond.crc2.closePath();
            L09_Pond.crc2.fillStyle = "black";
            L09_Pond.crc2.fill();
            L09_Pond.crc2.beginPath();
            L09_Pond.crc2.arc(10, -9, 3, 0, 2 * Math.PI);
            L09_Pond.crc2.closePath();
            L09_Pond.crc2.fillStyle = "black";
            L09_Pond.crc2.fill();
            //Fühler
            L09_Pond.crc2.beginPath();
            L09_Pond.crc2.moveTo(-10, -3);
            L09_Pond.crc2.lineTo(-25, 0);
            L09_Pond.crc2.strokeStyle = "black";
            L09_Pond.crc2.lineWidth = 2;
            L09_Pond.crc2.stroke();
            L09_Pond.crc2.closePath();
            L09_Pond.crc2.restore();
        }
    }
    L09_Pond.Ladybug = Ladybug;
})(L09_Pond || (L09_Pond = {}));
//# sourceMappingURL=ladybug.js.map