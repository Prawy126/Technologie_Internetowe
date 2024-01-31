document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    const radioButtons = document.querySelectorAll('.slider-radio');
    let currentIndex = 0;
    const totalSlides = radioButtons.length;
   
    
    function goToSlide(index) {
        const slideWidth = slides.clientWidth;
        slides.scrollTo({
            left: slideWidth * index,
            behavior: 'smooth'
        });
        
        radioButtons[index].checked = true;
        currentIndex = index;
    }

    function autoSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        goToSlide(currentIndex);
    }

    // Ustawienie interwału dla automatycznego przesuwania slajdów (np. co 3 sekundy)
    setInterval(autoSlide, 2000);

    slides.addEventListener('scroll', function() {
        let index = Math.round(this.scrollLeft / this.clientWidth);
        radioButtons[index].checked = true;
        currentIndex = index; // Aktualizacja bieżącego indeksu po ręcznym przewijaniu
    });
});