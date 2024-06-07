"use strict";
var L09_Pond;
(function (L09_Pond) {
    class Duck extends L09_Pond.Movable {
        constructor(_x, _y, _direction) {
            super(_x, _y, _direction);
        }
        move() {
            //console.log("duck move");
            this.x += 1 * this.direction.x;
            // Wenn die Ente bei 500 auf x, wechsle die Richtung
            if (this.x > 500) {
                this.direction.x = -1;
            }
            if (this.x < 270) {
                this.direction.x = 1;
            }
        }
        draw() {
            //console.log("duck draw");
            L09_Pond.crc2.save();
            L09_Pond.crc2.translate(this.x, this.y);
            if (this.direction.x === -1) {
                L09_Pond.crc2.scale(-1, 1); // Horizontal spiegeln
            }
            // Körper
            L09_Pond.crc2.beginPath();
            L09_Pond.crc2.ellipse(0, 0, 25, 12, 0, 0, 2 * Math.PI);
            L09_Pond.crc2.closePath();
            L09_Pond.crc2.fillStyle = "yellow";
            L09_Pond.crc2.fill();
            L09_Pond.crc2.strokeStyle = "yellow";
            L09_Pond.crc2.stroke();
            // Kopf
            L09_Pond.crc2.beginPath();
            L09_Pond.crc2.arc(20, -20, 10, 0, 2 * Math.PI); // Kopf
            L09_Pond.crc2.closePath();
            L09_Pond.crc2.fillStyle = "yellow";
            L09_Pond.crc2.fill();
            // Schnabel
            L09_Pond.crc2.beginPath();
            L09_Pond.crc2.moveTo(30, -24);
            L09_Pond.crc2.lineTo(28, -12);
            L09_Pond.crc2.lineTo(35, -15);
            L09_Pond.crc2.closePath();
            L09_Pond.crc2.fillStyle = "orange";
            L09_Pond.crc2.fill();
            L09_Pond.crc2.strokeStyle = "brown";
            L09_Pond.crc2.stroke();
            // Auge
            L09_Pond.crc2.beginPath();
            L09_Pond.crc2.arc(24, -20, 2, 0, 2 * Math.PI); // Auge
            L09_Pond.crc2.closePath();
            L09_Pond.crc2.fillStyle = "black";
            L09_Pond.crc2.fill();
            // Flügel der Ente
            L09_Pond.crc2.beginPath();
            L09_Pond.crc2.moveTo(-10, 0);
            L09_Pond.crc2.quadraticCurveTo(5, -20, 15, 5);
            L09_Pond.crc2.quadraticCurveTo(-10, 10, 0, 0);
            L09_Pond.crc2.closePath();
            L09_Pond.crc2.fillStyle = "yellow";
            L09_Pond.crc2.fill();
            L09_Pond.crc2.strokeStyle = "brown";
            L09_Pond.crc2.stroke();
            L09_Pond.crc2.restore();
        }
    }
    L09_Pond.Duck = Duck;
})(L09_Pond || (L09_Pond = {}));
//# sourceMappingURL=duck.js.map