namespace L09_Pond {
    export class Cloud extends Movable{

        public constructor(_x: number, _y: number, _direction: Vector) {
            super(_x, _y, _direction);
        }

        public move(): void {
            //console.log("cloud move");
            this.x += 1;

            // Wenn die Wolke aus dem Bild fliegt, setze sie wieder an den Anfang
            if (this.x > crc2.canvas.width) {
                this.x = -170; // Setze die Wolke außerhalb des linken Rands des Canvas
            }
        }

        public draw(): void {
            crc2.save();
            crc2.translate(this.x, this.y);

            // Wolke zeichnen
            crc2.beginPath();
            crc2.moveTo(150, 0);
            crc2.lineTo(0, 0);
            crc2.ellipse(50, 0, 40, 30, 0, Math.PI, 0, false);
            crc2.ellipse(100, 0, 60, 60, 0, Math.PI, 0, false);
            crc2.ellipse(170, 0, 50, 30, 0, Math.PI, 0, false);
            crc2.closePath();

            let cloudColor: string = "white";
            crc2.fillStyle = cloudColor;
            crc2.fill();

            crc2.restore();
        }
    }
}
