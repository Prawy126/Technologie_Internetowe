/**
 * Kod JavaScript odpowiedzialny za pobieranie i wyświetlanie aktualnego kursu Euro.
 *
 * @function
 * @global
 */
document.addEventListener('DOMContentLoaded', function () {
    /**
     * Funkcja fetch jest używana do pobrania danych kursu Euro z API Narodowego Banku Polskiego (NBP).
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
});
