/**
 * Inicjalizuje funkcję wyszukiwania na stronie.
 *  Funkcja ta otwiera nowe okno przeglądarki i wykorzystuje wyszukiwarkę Goolge do wyszukiwania treści.
 * @function
 * @global
 */
function initSearch() {
  /**
   * Pole tekstowe do wprowadzenia zapytania.
   *
   * @type {HTMLInputElement}
   */
  var searchInput = document.getElementById('search-input');

  /**
   * Przycisk uruchamiający wyszukiwanie.
   *
   * @type {HTMLButtonElement}
   */
  var searchButton = document.getElementById('search-btn');

  /**
   * Funkcja wykonująca wyszukiwanie na podstawie wprowadzonego zapytania.
   * @function
   * @global
   */
  function search() {
      /**
       * Zapytanie wprowadzone przez użytkownika.
       *
       * @type {string}
       */
      var query = searchInput.value;

      /**
       * URL do wyników wyszukiwania Google.
       *
       * @type {string}
       */
      var googleSearchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(query);

      // Otwiera wyniki wyszukiwania w nowej karcie przeglądarki
      window.open(googleSearchUrl, '_blank');
  }

  /**
   * Nasłuchuje zdarzenia naciśnięcia klawisza Enter w polu tekstowym.
   *
   * @param {KeyboardEvent} event - Zdarzenie klawiatury.
   */
  searchInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
          event.preventDefault(); // Zapobiega standardowej akcji formularza
          search();
      }
  });

  /**
   * Nasłuchuje zdarzenia kliknięcia przycisku wyszukiwania.
   *
   * @param {MouseEvent} event - Zdarzenie myszy.
   */
  searchButton.addEventListener('click', function(event) {
      event.preventDefault(); // Zapobiega standardowej akcji linku
      search();
  });
}

/**
* Wywołuje funkcję `initSearch` po załadowaniu dokumentu HTML.
*/
document.addEventListener('DOMContentLoaded', initSearch);
