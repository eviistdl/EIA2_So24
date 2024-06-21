namespace L09_Pond {
    export class Crumbs {
        x: number;
        y: number;
        crumbX: number
        crumbY: number;

        public constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        public checkLocation(_clickX: number, _clickY: number): boolean {
            // Überprüfen, ob der Klick im Bereich der Krümel liegt
            const minX = 10;
            const maxX = 270;
            const minY = 300;
            const maxY = 500;

            if (_clickX > minX && _clickX < maxX && _clickY > minY && _clickY < maxY) {
                return (_clickX >= 10 && _clickX <= 270 && _clickY >= 300 && _clickY <= 500);
                // Klick befindet sich im Bereich
            } else {
                return false; // Klick befindet sich nicht im Bereich
            }
        }

        // public deleteCrumb(): void {
        //     // Find the index of this crumb in the global crumbs array
        //     let index = crumbs.indexOf(this);
        //     if (index !== -1) {
        //         crumbs.splice(index, 1); // Remove crumb from array
        //     }
        // }

        public getPosition(): { x: number, y: number } {
            return { x: this.x, y: this.y };
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