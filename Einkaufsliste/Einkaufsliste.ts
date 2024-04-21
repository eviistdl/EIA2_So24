window.addEventListener('load', function() {
    const newEntryButton = document.getElementById('newEntry');
    const productEntry = document.getElementById('productEntry');

    if (newEntryButton && productEntry) {
        newEntryButton.addEventListener('click', function() {
            // Neues Container-Div erstellen
            const containerDiv = document.createElement('div');
            containerDiv.classList.add('container');

            console.log("Ein neuer Eintrag wurde hinzugefügt)");

            // Neues Div-Element erstellen
            const newDiv = document.createElement('div');
            // Setze eine ID für das neue Container-Div
            containerDiv.id = 'newContainer';

            // Formular-Elemente erstellen und dem neuen Div hinzufügen
            const formElements = `
                <form>
                    <label for="ware">Ware:</label>
                    <input type="text" name="ware" required>
                    <br> 

                    <label for="anzahl">Anzahl:</label>
                    <input type="number" name="anzahl" min="1" max="100" required>
                    <br> 

                    <label for="kommentar">Kommentar:</label>
                    <textarea name="kommentar" rows="2" placeholder="Marke/Einheit/Farbe/..."></textarea>
                    <br> 

                    <label for="kaufen">Gekauft?</label>
                    <input type="checkbox" name="gekauft">
                    <br> 

                    <label for="letzterKauf">Letzter Kauf:</label>
                    <input type="date" name="letzterKauf">
                    <br> 
                    <button id="deleteButton" type="button"> X </button>
                </form>
            `;

            newDiv.innerHTML = formElements;

            // Dem Container-Div hinzufügen
            containerDiv.appendChild(productEntry);
            containerDiv.appendChild(newDiv);

            // Dem Dokument hinzufügen
            document.body.appendChild(containerDiv);

            // Löschen des Divs bei Klick auf den Löschen-Button
            const deleteButton = newDiv.querySelector('#deleteButton');
            if (deleteButton) {
                deleteButton.addEventListener('click', function() {
                    containerDiv.remove();
                    console.log("Ein Eintrag wurde entfernt");
                });
            }
            // Änderungen im Formular anzeigen
            const form = newDiv.querySelector('form');
            if (form) {
                form.addEventListener('change', function(event) {
                    const target = event.target;
                    if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target instanceof HTMLSelectElement) {
                        const name = target.name;
                        const value = target.value;
                        console.log(`Änderung in ${name}: ${value}`);
                    }
                });
            }
        });
    }
});
