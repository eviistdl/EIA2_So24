namespace RandomPoem {

    //Arrays mit entsprechendem Inhalt
    let subject: string[] = ["Adora ", "Catra ", "Glimmer ", "Bow ", "Perfuma ", "Frosta "];
    let predicate: string[] = ["rettet ", "mag ", "wurde verbannt aus ", "zerstört ", "besucht ", "hasst "];
    let object: string[] = ["Bright Moon", "Crymson Waste", "Mystacor", "Etheria", "Crypto Castle", "Beast Island"];

    //console.log (subject);
    //console.log (predicate);
    //console.log (object);

    //Schleife die Rückwärts zählt, Am Ende Wert = 1
    for (let i = subject.length; i >= 1; i--){
       //console.log (i);
        console.log(getVerse (subject, predicate, object));
    }

    function getVerse(_subject:  string[], _predicate: string[], _object: string[]){
        //console.log ("blabla")

        // zufälliges Array auswählen
        let randomSubject: number = Math.floor(Math.random() * _subject.length);
        let randomPredicate: number = Math.floor(Math.random() * _predicate.length);
        let randomObject: number = Math.floor(Math.random() * _object.length);

        let removeSubject: string = _subject.splice(randomSubject, 1)[0];
        let removePredicate: string = _predicate.splice(randomPredicate, 1)[0];
        let removeObject: string = _object.splice(randomObject, 1)[0];

        // Ergebnis dem Array Inhalt zuweisen
       // let randomSubject: string = _subject[randomSubjectIndex];
        //let randomPredicate: string = _predicate[randomPredicateIndex];
        //let randomObject: string = _object[randomObjectIndex];

        let verse: string = removeSubject + removePredicate + removeObject;

        //let verse: string = _subject[randomSubject] + predicate[randomPredicate]
        
        return (verse);
        
    }

}
