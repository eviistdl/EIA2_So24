"use strict";
var L03_FormElements;
(function (L03_FormElements) {
    console.log("Let's get started");
})(L03_FormElements || (L03_FormElements = {}));
window.addEventListener('load', function () {
    const form = document.getElementById('addWare'); //Auf Formuar zugreifen
    //const shoppingList = document.getElementById('shoppingList');
    if (form) {
        form.addEventListener('change', function () {
            form.addEventListener('change', function (event) {
                const target = event.target;
                const name = target.name; // Name des Formularfelds
                const value = target.value; // Wert des Formularfelds
                console.log(`Änderung in ${name}: ${value}`); // Ausgabe der Änderung in der Konsole
            });
        });
    }
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Verhindert das Absenden des Formulars und das Neuladen der Seite
        let formData = new FormData(document.forms[0]);
        // Alle Formulardaten durchgehen und ausgeben
        formData.forEach((value, name) => {
            console.log(`${name}: ${value}`);
        });
    });
});
//# sourceMappingURL=Einkaufsliste2.js.map