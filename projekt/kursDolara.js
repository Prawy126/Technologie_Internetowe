document.addEventListener('DOMContentLoaded', function() {
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