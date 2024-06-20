"use strict";
var L09_Pond;
(function (L09_Pond) {
    class Crumbs {
        x;
        y;
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        draw() {
            L09_Pond.crc2.save();
            L09_Pond.crc2.translate(this.x, this.y);
            L09_Pond.crc2.beginPath();
            L09_Pond.crc2.fillStyle = "red";
            L09_Pond.crc2.arc(0, 0, 10, 0, 2 * Math.PI);
            L09_Pond.crc2.fill();
            L09_Pond.crc2.closePath();
            L09_Pond.crc2.restore();
        }
    }
    L09_Pond.Crumbs = Crumbs;
})(L09_Pond || (L09_Pond = {}));
//# sourceMappingURL=crumbs.js.map