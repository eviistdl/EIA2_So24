namespace L09_Pond {
    export class Crumbs {
        x: number;
        y: number;

        public constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        draw(): void {
            crc2.save();

            crc2.translate(this.x, this.y);
            crc2.beginPath();
            crc2.fillStyle="red";
            crc2.arc(0, 0, 10, 0, 2*Math.PI)
            crc2.fill();
            crc2.closePath();

            

            crc2.restore();

        }
    }
}