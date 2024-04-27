namespace Einkaufsliste {
    // Laden des Fensters
    window.addEventListener("load", handleLoad);

    // Funktion, die aufgerufen wird, wenn das Fenster geladen wird
    function handleLoad(_event: Event): void {
        console.log("Start");

        // Änderungen abhören
        const form = document.querySelector("form");
        if (form) {
            form.addEventListener("change", handleChange);
        }

        // Submit-Button abhören
        const submitButton = document.querySelector("#addItem input[type='submit']");
        if (submitButton) {
            submitButton.addEventListener("click", handleSubmit);
        }

        // Generiere Item Divs Funktion aufrufen
        generateContent(data);
    }

    // Funktion zum Generieren von Inhalten
    function generateContent(_data: Item[]): void {
        // Füge für jedes Produkt einen Eintrag hinzu
        for (let entry of _data) {
            addEntry(entry);
        }
    }

    // Exportierte Funktion zum Hinzufügen eines Eintrags
    export function addEntry(_product: Item): void {
        //Auf shoppingList zugreifen
        const shoppingListDiv: HTMLDivElement = document.getElementById("shoppingList") as HTMLDivElement;

        //Das erstellte Element soll ein div werden mit der Klasse entry
        const entryDiv: HTMLDivElement = document.createElement("div");
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

        //Das neue Div wird dem ShoppingList Div als Kind untergeordnet
        shoppingListDiv.appendChild(entryDiv);

        //Button zum Löschen des Eintrags
        const deleteButton: HTMLButtonElement = entryDiv.querySelector('.deleteButton > button') as HTMLButtonElement;
        if (deleteButton) {
            deleteButton.addEventListener('click', deleteEntry);
        }
    }

    // Funktion zum Verarbeiten von Formularänderungen
    function handleChange(event: Event): void {
        const input: HTMLInputElement = event.target as HTMLInputElement;
        console.log(input.value);
    }

    // Funktion zum Löschen eines Eintrags
    function deleteEntry(event: MouseEvent): void {
        const deleteButton: HTMLButtonElement = event.target as HTMLButtonElement;
        const entryDiv: HTMLDivElement | null = deleteButton.closest('.entry') as HTMLDivElement | null;
        if (entryDiv) {
            entryDiv.remove();
            console.log("deleteEntry wurde aufgerufen.")
        }
    }

    // Funktion zum Hinzufügen eines Eintrags beim Klicken des Submit-Buttons
    function handleSubmit(event: Event): void {
        event.preventDefault(); // Verhindern Sie das Standardverhalten des Submit-Buttons (Seitenaktualisierung)

        // Zugriff auf die Eingabeelemente
        const itemNameInput: HTMLInputElement = document.querySelector("#itemInput") as HTMLInputElement;
        const quantityInput: HTMLInputElement = document.querySelector("#quantityInput") as HTMLInputElement;
        const commentInput: HTMLTextAreaElement = document.querySelector("#commentInput") as HTMLTextAreaElement;

        // Prüfen, ob alle Eingaben vorhanden sind
        if (itemNameInput && quantityInput && commentInput) {
            // Erstellen Sie ein neues Item-Objekt mit den eingegebenen Daten
            const newItem: Item = {
                name: itemNameInput.value,
                quantityInput: parseInt(quantityInput.value),
                commentInput: commentInput.value,
                date: getCurrentDate(), // Aktuelles Datum einfügen
                wasBought: false // Standardmäßig auf false setzen
            };

            // Fügen Sie das neue Element zur Datenstruktur hinzu
            data.push(newItem);

            // Fügen Sie das neue Element zur Anzeige hinzu
            addEntry(newItem);

            // Zurücksetzen der Eingabefelder
            itemNameInput.value = "";
            quantityInput.value = "1";
            commentInput.value = "";
        }
    }

    // Funktion zum Abrufen des aktuellen Datums im Format "YYYY-MM-DD"
    // Funktion zum Abrufen des aktuellen Datums im Format "YYYY-MM-DD"
    function getCurrentDate(): string {
        const now: Date = new Date();
        const year: number = now.getFullYear();
        const month: number = now.getMonth() + 1; // Monat beginnt mit 0
        const day: number = now.getDate();

        // Fügen Sie führende Nullen hinzu, wenn der Monat oder Tag einstellig ist
        const formattedMonth: string = month < 10 ? `0${month}` : `${month}`;
        const formattedDay: string = day < 10 ? `0${day}` : `${day}`;

        // Rückgabe des Datums im "YYYY-MM-DD"-Format
        return `${year}-${formattedMonth}-${formattedDay}`;
    }

}
