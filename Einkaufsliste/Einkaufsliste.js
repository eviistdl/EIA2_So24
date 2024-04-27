"use strict";
var Einkaufsliste;
(function (Einkaufsliste) {
    // Laden des Fensters
    window.addEventListener("load", handleLoad);
    // Funktion, die aufgerufen wird, wenn das Fenster geladen wird
    function handleLoad(_event) {
        console.log("Start");
        // Änderungen abhören
        const form = document.querySelector("form");
        if (form) {
            form.addEventListener("change", handleChange);
        }
        // Generiere Item Divs Funktion aufrufen
        generateContent(Einkaufsliste.data);
    }
    // Funktion zum Generieren von Inhalten
    function generateContent(_data) {
        // Füge für jedes Produkt einen Eintrag hinzu
        for (let entry of _data) {
            addEntry(entry);
        }
    }
    // Exportierte Funktion zum Hinzufügen eines Eintrags
    function addEntry(_product) {
        //Auf shoppingList zugreifen
        const shoppingListDiv = document.getElementById("shoppingList");
        //Dsa erstellte Element soll ein div werden mkt der Klasse entry
        const entryDiv = document.createElement("div");
        entryDiv.classList.add("entry");
        //HTML Schnipsel für das zu erstellende Div. Die Daten aus data.ts werden abgerufen und an die richtige Stelle gesetzt.
        entryDiv.innerHTML = `
        <p id="itemName">${_product.name}</p>
        <div id="wasBought">
            Bought?
            <input type="checkbox" name="NextPurchase" ${_product.wasBought ? "checked" : ""}/> 
        </div>
        <div id="quantityInput"> 
            Quantity
            <input type="number" name="Stepper" step="1" min="1" max="100" value="${_product.quantityInput}" required />
        </div>
        <div id="commentInput"> 
            Comment
            <textarea name="comment" rows="2" placeholder="details...">${_product.commentInput}</textarea>
        </div>
        <div id="date"> 
            Last bought: 
            <input type="date" name="today" value="${_product.date}">
        </div>
        <div class="deleteButton">
            <button> X </button>
        </div>
    `;
        //Das neue Div wird dem SHippinglist Div als Kind untergeordnet
        shoppingListDiv.appendChild(entryDiv);
        //Button zum Löschen des Eintrags
        const deleteButton = entryDiv.querySelector('.deleteButton > button');
        if (deleteButton) {
            deleteButton.addEventListener('click', deleteEntry);
        }
    }
    Einkaufsliste.addEntry = addEntry;
    // Funktion zum Verarbeiten von Formularänderungen
    function handleChange(event) {
        const input = event.target;
        console.log(input.value);
    }
    // Funktion zum Löschen eines Eintrags
    function deleteEntry(event) {
        const deleteButton = event.target;
        const entryDiv = deleteButton.closest('.entry');
        if (entryDiv) {
            entryDiv.remove();
            console.log("deleteEntry wurde aufgerufen.");
        }
    }
})(Einkaufsliste || (Einkaufsliste = {}));
//# sourceMappingURL=einkaufsliste.js.map