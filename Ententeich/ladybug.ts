namespace L09_Pond {
    export  class Ladybug {
        x: number;
        y: number;
        speedX: number;
        speedY: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
            this.speedX = Math.random() * 2 - 1; // Zufällige Geschwindigkeit in x-Richtung
            this.speedY = Math.random() * 2 - 1; // Zufällige Geschwindigkeit in y-Richtung
        }

        move(): void {
            console.log("ladybug draw")
            // Bewegung der Ladybug durch Anpassung der Position basierend auf der Geschwindigkeit
            this.x += this.speedX;
            this.y += this.speedY;

            // Begrenzung der Bewegung auf das Canvas
            if (this.x < 0 || this.x > crc2.canvas.width) {
                this.speedX *= -1; // Richtung umkehren, wenn Rand erreicht wird
            }
            if (this.y < 0 || this.y > crc2.canvas.height) {
                this.speedY *= -1; // Richtung umkehren, wenn Rand erreicht wird
            }
        }

        draw(): void {
            crc2.save();
            crc2.translate(this.x, this.y);

            // Körper 
            crc2.beginPath();
            crc2.ellipse(0, 0, 15, 12, 0, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "red";
            crc2.fill();

            // Schwarze Punkte auf dem Körper
            crc2.beginPath();
            crc2.arc(-5, -5, 3, 0, 2 * Math.PI);
            crc2.arc(-5, 5, 3, 0, 2 * Math.PI);
            crc2.arc(0, 0, 2, 0, 2 * Math.PI);
            
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();

            // Fühler
            crc2.beginPath();
            crc2.moveTo(-10, -15); // linker Fühler
            crc2.lineTo(-20, -30);
            crc2.strokeStyle = "black";
            crc2.lineWidth = 1;
            crc2.stroke();
            crc2.closePath();

            crc2.beginPath();
            crc2.moveTo(10, -15); // rechter Fühler
            crc2.lineTo(20, -30);
            crc2.strokeStyle = "black";
            crc2.lineWidth = 1;
            crc2.stroke();
            crc2.closePath();

            crc2.restore();
        }
    }
}
