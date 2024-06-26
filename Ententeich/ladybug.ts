namespace L09_Pond {
    export  class Ladybug extends Movable {
        speedX: number;
        speedY: number;

        public constructor(_x: number, _y: number, _direction: Vector, _speedY:number, _speedX:number) {
            super(_x, _y, _direction);
            this.speedX = Math.random() * 5 - 1; // Zufällige Geschwindigkeit in x-Richtung
            this.speedY = Math.random() * 5 - 1; // Zufällige Geschwindigkeit in y-Richtung
        }

        public move(): void {
            //console.log("ladybug draw")
            // Bewegung durch anpassung der Geschwindigkeit
            this.x += this.speedX;
            this.y += this.speedY;

            // Begrenzung der Bewegung auf das Canvas
            if (this.x < 0 || this.x > crc2.canvas.width) {
                this.speedX *= -1; // Richtung umkehren
            }
            if (this.y < 0 || this.y > crc2.canvas.height) {
                this.speedY *= -1; // Richtung umkehren
            }
        }

        public draw(): void {
            crc2.save();
            crc2.translate(this.x, this.y);

            //Fühler
            crc2.beginPath();
            crc2.moveTo(-10, -3);
            crc2.lineTo(-25, 0); 
            crc2.strokeStyle = "black";
            crc2.lineWidth = 2;
            crc2.stroke();
            crc2.closePath();

            crc2.beginPath();
            crc2.moveTo(-6, -10);
            crc2.lineTo(-17, -25); 
            crc2.strokeStyle = "black";
            crc2.lineWidth = 2;
            crc2.stroke();
            crc2.closePath();

            // Körper
            crc2.beginPath();
            crc2.ellipse(2, -2, 12, 12, -2, 0, 2* Math.PI, false);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill(); 
            crc2.beginPath();
            crc2.ellipse(0, 0, 15, 12, 20, 0, Math.PI, false);
            crc2.closePath();
            crc2.fillStyle = "red";
            crc2.fill();

            crc2.beginPath();
            crc2.ellipse(5, -5, 15, 12, 22, 0, Math.PI, false);
            crc2.closePath();
            crc2.fillStyle = "red";
            crc2.fill();

            

            // Schwarze Punkte auf dem Körper
            crc2.beginPath();
            crc2.arc(-7, -2, 3, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(-3, 8, 3, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(1, -10, 3, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(10, -9, 3, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();

            //Fühler
            crc2.beginPath();
            crc2.moveTo(-10, -3);
            crc2.lineTo(-25, 0); 
            crc2.strokeStyle = "black";
            crc2.lineWidth = 2;
            crc2.stroke();
            crc2.closePath();

            crc2.restore();
        }
    }
}
