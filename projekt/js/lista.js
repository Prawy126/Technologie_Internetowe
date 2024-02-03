/**
 * Funkcja wczytuje listę zakupów z pamięci lokalnej przeglądarki i wyświetla ją na stronie.
 */
function loadShoppingList() {
    const shoppingList = document.getElementById("shoppingList");
    const savedList = JSON.parse(localStorage.getItem("shoppingList")) || [];

    savedList.forEach(itemInfo => {
        const [itemName, itemTime] = itemInfo.split(" - ");
        const li = document.createElement("li");
        li.className = "shopping-list-item"; // Dodaj klasę
        li.innerHTML = `
            ${itemName} - ${itemTime}
            <button class="remove-button" onclick="removeItem(this)">Usuń</button>
        `;
        shoppingList.appendChild(li);
    });
}

/**
 * Funkcja zapisuje aktualną listę zakupów do pamięci lokalnej przeglądarki.
 */
function saveShoppingList() {
    const shoppingListItems = Array.from(document.querySelectorAll(".shopping-list-item"));
    const itemList = shoppingListItems.map(item => item.textContent.split("Usuń")[0].trim());
    localStorage.setItem("shoppingList", JSON.stringify(itemList));
}

/**
 * Funkcja dodaje nowy przedmiot do listy zakupów.
 */
function addItem() {
    const itemInput = document.getElementById("item");
    const itemName = itemInput.value.trim();

    if (itemName === "") {
        alert("Proszę wpisać nazwę przedmiotu.");
        return;
    }

    const shoppingList = document.getElementById("shoppingList");
    const currentTime = new Date();
    const itemTime = `${currentTime.getHours().toString().padStart(2, "0")}:${currentTime.getMinutes().toString().padStart(2, "0")}:${currentTime.getSeconds().toString().padStart(2, "0")}`;
    const li = document.createElement("li");
    li.className = "shopping-list-item"; // Dodaj klasę
    li.innerHTML = `
        ${itemName} - ${itemTime}
        <button class="remove-button" onclick="removeItem(this)">Usuń</button>
    `;
    shoppingList.appendChild(li);

    itemInput.value = ""; // Wyczyść pole tekstowe

    // Zapisz listę po dodaniu nowego przedmiotu
    saveShoppingList();
}

/**
 * Funkcja usuwa przedmiot z listy zakupów.
 * @param {HTMLElement} button - Przycisk usuwania.
 */
function removeItem(button) {
    const listItem = button.parentElement;
    listItem.remove();

    // Zapisz listę po usunięciu przedmiotu
    saveShoppingList();
}

/**
 * Funkcja obsługuje zdarzenie naciśnięcia klawisza Enter w polu tekstowym.
 * @param {KeyboardEvent} event - Zdarzenie klawiatury.
 */
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Zapobiega standardowej akcji formularza
        addItem();
    }
}

// Dodajmy obsługę zdarzenia 'keypress' dla pola tekstowego
const itemInput = document.getElementById("item");
itemInput.addEventListener('keypress', handleKeyPress);

// Wywołaj funkcję wczytywania listy przy załadowaniu strony
loadShoppingList();
