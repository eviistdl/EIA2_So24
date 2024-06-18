"use strict";
var L09_Pond;
(function (L09_Pond) {
    class Movable {
        x;
        y;
        direction;
        constructor(_x, _y, _direction) {
            this.x = _x;
            this.y = _y;
            this.direction = _direction;
        }
        draw() {
            console.log("movables draw");
        }
        move() {
            console.log("movables move");
        }
    }
    L09_Pond.Movable = Movable;
})(L09_Pond || (L09_Pond = {}));
//# sourceMappingURL=movable.js.map