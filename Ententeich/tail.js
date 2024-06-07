"use strict";
var L09_Pond;
(function (L09_Pond) {
    class Tail extends L09_Pond.Movable {
        constructor(_x, _y, _direction) {
            super(_x, _y, _direction);
        }
        move() {
            console.log("tail move");
            this.x += 1 * this.direction.x; //Richtung bestimmen
            // Definition wann Richtungswechsel
            if (this.x > 430) {
                this.direction.x = -1;
            }
            if (this.x < 350) {
                this.direction.x = 1;
            }
        }
        draw() {
            console.log("tail draw");
            L09_Pond.crc2.save();
            L09_Pond.crc2.translate(this.x, this.y);
            if (this.direction.x === -1) {
                L09_Pond.crc2.scale(-1, 1); // Horizontal spiegeln
            }
            // Dreieck zeichnen
            L09_Pond.crc2.beginPath();
            L09_Pond.crc2.moveTo(0, 0);
            L09_Pond.crc2.lineTo(20, 0);
            L09_Pond.crc2.arcTo(4, -20, 0, 0, 3);
            L09_Pond.crc2.closePath();
            // Füllfarbe und Randfarbe setzen
            L09_Pond.crc2.fillStyle = "yellow";
            L09_Pond.crc2.strokeStyle = "brown";
            // Dreieck füllen und zeichnen
            L09_Pond.crc2.fill();
            L09_Pond.crc2.stroke();
            L09_Pond.crc2.restore();
        }
    }
    L09_Pond.Tail = Tail;
})(L09_Pond || (L09_Pond = {}));
//# sourceMappingURL=tail.js.map