"use strict";
var L09_Pond;
(function (L09_Pond) {
    class Flamingo extends L09_Pond.Movable {
        state;
        baseY;
        angle;
        targetX;
        targetY;
        framesCounter = 0;
        previousPosition;
        targetPosition;
        // private positionBeforeX: number;
        // private positionBeforeY: number;
        constructor(_x, _y, _direction) {
            super(_x, _y, _direction);
            this.baseY = _y; // baseline definieren
            this.y = _y;
            this.angle = Math.random() * 2 * Math.PI;
            this.previousPosition = null;
            this.targetPosition = null;
            // this.positionBeforeX = _x;
            // this.positionBeforeY = _y;
        }
        move() {
            // Speichern der aktuellen Position
            // this.positionBeforeX = this.x;
            // this.positionBeforeY = this.y;
            if (this.targetX !== undefined && this.targetY !== undefined) {
                let dx = this.targetX - this.x;
                let dy = this.targetY - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance > 1) { // Schwelle, um zu entscheiden, ob Bewegung notwendig ist
                    this.x += dx / distance;
                    this.y += dy / distance;
                }
                else {
                    // Zielposition erreicht
                    this.targetX = undefined;
                    this.targetY = undefined;
                    this.state = "flamingoEat"; // Status auf "Essen" setzen
                }
            }
            else {
                // Normale Bewegung
                this.angle += 0.1;
                // Höhe auf die base addieren, Amplitude = 15
                this.y = this.baseY + Math.sin(this.angle) * 15;
            }
            if (this.state === "flamingoEat") {
                this.framesCounter++;
                if (this.framesCounter >= 70) {
                    this.framesCounter = 0;
                    this.state = "flamingoNormal";
                }
            }
        }
        moveToCrumb(crumbX, crumbY) {
            this.targetX = crumbX;
            this.targetY = crumbY;
        }
        update() {
            if (this.state === "flamingoEat" && this.targetPosition) {
                // Flamingo bewegen, solange er sich in "flamingoEat" Zustand befindet
                this.x = this.targetPosition.x;
                this.y = this.targetPosition.y;
                this.framesCounter++; // Frames-Zähler erhöhen
                if (this.framesCounter >= 70) { // Wenn 70 Frames vergangen sind
                    this.state = "flamingoNormal"; // Zustand zurück auf normal ändern
                    this.framesCounter = 0; // Frames-Zähler zurücksetzen für den nächsten Einsatz
                    if (this.previousPosition) {
                        // Zur vorherigen Position zurückkehren
                        this.x = this.previousPosition.x;
                        this.y = this.previousPosition.y;
                    }
                    this.previousPosition = null; // Vorherige Position leeren
                    this.targetPosition = null; // Zielposition leeren
                }
            }
        }
        setTarget(_x, _y) {
            // this.positionBeforeX = this.x; // Speichern der aktuellen Position
            // this.positionBeforeY = this.y;
            this.targetX = _x - 20; // Geklickte position setzen
            this.targetY = _y - 50;
            this.state = "flamingoNormal";
        }
        draw() {
            switch (this.state) {
                case "flamingoEat":
                    this.flamingoEat();
                    break;
                default:
                    this.flamingoNormal();
            }
        }
        flamingoNormal() {
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
        flamingoEat() {
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
            L09_Pond.crc2.lineTo(18, 30);
            L09_Pond.crc2.strokeStyle = "#EE5A8D";
            L09_Pond.crc2.lineWidth = 4;
            L09_Pond.crc2.stroke();
            // Kopf 
            L09_Pond.crc2.beginPath();
            L09_Pond.crc2.arc(20, 40, 10, 0, 2 * Math.PI); // Kopf
            L09_Pond.crc2.closePath();
            L09_Pond.crc2.fillStyle = "#EE5A8D";
            L09_Pond.crc2.fill();
            // Schnabel
            L09_Pond.crc2.beginPath();
            L09_Pond.crc2.moveTo(28, 45);
            L09_Pond.crc2.lineTo(40, 36);
            L09_Pond.crc2.lineTo(30, 35);
            L09_Pond.crc2.closePath();
            L09_Pond.crc2.fillStyle = "#F99948";
            L09_Pond.crc2.fill();
            // Auge
            L09_Pond.crc2.beginPath();
            L09_Pond.crc2.arc(24, 40, 2, 0, 2 * Math.PI);
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