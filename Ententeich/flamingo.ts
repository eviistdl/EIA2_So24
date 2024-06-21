namespace L09_Pond {
    export class Flamingo extends Movable {
        public state: "flamingoNormal" | "flamingoEat";
        baseY: number;
        angle: number;
        private targetX?: number;
        private targetY?: number;
        private positionBeforeX: number;
        private positionBeforeY: number;

        public constructor(_x: number, _y: number, _direction: Vector) {
            super(_x, _y, _direction);
            this.baseY = _y; // baseline definieren
            this.y = _y;
            this.angle = Math.random() * 2 * Math.PI;
            this.positionBeforeX = _x;
            this.positionBeforeY = _y;
        }

        public move(): void {
            // Speichern der aktuellen Position
            this.positionBeforeX = this.x;
            this.positionBeforeY = this.y;

            if (this.targetX !== undefined && this.targetY !== undefined) {
                let dx = this.targetX - this.x;
                let dy = this.targetY - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance > 1) { // Schwelle, um zu entscheiden, ob Bewegung notwendig ist
                    this.x += dx / distance;
                    this.y += dy / distance;
                } else {
                    // Zielposition erreicht
                    this.targetX = undefined;
                    this.targetY = undefined;
                    this.state = "flamingoEat"; // Status auf "Essen" setzen
                }
            } else {
                // Normale Bewegung
                this.angle += 0.1;
                // Höhe auf die base addieren, Amplitude = 15
                this.y = this.baseY + Math.sin(this.angle) * 15;
            }
        }

        public moveToCrumb(crumbX: number, crumbY: number): void {
            this.targetX = crumbX;
            this.targetY = crumbY;
        }

        public setTarget(_x: number, _y: number): void {
            this.positionBeforeX = this.x; // Speichern der aktuellen Position
            this.positionBeforeY = this.y;
            this.targetX = _x; // Geklickte position setzen
            this.targetY = _y;
            this.state = "flamingoEat"; 
          }

        public draw(): void {
            switch (this.state) {
                case "flamingoEat":
                    this.flamingoEat();
                    break;
                default:
                    this.flamingoNormal();
            }
        }

        public flamingoNormal(): void {
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

        public flamingoEat(): void {
            crc2.save();
            crc2.translate(this.x, this.y);
            // Körper
            crc2.beginPath();
            crc2.ellipse(0, 0, 25, 12, 0, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "red";
            crc2.fill();
            // Hals
            crc2.beginPath();
            crc2.moveTo(20, 0);
            crc2.lineTo(18, -30); 
            crc2.strokeStyle = "red";
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
