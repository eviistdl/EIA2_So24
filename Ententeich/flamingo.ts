namespace L09_Pond {
    export class Flamingo {
        x: number;
        y: number;
        direction: number;
        baseY: number;
        angle: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.baseY = _y; // baseline definieren
            this.y = _y;
            this.angle = Math.random() * 2 * Math.PI; 
        }

        move(): void {
            // angle für bewegung
            this.angle += 0.1;

            // Höhe auf die base addieren, Amplitude = 15
            this.y = this.baseY + Math.sin(this.angle) * 15; 
        }

        draw(): void {
            crc2.save();
            crc2.translate(this.x, this.y);

            // Körper
            crc2.beginPath();
            crc2.ellipse(0, 0, 25, 12, 0, 0, 2 * Math.PI);
            crc2.closePath();

            crc2.fillStyle = "#EE5A8D";
            crc2.fill();

            // Hals
            crc2.beginPath();
            crc2.moveTo(20, 0);
            crc2.lineTo(18, -30); 
            crc2.strokeStyle = "#EE5A8D";
            crc2.lineWidth = 4;
            crc2.stroke();

            // Kopf 
            crc2.beginPath();
            crc2.arc(20, -40, 10, 0, 2 * Math.PI); // Kopf
            crc2.closePath();
            crc2.fillStyle = "#EE5A8D";
            crc2.fill();

            // Schnabel
            crc2.beginPath();
            crc2.moveTo(28, -45);
            crc2.lineTo(30, -36);
            crc2.lineTo(40, -35);
            crc2.closePath();
            crc2.fillStyle = "#F99948";
            crc2.fill();

            // Auge
            crc2.beginPath();
            crc2.arc(24, -40, 2, 0, 2 * Math.PI); 
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();

            // Beine 
            crc2.beginPath();
            crc2.moveTo(-5, 12);
            crc2.lineTo(-5, 40); 
            crc2.strokeStyle = "black";
            crc2.lineWidth = 2;
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(5, 12);
            crc2.lineTo(5, 25);
            crc2.lineTo(0, 20);
            crc2.strokeStyle = "black";
            crc2.lineWidth = 2;
            crc2.stroke();

            crc2.restore();
        }
    }
}
