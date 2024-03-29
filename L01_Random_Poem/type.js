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
        let randomSubject = Math.floor(Math.random() * _subject.length);
        let randomPredicate = Math.floor(Math.random() * _predicate.length);
        let randomObject = Math.floor(Math.random() * _object.length);
        let removeSubject = _subject.splice(randomSubject, 1)[0];
        let removePredicate = _predicate.splice(randomPredicate, 1)[0];
        let removeObject = _object.splice(randomObject, 1)[0];
        // Ergebnis dem Array Inhalt zuweisen
        // let randomSubject: string = _subject[randomSubjectIndex];
        //let randomPredicate: string = _predicate[randomPredicateIndex];
        //let randomObject: string = _object[randomObjectIndex];
        let verse = removeSubject + removePredicate + removeObject;
        //let verse: string = _subject[randomSubject] + predicate[randomPredicate]
        return (verse);
    }
})(RandomPoem || (RandomPoem = {}));
//# sourceMappingURL=type.js.map