namespace L09_Pond {

    export class Duck extends Movable {
        private state: "duckNormal" | "duckHeart";
        private framesCounter: number = 0;
        private isClicked: boolean = false;
    
        
    public constructor(_x: number, _y: number, _direction: Vector) {
        super(_x, _y, _direction);
        this.state = "duckNormal";
    }

    public move(): void {
        //console.log("duck move");
        this.x += this.direction.x;

        switch(this.state) {
            case "duckHeart":
                if (this.isClicked){
                this.framesCounter++
                if (this.framesCounter>= 7){
                    this.framesCounter = 0;
                    this.isClicked = false;
                    this.state = "duckNormal";
                }}   
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

    public checkHit(_x: number, _y: number): boolean {
        console.log("Hit")
        const minX = this.x - 50;
        const maxX = this.x + 50;
        const minY = this.y - 50;
        const maxY = this.y + 50; // Grenzen um die Ente festlegen
        // Überprüfen, ob das Klickereignis innerhalb des Rechtecks liegt
        if (_x > minX && _x < maxX && _y > minY && _y < maxY) {
            this.click(); // Aufruf der click Methode
            return true; // true zurückgeben, wenn Ente getroffen wird
        } else {
            return false; // false zurückgeben, wenn Ente nicht getroffen wird
        }
    }

      public click(): void {
        // Zustand zu duckHeart wechseln und Frame-Zähler setzen
        console.log("click")
        //if (!this.is)
        this.state = "duckHeart";
        //this.framesRemaining = 40;
    }

    public draw(): void {
        switch (this.state) {
            case "duckHeart":
                this.drawHeart();
                break;
            default:
                this.drawDuckNormal();
            }
        }


    public drawDuckNormal(): void {
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

    private drawHeart(): void {
        console.log("draw heart aufgerufen")
        crc2.save()
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

        // Herz zeichnen
        crc2.save();
        crc2.translate(this.x, this.y - 30); // Position über der Ente
        crc2.scale(0.5, 0.5); // Herz verkleinern

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.bezierCurveTo(0, -3, -5, -15, -15, -15);
        crc2.bezierCurveTo(-25, -15, -25, 0, -25, 0);
        crc2.bezierCurveTo(-25, 10, -15, 25, 0, 35);
        crc2.bezierCurveTo(15, 25, 25, 10, 25, 0);
        crc2.bezierCurveTo(25, 0, 25, -15, 15, -15);
        crc2.bezierCurveTo(5, -15, 0, -3, 0, 0);
        crc2.closePath();

        crc2.fillStyle = "red";
        crc2.fill();
        crc2.strokeStyle = "red";
        crc2.stroke();

        crc2.restore();
    }
} 
}

