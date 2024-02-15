---
layout: default
---
# LAB 2

## Zadania:

- kontakt
- 


```html
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formularz</title>
    <style>
        * {
            margin: 20px;
        }
    </style>
</head>
<body>
    <form action="" method="post">
        <h1>Formularz kontaktowy</h1>
        <label for="name">Podaj swoje imię i nazwisko:</label>
        <input type="text" id="name" placeholder="Imię i nazwisko" name="name"><br>
        <label for="tel">Podaj numer telefonu:</label>
        <input type="tel" id="tel" placeholder="Nr telefonu" name="tel"><br>
        <label for="mail">Podaj swój adres email:</label>
        <input type="email" id="mail" name="mail"><br>
        <label for="content">Treść:</label>
        <textarea id="content" name="content" rows="10" cols="20"></textarea>
        <br>
        <label for="contact-topic">Wybierz swoje Miasto:</label>
        <select id="contact-topic" name="contact-topic">
            <option value="Warszawa">Warszawa</option>
            <option value="Rzeszów">Rzeszów</option>
            <option value="Brak" disabled>Nie istnieje</option>
        </select>
        <br>
        <label>
            <input type="checkbox" name="regulamin" value="regulamin" disabled checked>Akceptuję regulamin
        </label>
        <br>
        <button type="submit">Wyślij</button>
        <button type="reset">Resetuj</button>
    </form>
</body>
</html>

```


- [Aktualny podgląd kodu](https://prawy126.github.io/Technologie_Internetowe/lab2/kontakt)

---
- Wyszukiwarka produktów

- 

```html
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Strona internetowa</title>
</head>
<body>
    <form>
        <h1>Wyszukaj produkt</h1>
        <input type="search" value="🔍Nazwa produktu"><br>
        <br>
        <fieldset>
            <legend>Cena</legend>
            <label for="cena od">od </label>
            <input type="search" value="0.00">
            <label for="cena do">do</label>
            <input type="search" value="10000000.00">
            <select>
                <option value="PLN" selected>
                    PLN
                </option>
                <option value="EURO">
                    €
                </option>
                <option value="Dolar">
                    $
                </option>
            </select>
        </fieldset>
        <br>
        <fieldset>
            <legend>Ocena Produktu</legend>
            <label>
                <input type="radio" name="gwiazdki" value="5">5,0⭐⭐⭐⭐⭐
            </label><br>
            <label>
                <input type="radio" name="gwiazdki" value="4">4,0⭐⭐⭐⭐
            </label><br>
            <label>
                <input type="radio" name="gwiazdki" value="3">3,0⭐⭐⭐
            </label><br>
            <label>
                <input type="radio" name="gwiazdki" value="2">2,0⭐⭐
            </label><br>
            <label>
                <input type="radio" name="gwiazdki" value="1">1,0⭐
            </label><br>
        </fieldset><br>
        <label for="kolor">Kolor:</label>
        <input type="color" value="#FFFF00"><br>
        <label for="DataProduktu">Data produkcji:</label>
        <input type="datetime-local"><br>
        <label for="Ladowanie">Szybkie ładowanie: 0W</label>
        <input type="range" valuemax="150" valuemin="0" value="50" >150W &nbsp;&nbsp;
        <fieldset>
            <legend>Inne:</legend>
            <label for="dual-sim"></label>
            <input type="checkbox"> dual-sim
            <label for="5G"></label>
            <input type="checkbox">5G
            <label for="Gorilla glass"></label>
            <input type="checkbox">Gorilla glass
        </fieldset><br>
        <button>Filtruj</button>
        <button>Usuń filtry</button>
    </form>
</body>
</html>
```

- [Aktualny podgląd kodu](https://prawy126.github.io/Technologie_Internetowe/lab2/strona)


### Treści zadań
- [link](https://prawy126.github.io/Technologie_Internetowe/lab2/README.md)