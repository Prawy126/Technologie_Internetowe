// Funkcja fetchEuroExchangeRate() pobiera aktualny kurs wymiany euro z API Narodowego Banku Polskiego
function fetchEuroExchangeRate() {
    // Wywołujemy funkcję fetch(), aby pobrać dane z określonego adresu URL
    fetch('https://api.nbp.pl/api/exchangerates/rates/a/eur/?format=json')
        // Analizujemy odpowiedź serwera jako JSON
        .then(response => response.json())
        // Obsługujemy otrzymane dane
        .then(data => {
            // Pobieramy kurs wymiany euro z pobranych danych
            const exchangeRate = data.rates[0].mid;
            // Znajdujemy element HTML o identyfikatorze 'exchange-rate'
            const exchangeRateElement = document.getElementById('exchange-rate');
            // Ustawiamy tekst elementu HTML, informujący o aktualnym kursie euro
            exchangeRateElement.textContent = `Aktualny kurs Euro: ${exchangeRate.toFixed(2)} PLN`;
        })
        // Obsługujemy ewentualne błędy, które mogą wystąpić podczas pobierania danych
        .catch(error => {
            console.error('Wystąpił błąd:', error);
        });
}

// Nasłuchujemy na zdarzenie 'DOMContentLoaded', które zostanie wywołane, gdy cała strona zostanie załadowana
document.addEventListener('DOMContentLoaded', fetchEuroExchangeRate);
