"use strict";
var RandomPoem;
(function (RandomPoem) {
    //Arrays mit entsprechendem Inhalt
    let subject = ["Adora ", "Catra ", "Glimmer ", "Bow ", "Perfuma ", "Frosta "];
    let predicate = ["rettet ", "mag ", "wurde verbannt aus ", "zerstört ", "besucht ", "hasst "];
    let object = ["Bright Moon", "Crymson Waste", "Mystacor", "Etheria", "Crypto Castle", "Beast Island"];
    //console.log (subject);
    //console.log (predicate);
    //console.log (object);
    //Schleife die Rückwärts zählt, Am Ende Wert = 1
    for (let i = subject.length; i >= 1; i--) {
        //console.log (i);
        //Konsole greift über die Funktion auf ein Subjekt ein Prädikat und Objekt auf
        console.log(getVerse(subject, predicate, object));
    }
    function getVerse(_subject, _predicate, _object) {
        //console.log ("blabla")
        // zufälliges Array auswählen
        let randomSubject = Math.floor(Math.random() * _subject.length);
        let randomPredicate = Math.floor(Math.random() * _predicate.length);
        let randomObject = Math.floor(Math.random() * _object.length);
        //das zufällig generierte Wort aus der weiteren Auswahl ausschließen
        let removeSubject = _subject.splice(randomSubject, 1)[0];
        let removePredicate = _predicate.splice(randomPredicate, 1)[0];
        let removeObject = _object.splice(randomObject, 1)[0];
        //console.log(randomSubject, randomPredicate, randomObject);
        //das ausgeschlossene Wort in der Konsole ausgeben.
        let verse = removeSubject + removePredicate + removeObject;
        return (verse);
    }
})(RandomPoem || (RandomPoem = {}));
//# sourceMappingURL=type.js.map