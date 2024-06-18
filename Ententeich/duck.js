"use strict";
var L09_Pond;
(function (L09_Pond) {
    class Duck extends L09_Pond.Movable {
        state;
        framesCounter = 0;
        isClicked = false;
        constructor(_x, _y, _direction) {
            super(_x, _y, _direction);
            this.state = "duckNormal";
        }
        move() {
            //console.log("duck move");
            this.x += this.direction.x;
            switch (this.state) {
                case "duckHeart":
                    if (this.isClicked) {
                        this.framesCounter++;
                        if (this.framesCounter >= 7) {
                            this.framesCounter = 0;
                            this.isClicked = false;
                            this.state = "duckNormal";
                        }
                    }
                    break;
                default:
                    // Wenn die Ente bei 500 auf x, wechsle die Richtung
                    if (this.x > 500) {
                        this.direction.x = -1;
                    }
                    if (this.x < 270) {
                        this.direction.x = 1;
                    }
            }
        }
        // public boxClicked(x: number, y: number): boolean {
        //     const withinX = x >= this.x - 25 && x <= this.x + 25;
        //     const withinY = y >= this.y - 10 && y <= this.y + 10;
        //     return withinX && withinY;
        // }
        checkHit(_x, _y) {
            console.log("Hit");
            const minX = this.x - 50;
            const maxX = this.x + 50;
            const minY = this.y - 50;
            const maxY = this.y + 50; // Grenzen um die Ente festlegen
            // Überprüfen, ob das Klickereignis innerhalb des Rechtecks liegt
            if (_x > minX && _x < maxX && _y > minY && _y < maxY) {
                this.click(); // Aufruf der click Methode
                return true; // true zurückgeben, wenn Ente getroffen wird
            }
            else {
                return false; // false zurückgeben, wenn Ente nicht getroffen wird
            }
        }
        click() {
            // Zustand zu duckHeart wechseln und Frame-Zähler setzen
            console.log("click");
            //if (!this.is)
            this.state = "duckHeart";
            //this.framesRemaining = 40;
        }
        draw() {
            switch (this.state) {
                case "duckHeart":
                    this.drawHeart();
                    break;
                default:
                    this.drawDuckNormal();
            }
        }
        drawDuckNormal() {
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
        drawHeart() {
            console.log("draw heart aufgerufen");
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
            // Herz zeichnen
            L09_Pond.crc2.save();
            L09_Pond.crc2.translate(this.x, this.y - 30); // Position über der Ente
            L09_Pond.crc2.scale(0.5, 0.5); // Herz verkleinern
            L09_Pond.crc2.beginPath();
            L09_Pond.crc2.moveTo(0, 0);
            L09_Pond.crc2.bezierCurveTo(0, -3, -5, -15, -15, -15);
            L09_Pond.crc2.bezierCurveTo(-25, -15, -25, 0, -25, 0);
            L09_Pond.crc2.bezierCurveTo(-25, 10, -15, 25, 0, 35);
            L09_Pond.crc2.bezierCurveTo(15, 25, 25, 10, 25, 0);
            L09_Pond.crc2.bezierCurveTo(25, 0, 25, -15, 15, -15);
            L09_Pond.crc2.bezierCurveTo(5, -15, 0, -3, 0, 0);
            L09_Pond.crc2.closePath();
            L09_Pond.crc2.fillStyle = "red";
            L09_Pond.crc2.fill();
            L09_Pond.crc2.strokeStyle = "red";
            L09_Pond.crc2.stroke();
            L09_Pond.crc2.restore();
        }
    }
    L09_Pond.Duck = Duck;
})(L09_Pond || (L09_Pond = {}));
//# sourceMappingURL=duck.js.map