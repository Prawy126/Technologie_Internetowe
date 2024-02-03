/**
 * Kod JavaScript jest odpowiedzialny za cykliczne przenoszenie pierwszego elementu dziecka kontenera "img-container" na jego koniec.
 */

// Pobranie referencji do kontenera obrazków o klasie "img-container"
let imgContainer = document.querySelector(".img-container");

// Ustawienie interwału, który będzie uruchamiał funkcję co 2500 milisekund (2,5 sekundy)
setInterval(() => {
    // Pobranie pierwszego elementu dziecka kontenera (który jest pierwszym obrazkiem)
    let first = imgContainer.firstElementChild;

    // Usunięcie pierwszego elementu dziecka z kontenera
    first.remove();

    // Dodanie usuniętego obrazka na koniec kontenera (cykliczne przeniesienie)
    imgContainer.appendChild(first);
}, 2500);
