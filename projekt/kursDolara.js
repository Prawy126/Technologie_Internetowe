document.addEventListener('DOMContentLoaded', function () {
    /**
     * Ten kod JavaScript jest odpowiedzialny za pobieranie i wyświetlanie aktualnego kursu Euro w formie JSON z API Narodowego Banku Polskiego (NBP). Oto opis, jak działa ten kod:

document.addEventListener('DOMContentLoaded', function() {...}): Ten fragment kodu reaguje na zdarzenie załadowania całej strony internetowej (czyli moment, kiedy dokument HTML został w pełni załadowany) i uruchamia funkcję, która znajduje się wewnątrz.

fetch('https://api.nbp.pl/api/exchangerates/rates/a/eur/?format=json'): To polecenie fetch jest używane do wysłania żądania HTTP do adresu URL, który jest adresem API NBP, aby pobrać aktualny kurs Euro. API NBP oferuje dane w formacie JSON.

.then(response => response.json()): Po otrzymaniu odpowiedzi z API, ta linia kodu przekształca odpowiedź (która jest w formie tekstu) na obiekt JavaScript za pomocą metody .json(). Otrzymany obiekt JSON zostaje przekazany do kolejnego łańcucha obietnic.

.then(data => {...}): Kiedy dane JSON są dostępne, ta funkcja zostaje uruchomiona. Otrzymane dane zawierają informacje o kursie Euro. Kurs ten jest wyodrębniany z danych i zaokrąglany do dwóch miejsc po przecinku. Następnie jest wstawiany do elementu HTML o identyfikatorze 'exchange-rate', aby wyświetlić aktualny kurs Euro na stronie.

.catch(error => {...}): Ta część obsługuje błędy, które mogą wystąpić podczas pobierania danych z API. W przypadku wystąpienia błędu, komunikat błędu zostanie wyświetlony w konsoli przeglądarki.

W rezultacie, po załadowaniu strony, ten kod JavaScript pobierze aktualny kurs Euro z API NBP i wyświetli go na stronie w elemencie o identyfikatorze 'exchange-rate'. Jeśli wystąpią jakiekolwiek błędy podczas tego procesu, zostaną one obsłużone i wyświetlone w konsoli przeglądarki.
    @function     
    
*/
    fetch('https://api.nbp.pl/api/exchangerates/rates/a/eur/?format=json')
        .then(response => response.json())
        .then(data => {
            const exchangeRate = data.rates[0].mid;
            const exchangeRateElement = document.getElementById('exchange-rate');
            exchangeRateElement.textContent = `Aktualny kurs Euro: ${exchangeRate.toFixed(2)} PLN`;
        })
        .catch(error => {
            console.error('Wystąpił błąd:', error);
        });
});