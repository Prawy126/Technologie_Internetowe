// Nasłuchiwanie na zdarzenie 'DOMContentLoaded', które jest wywoływane, gdy cała strona zostanie załadowana
document.addEventListener('DOMContentLoaded', function() {
    // Pobranie elementów DOM dla slajdów oraz przycisków wyboru slajdów
    const slides = document.querySelector('.slides');
    const radioButtons = document.querySelectorAll('.slider-radio');
    // Inicjalizacja zmiennej przechowującej indeks bieżącego slajdu
    let currentIndex = 0;
    // Obliczenie całkowitej liczby slajdów
    const totalSlides = radioButtons.length;
   
    // Funkcja przechodzenia do konkretnego slajdu na podstawie indeksu
    function goToSlide(index) {
        // Pobranie szerokości slajdu
        const slideWidth = slides.clientWidth;
        // Przewinięcie slajdów do odpowiedniego slajdu z animacją 'smooth'
        slides.scrollTo({
            left: slideWidth * index,
            behavior: 'smooth'
        });
        // Ustawienie wybranego przycisku wyboru slajdu jako aktywny
        radioButtons[index].checked = true;
        // Aktualizacja bieżącego indeksu slajdu
        currentIndex = index;
    }

    // Funkcja automatycznego przewijania slajdów
    function autoSlide() {
        // Inkrementacja indeksu bieżącego slajdu, a następnie wywołanie funkcji goToSlide
        currentIndex = (currentIndex + 1) % totalSlides;
        goToSlide(currentIndex);
    }

    // Ustawienie interwału dla automatycznego przewijania slajdów (np. co 2 sekundy)
    setInterval(autoSlide, 2000);

    // Nasłuchiwanie na zdarzenie przewijania slajdów
    slides.addEventListener('scroll', function() {
        // Obliczenie indeksu aktualnie wyświetlanego slajdu na podstawie przewinięcia
        let index = Math.round(this.scrollLeft / this.clientWidth);
        // Ustawienie przycisku wyboru slajdu jako aktywny na podstawie indeksu aktualnie wyświetlanego slajdu
        radioButtons[index].checked = true;
        // Aktualizacja bieżącego indeksu po ręcznym przewijaniu
        currentIndex = index;
    });
});
