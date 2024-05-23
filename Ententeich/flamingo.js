"use strict";
var L09_Pond;
(function (L09_Pond) {
    class Flamingo {
        x;
        y;
        direction;
        baseY;
        angle;
        constructor(_x, _y) {
            this.x = _x;
            this.baseY = _y; // baseline definieren
            this.y = _y;
            this.angle = Math.random() * 2 * Math.PI;
        }
        move() {
            // angle für bewegung
            this.angle += 0.1;
            // Höhe auf die base addieren, Amplitude = 15
            this.y = this.baseY + Math.sin(this.angle) * 15;
        }
        draw() {
            L09_Pond.crc2.save();
            L09_Pond.crc2.translate(this.x, this.y);
            // Körper
            L09_Pond.crc2.beginPath();
            L09_Pond.crc2.ellipse(0, 0, 25, 12, 0, 0, 2 * Math.PI);
            L09_Pond.crc2.closePath();
            L09_Pond.crc2.fillStyle = "#EE5A8D";
            L09_Pond.crc2.fill();
            // Hals
            L09_Pond.crc2.beginPath();
            L09_Pond.crc2.moveTo(20, 0);
            L09_Pond.crc2.lineTo(18, -30);
            L09_Pond.crc2.strokeStyle = "#EE5A8D";
            L09_Pond.crc2.lineWidth = 4;
            L09_Pond.crc2.stroke();
            // Kopf 
            L09_Pond.crc2.beginPath();
            L09_Pond.crc2.arc(20, -40, 10, 0, 2 * Math.PI); // Kopf
            L09_Pond.crc2.closePath();
            L09_Pond.crc2.fillStyle = "#EE5A8D";
            L09_Pond.crc2.fill();
            // Schnabel
            L09_Pond.crc2.beginPath();
            L09_Pond.crc2.moveTo(28, -45);
            L09_Pond.crc2.lineTo(30, -36);
            L09_Pond.crc2.lineTo(40, -35);
            L09_Pond.crc2.closePath();
            L09_Pond.crc2.fillStyle = "#F99948";
            L09_Pond.crc2.fill();
            // Auge
            L09_Pond.crc2.beginPath();
            L09_Pond.crc2.arc(24, -40, 2, 0, 2 * Math.PI);
            L09_Pond.crc2.closePath();
            L09_Pond.crc2.fillStyle = "black";
            L09_Pond.crc2.fill();
            // Beine 
            L09_Pond.crc2.beginPath();
            L09_Pond.crc2.moveTo(-5, 12);
            L09_Pond.crc2.lineTo(-5, 40);
            L09_Pond.crc2.strokeStyle = "black";
            L09_Pond.crc2.lineWidth = 2;
            L09_Pond.crc2.stroke();
            L09_Pond.crc2.beginPath();
            L09_Pond.crc2.moveTo(5, 12);
            L09_Pond.crc2.lineTo(5, 25);
            L09_Pond.crc2.lineTo(0, 20);
            L09_Pond.crc2.strokeStyle = "black";
            L09_Pond.crc2.lineWidth = 2;
            L09_Pond.crc2.stroke();
            L09_Pond.crc2.restore();
        }
    }
    L09_Pond.Flamingo = Flamingo;
})(L09_Pond || (L09_Pond = {}));
//# sourceMappingURL=flamingo.js.map