namespace L09_Pond {
    export class Tail extends Movable{

        constructor(_x: number, _y: number, _direction: Vector) {
            super(_x, _y, _direction);
        }

        move(): void {
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

        draw(): void {
            console.log("tail draw")
            crc2.save();
    
            crc2.translate(this.x, this.y);
            if (this.direction.x === -1) {
                crc2.scale(-1, 1); // Horizontal spiegeln
            }
            // Dreieck zeichnen
            crc2.beginPath();
            crc2.moveTo(0, 0); 
            crc2.lineTo(20, 0);
            crc2.arcTo(4, -20, 0, 0, 3); 
            crc2.closePath(); 
        
            // Füllfarbe und Randfarbe setzen
            crc2.fillStyle = "yellow";
            crc2.strokeStyle = "brown";
        
            // Dreieck füllen und zeichnen
            crc2.fill();
            crc2.stroke();
        
            crc2.restore();
        }
    }
}