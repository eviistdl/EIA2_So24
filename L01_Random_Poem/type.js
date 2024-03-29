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
        console.log(getVerse(subject, predicate, object));
    }
    function getVerse(_subject, _predicate, _object) {
        //console.log ("blabla")
        // zufälliges Array auswählen
        let randomSubjectIndex = Math.floor(Math.random() * _subject.length);
        let randomPredicateIndex = Math.floor(Math.random() * _predicate.length);
        let randomObjectIndex = Math.floor(Math.random() * _object.length);
        // Ergebnis dem Array Inhalt zuweisen
        let randomSubject = _subject[randomSubjectIndex];
        let randomPredicate = _predicate[randomPredicateIndex];
        let randomObject = _object[randomObjectIndex];
        //let verse: string = _subject[randomSubject] + predicate[randomPredicate]
        return (randomSubject + randomPredicate + randomObject);
    }
})(RandomPoem || (RandomPoem = {}));
//# sourceMappingURL=type.js.map