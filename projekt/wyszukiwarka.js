function initSearch() {
  var searchInput = document.getElementById('search-input');
  var searchButton = document.getElementById('search-btn');

  function search() {
      var query = searchInput.value;
      var googleSearchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(query);
      window.open(googleSearchUrl, '_blank'); // Otwiera wyniki wyszukiwania w nowej karcie
  }

  searchInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
          event.preventDefault(); // Zapobiega standardowej akcji formularza
          search();
      }
  });

  searchButton.addEventListener('click', function(event) {
      event.preventDefault(); // Zapobiega standardowej akcji linku
      search();
  });
}

document.addEventListener('DOMContentLoaded', initSearch);
