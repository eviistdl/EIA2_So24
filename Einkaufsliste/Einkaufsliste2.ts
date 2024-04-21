namespace L03_FormElements {
    console.log("Let's get started");
    


    
}
    

    window.addEventListener('load', function() { //wenn die Seite vollständig geladen ist, sollen die changes im Formular ausgelesen werden.
        const form = document.getElementById('addWare') as HTMLFormElement; //Auf Formuar zugreifen
        //const shoppingList = document.getElementById('shoppingList');

        if (form) {
            form.addEventListener('change', function() { //Bei change, Funktion ausführen
                form.addEventListener('change', function(event) {
                    const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement; 
                    const name = target.name; // Name des Formularfelds
                    const value = target.value; // Wert des Formularfelds
                
                    console.log(`Änderung in ${name}: ${value}`); // Ausgabe der Änderung in der Konsole
                });
            });
        } 
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Verhindert das Absenden des Formulars und das Neuladen der Seite
            
            let formData: FormData = new FormData(document.forms[0]);
            
            // Alle Formulardaten durchgehen und ausgeben
            formData.forEach((value, name) => {
                console.log(`${name}: ${value}`);
            });
    });
    
    });     
}
       