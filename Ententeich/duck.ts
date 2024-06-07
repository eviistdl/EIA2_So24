namespace L09_Pond {

    export class Duck extends Movable {
        constructor(_x: number, _y: number, _direction: Vector) {
            super(_x, _y, _direction);
        }

    move(): void {
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

    draw(): void {
        //console.log("duck draw");
        crc2.save();

        crc2.translate(this.x, this.y);
        if (this.direction.x === -1) {
            crc2.scale(-1, 1); // Horizontal spiegeln
        }

        // Körper
        crc2.beginPath();
        crc2.ellipse(0, 0, 25, 12, 0, 0, 2 * Math.PI);
        crc2.closePath();

        crc2.fillStyle = "yellow";
        crc2.fill();
        crc2.strokeStyle = "yellow";
        crc2.stroke();

        // Kopf
        crc2.beginPath();
        crc2.arc(20, -20, 10, 0, 2 * Math.PI); // Kopf
        crc2.closePath();
        crc2.fillStyle = "yellow";
        crc2.fill();

        // Schnabel
        crc2.beginPath();
        crc2.moveTo(30, -24);
        crc2.lineTo(28, -12);
        crc2.lineTo(35, -15);
        crc2.closePath();
        crc2.fillStyle = "orange";
        crc2.fill();
        crc2.strokeStyle = "brown";
        crc2.stroke();

        // Auge
        crc2.beginPath();
        crc2.arc(24, -20, 2, 0, 2 * Math.PI); // Auge
        crc2.closePath();
        crc2.fillStyle = "black";
        crc2.fill();

        // Flügel der Ente
        crc2.beginPath();
        crc2.moveTo(-10, 0);
        crc2.quadraticCurveTo(5, -20, 15, 5);
        crc2.quadraticCurveTo(-10, 10, 0, 0);
        crc2.closePath();
        crc2.fillStyle = "yellow";
        crc2.fill();
        crc2.strokeStyle = "brown";
        crc2.stroke();

        crc2.restore();
    }
}
}

