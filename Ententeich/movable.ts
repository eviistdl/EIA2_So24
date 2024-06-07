namespace L09_Pond {
    
    export class Movable {
        x: number;
        y: number;
        direction: Vector;

        constructor(_x: number, _y: number, _direction: Vector){
            this.x = _x;
            this.y = _y;
            this.direction = new Vector(_x, _y);
        }

        draw(): void{
            console.log ("movables draw")
        }

        move(): void {
            console.log ("movables move")
        }
    }
}
