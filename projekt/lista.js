 // Funkcja do wczytywania listy z localStorage
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

// Funkcja do zapisywania listy w localStorage
function saveShoppingList() {
    const shoppingListItems = Array.from(document.querySelectorAll(".shopping-list-item"));
    const itemList = shoppingListItems.map(item => item.textContent.split("Usuń")[0].trim());
    localStorage.setItem("shoppingList", JSON.stringify(itemList));
}

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

function removeItem(button) {
    const listItem = button.parentElement;
    listItem.remove();

    // Zapisz listę po usunięciu przedmiotu
    saveShoppingList();
}

// Funkcja do obsługi zdarzenia naciśnięcia klawisza w polu tekstowym
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