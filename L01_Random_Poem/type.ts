namespace RandomPoem {

    //Arrays mit entsprechendem Inhalt
    let subject: string[] = ["Adora", "Catra", "Glimmer", "Bow", "Perfuma", "Frosta"];
    let predicate: string[] = ["rettet", "mag", "wurde verbannt aus", "zerstört", "besucht", "hasst"];
    let object: string[] = ["Bright Moon", "Crymson Waste", "Mystacor", "Etheria", "Crypto Castle", "Beast Island"];

    //console.log (subject);
    //console.log (predicate);
    //console.log (object);

    //Schleife dir Rückwärts zählt, Am Ende Wert = 1
    for (let i = subject.length; i >= 1; i--){
        console.log(getVerse (subject, predicate, object));
    }

    function getVerse(_subject:  string[], _predicate: string[], _object: string[]){
        return ("blabla")
        //mit math random ein array von oben auswählen
    }



}
