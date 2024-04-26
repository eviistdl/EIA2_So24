"use strict";
var Einkaufsliste;
(function (Einkaufsliste) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("Start");
        form.addEventListener("change", handleChange);
        function generateContent(_data) {
            // Füge für jedes Produkt einen Eintrag hinzu
            for (let entry of _data) {
                addEntry(entry);
            }
        }
        generateContent(Einkaufsliste.data);
        function addEntry(_product) {
            const shoppingListDiv = (document.getElementById("shoppingList"));
            const entryDiv = document.createElement("div");
            entryDiv.id = "entry";
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
                        <button id="deleteButton"> X </button>
                    </div>
                `;
            shoppingListDiv.appendChild(entryDiv);
            const deleteButton = event.target;
            // Finde das Elternelement des Löschbuttons, das den Eintrag darstellt
            const entryDiv = deleteButton.parentElement;
            const newEntry = entryDiv.parentElement;
            if (deleteButton) {
                deleteButton.addEventListener('click', deleteEntry);
            }
            function deleteEntry(event) {
                const deleteButton = event.target;
                // Finde das Elternelement des Löschbuttons, das den Eintrag darstellt
                const entryDiv = deleteButton.parentElement;
                // Entferne das Eintrags-Div aus dem DOM
                entryDiv.remove();
            }
        }
        Einkaufsliste.addEntry = addEntry;
    }
    // Funktion die durch Änderung am Formular aufgerufen wird
    function handleChange(event) {
        // Event Infos werden in der Konsole ausgegeben
        console.log(event);
        const input = event.target;
        console.log(input.value);
    }
})(Einkaufsliste || (Einkaufsliste = {}));
//# sourceMappingURL=einkaufsliste.js.map