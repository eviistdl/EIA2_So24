"use strict";
var Boxes;
(function (Boxes) {
    debugger;
    let n = 5;
    let color;
    let x = 0;
    let y = 0;
    for (let i = 0; i < n; i++) {
        y += (i == 2) ? 20 : 50; //wenn Wert = 2, dann addiere 20, ansonsten 50
        x = (x + 170) % 400; // addiere 170 auf x. Wenn x > 400, rechne Ergebnis - 400
        switch (i) { //Wert vin i bestimmt case. 
            case 0: // Box wird rot
                color = "#ff0000";
                break;
            case 1: // Case 1 = case 4
            case 4: // Box wird grün
                color = "#00ff00";
                break;
            case 3: //Schleife läuft weiter, Box unverändert
                continue;
            default: //Standard Farbe: blau, wenn case weder 1,3,4
                color = "#0000ff";
        }
        for (let size of ["big", "medium", "small"]) {
            createBox(color, x, y, size); //Box definiert durch Farbe, 
            if (i == 4)
                break;
        }
    }
    function createBox(_color, _x, _y, _size) {
        let div = document.createElement("div");
        document.body.appendChild(div);
        div.classList.add(_size);
        div.style.backgroundColor = _color;
        div.style.left = _x + "px";
        div.style.top = _y + "px";
    }
})(Boxes || (Boxes = {}));
//# sourceMappingURL=boxes.js.map