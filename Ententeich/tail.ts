namespace L09_Pond {
    export class Tail {
        x: number;
        y: number;
        direction: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
            this.direction = 1; 
        }

        move(): void {
            console.log("tail move");
            this.x += 1 * this.direction; //Richtung bestimmen

            // Definition wann Richtungswechsel
            if (this.x > 430) {
                this.direction = -1;
            }
            if (this.x < 350) {
                this.direction = 1;
            }
        }

        draw(): void {
            console.log("tail draw")
            crc2.save();
    
            crc2.translate(this.x, this.y);
        
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
