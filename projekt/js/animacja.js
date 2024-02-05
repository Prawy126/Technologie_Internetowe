/**
 * Funkcja do cyklicznego przenoszenia pierwszego elementu dziecka kontenera "img-container" na jego koniec.
 *
 * @function
 * @global
 * 
 */
function rotateImages() {
    /**
     * Referencja do kontenera obrazków o klasie "img-container".
     * @type {HTMLElement}
     */
    const imgContainer = document.querySelector(".img-container");

    /**
     * Interwał, który uruchamia funkcję co 2500 milisekund (2,5 sekundy).
     */
    setInterval(() => {
        /**
         * Pierwszy element dziecka kontenera (który jest pierwszym obrazkiem).
         * @type {HTMLElement}
         */
        let first = imgContainer.firstElementChild;

        // Usunięcie pierwszego elementu dziecka z kontenera
        first.remove();

        // Dodanie usuniętego obrazka na koniec kontenera (cykliczne przeniesienie)
        imgContainer.appendChild(first);
    }, 2500);
}
// Wywołanie to uruchamia skrypt do przesuwania zdjęć
    rotateImages();
