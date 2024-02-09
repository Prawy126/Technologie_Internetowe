// Funkcja rotateImages() obraca obrazy w kontenerze co określony czas
function rotateImages() {
    // Znajdujemy kontener obrazów w dokumencie HTML za pomocą klasy CSS "img-container"
    const imgContainer = document.querySelector(".img-container");

    // Uruchamiamy interwał, który będzie wykonywał obrót co 2500 milisekund (2.5 sekundy)
    setInterval(() => {
        // Pobieramy pierwsze dziecko (obraz) z kontenera
        let first = imgContainer.firstElementChild;
        // Usuwamy pierwsze dziecko z kontenera, co spowoduje, że kolejne dziecko zostanie automatycznie przesunięte na pierwszą pozycję
        first.remove();
        // Dodajemy usunięty obraz na koniec kontenera, co sprawia, że obraca się cały cykl obrazów
        imgContainer.appendChild(first);
    }, 2500); // Interwał obracania się obrazów ustawiony na 2500 milisekund (2.5 sekundy)
}

// Wywołujemy funkcję rotateImages(), aby rozpocząć obrót obrazów na stronie
rotateImages();
