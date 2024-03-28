"use strict";
var RandomPoem;
(function (RandomPoem) {
    //Arrays mit entsprechendem Inhalt
    let subject = ["Adora", "Catra", "Glimmer", "Bow", "Perfuma", "Frosta"];
    let predicate = ["rettet", "mag", "wurde verbannt aus", "zerstört", "besucht", "hasst"];
    let object = ["Bright Moon", "Crymson Waste", "Mystacor", "Etheria", "Crypto Castle", "Beast Island"];
    //console.log (subject);
    //console.log (predicate);
    //console.log (object);
    //Schleife dir Rückwärts zählt, Am Ende Wert = 1
    for (let i = subject.length; i >= 1; i--) {
        console.log(getVerse(subject, predicate, object));
    }
    function getVerse(_subject, _predicate, _object) {
        return ("blabla");
        //mit math random ein array von oben auswählen
    }
})(RandomPoem || (RandomPoem = {}));
//# sourceMappingURL=type.js.map