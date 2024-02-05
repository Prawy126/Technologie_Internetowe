/**
 * Funkcja pobierająca i wyświetlająca aktualny kurs Euro z API Narodowego Banku Polskiego (NBP).
 * Wywoływana po załadowaniu dokumentu HTML.
 *
 * @function
 * @global
 */
function fetchEuroExchangeRate() {
    /**
     * Funkcja fetch jest używana do pobierania danych kursu Euro z API NBP.
     *
     * @function
     * @param {string} url - Adres URL API NBP, z którego pobierane są dane kursu Euro.
     * @returns {Promise} - Obiekt Promise reprezentujący wynik żądania HTTP.
     */
    fetch('https://api.nbp.pl/api/exchangerates/rates/a/eur/?format=json')
        .then(response => response.json()) // Przekształcenie odpowiedzi na format JSON
        .then(data => {
            /**
             * Aktualny kurs Euro pobrany z danych API NBP.
             *
             * @type {number}
             */
            const exchangeRate = data.rates[0].mid;

            /**
             * Element HTML, do którego zostanie wstawiony kurs Euro.
             *
             * @type {HTMLElement}
             */
            const exchangeRateElement = document.getElementById('exchange-rate');

            // Wstawienie kursu Euro do elementu HTML
            exchangeRateElement.textContent = `Aktualny kurs Euro: ${exchangeRate.toFixed(2)} PLN`;
        })
        .catch(error => {
            /**
             * Błąd, który może wystąpić podczas pobierania danych z API NBP.
             *
             * @type {Error}
             */
            console.error('Wystąpił błąd:', error);
        });
}

// Nasłuchuj załadowania dokumentu HTML i wywołaj funkcję fetchEuroExchangeRate
document.addEventListener('DOMContentLoaded', fetchEuroExchangeRate);
