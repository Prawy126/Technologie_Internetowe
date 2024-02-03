/**
 * Funkcja wykonywana po załadowaniu całego dokumentu HTML.
 * Dodaje obsługę wyszukiwania na stronie.
 * @function
 */
document.addEventListener('DOMContentLoaded', function() {
  /**
   * Pole tekstowe, w którym użytkownik wprowadza zapytanie do wyszukiwania.
   * @type {HTMLInputElement}
   */
  var searchInput = document.getElementById('search-input');

  /**
   * Przycisk służący do uruchamiania wyszukiwania.
   * @type {HTMLButtonElement}
   */
  var searchButton = document.getElementById('search-btn');

  /**
   * Funkcja odpowiedzialna za wyszukiwanie i otwieranie wyników w nowej karcie.
   * @function
   */
  function search() {
    /**
     * Zapytanie wprowadzone przez użytkownika.
     * @type {string}
     */
    var query = searchInput.value;

    /**
     * URL Google Search z zakodowanym zapytaniem.
     * @type {string}
     */
    var googleSearchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(query);

    // Otwiera wyniki wyszukiwania w nowej karcie przeglądarki
    window.open(googleSearchUrl, '_blank');
  }

  /**
   * Nasłuchuje zdarzenia naciśnięcia klawisza w polu tekstowym.
   * Jeśli naciśnięty klawisz to Enter, wywołuje funkcję `search`.
   */
  searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // Zapobiega standardowej akcji formularza
      search();
    }
  });

  /**
   * Nasłuchuje zdarzenia kliknięcia przycisku.
   * Wywołuje funkcję `search`.
   */
  searchButton.addEventListener('click', function(event) {
    event.preventDefault(); // Zapobiega standardowej akcji linku
    search();
  });
});
