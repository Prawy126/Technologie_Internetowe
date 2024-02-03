/**
 * Inicjuje przewijanie slajdów i automatyczne przewijanie na stronie internetowej.
 * @function
 * @global
 */
function initializeSlider() {
    /**
     * Kontener dla slajdów.
     * @type {HTMLElement}
     */
    const slides = document.querySelector('.slides');

    /**
     * Lista radio buttonów służących do nawigacji po slajdach.
     * @type {NodeList}
     */
    const radioButtons = document.querySelectorAll('.slider-radio');

    /**
     * Bieżący indeks slajdu.
     * @type {number}
     */
    let currentIndex = 0;

    /**
     * Całkowita liczba slajdów.
     * @type {number}
     */
    const totalSlides = radioButtons.length;

    /**
     * Przewija do określonego slajdu na podstawie indeksu.
     * @param {number} index - Indeks slajdu do przewinięcia.
     */
    function goToSlide(index) {
        /**
         * Szerokość pojedynczego slajdu.
         * @type {number}
         */
        const slideWidth = slides.clientWidth;

        slides.scrollTo({
            left: slideWidth * index,
            behavior: 'smooth'
        });

        radioButtons[index].checked = true;
        currentIndex = index;
    }

    /**
     * Przesuwa automatycznie na kolejny slajd.
     */
    function autoSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        goToSlide(currentIndex);
    }

    /**
     * Ustawia interwał dla automatycznego przewijania slajdów (np. co 3 sekundy).
     */
    setInterval(autoSlide, 2000);

    /**
     * Nasłuchuje zdarzenia przewijania w elemencie slides.
     */
    slides.addEventListener('scroll', function() {
        const index = Math.round(this.scrollLeft / this.clientWidth);
        radioButtons[index].checked = true;
        currentIndex = index; // Aktualizacja bieżącego indeksu po ręcznym przewijaniu
    });
}

/**
 * Wywołanie funkcji `initializeSlider` po załadowaniu dokumentu HTML.
 */
document.addEventListener('DOMContentLoaded', initializeSlider);
