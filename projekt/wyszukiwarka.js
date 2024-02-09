// Funkcja inicjalizująca wyszukiwanie
function initSearch() {
    // Pobranie elementów DOM dla pola wyszukiwania i przycisku wyszukiwania
    var searchInput = document.getElementById('search-input');
    var searchButton = document.getElementById('search-btn');
  
    // Funkcja wyszukiwania
    function search() {
        // Pobranie zapytania wprowadzonego przez użytkownika
        var query = searchInput.value;
        // Skonstruowanie adresu URL dla wyszukiwania w Google
        var googleSearchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(query);
        // Otwarcie wyników wyszukiwania w nowej karcie
        window.open(googleSearchUrl, '_blank'); // Otwiera wyniki wyszukiwania w nowej karcie
    }
  
    // Nasłuchiwanie na zdarzenie naciśnięcia klawisza Enter w polu wyszukiwania
    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Zapobiega standardowej akcji formularza
            search(); // Wywołanie funkcji wyszukiwania
        }
    });
  
    // Nasłuchiwanie na zdarzenie kliknięcia przycisku wyszukiwania
    searchButton.addEventListener('click', function(event) {
        event.preventDefault(); // Zapobiega standardowej akcji linku
        search(); // Wywołanie funkcji wyszukiwania
    });
  }
  
  // Nasłuchiwanie na zdarzenie 'DOMContentLoaded', które jest wywoływane, gdy cała strona zostanie załadowana
  document.addEventListener('DOMContentLoaded', initSearch);
  