"use strict";
var Einkaufsliste;
(function (Einkaufsliste) {
    function generateContent(_data) {
        console.log(_data);
        for (let category in _data) {
            //console.log (category);
            let items = _data[category];
            switch (category) {
                case "entry":
                    let group = createSelect(item);
                    break;
                default:
                    break;
            }
        }
    }
    Einkaufsliste.generateContent = generateContent;
})(Einkaufsliste || (Einkaufsliste = {}));
//# sourceMappingURL=generateContent.js.map