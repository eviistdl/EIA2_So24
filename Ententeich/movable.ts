namespace L09_Pond {
    
    export abstract class Movable {
        x: number;
        y: number;
        direction: Vector;

        public constructor(_x: number, _y: number, _direction: Vector){
            this.x = _x;
            this.y = _y;
            this.direction = _direction;
        }

        public draw(): void{
            console.log ("movables draw")
        }

        public move(): void {
            console.log ("movables move")
        }
    }
}
