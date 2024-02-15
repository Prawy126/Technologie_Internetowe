---
layout: default
---

# LAB 3

- zadanie 1 
- 

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Podstawy CSS</title>
        <style>
            p {
                color: red;
            }
            #special{
                color:black;
                background-color: yellow;;
            }
            .example{
                padding: 10px;
                margin: 50px;
            }
            
        </style>
    </head>
    <body>
        <p>Ten akapit będzie w czerwonym kolorze.</p>
        <p style="color: green;">Ten również.</p>
        <p>Jak i każdy inny</p>
        <h1 style="color:orangered;"><u>Akapity w css</u></h1>
        <p id="special">Przykład</p>
        <p class="example">Kolejny element</p>
    </body>
</html>
```

- [Aktualny podgląd kodu](https://prawy126.github.io/Technologie_Internetowe/lab3/index)
---
- zadanie 2 i 3
- 

```html
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
          
            margin: 0 auto;
            background-color: #b8ebc3;
            padding: 0 20px 20px 20px;
            border: 5px solid black;
            box-sizing: border-box;
        }

        img {
            max-width: 200px;
            max-height: 200px;
        }

        section {
            border: 1px solid red;
        }

        span {
            background-color: aqua;
            margin:10px;
            padding:10px;
            display: inline-block;
        }
        div {
            padding: 10px;
            margin: 10px;
        }
    </style>
</head>
<body>
    <section>Lorem impsum</section>
    <section>Lorem impsum <span>abc</span></section>
    <section>Lorem impsum <img src="obraz.png"></section>
</body>
</html>
```

- [Aktualny podgląd kodu](https://prawy126.github.io/Technologie_Intenetowe/lab3/index2)
---
- zadanie 4
- 

```html
<!DOCTYPE html>
<html lang="en">
    <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, inital-scale=1.0"> 
       <title>CSS Inheritance</title> 
       <link rel="stylesheet" type="text/css" href="cascade_examle.css">
        <style>
            section {
                border: 1px dashed red;
                color: red;
            }
            p{
                all:inherit;
            }
        </style>
    </head>
    <body>
        <section style="color: #000">
            Ten element będzie obramowany i będzie posiadał czerwoną czcionkę
            <p>
                Ten element nie będzie obramowany, ale będzie posiadał czerwoną czcionkę. 
            </p>
        </section>
    </body>
</html>
```

- [Aktualny podgląd kodu](https://prawy126.github.io/Technologie_Internetowe/lab3/zadanie4)
---
- zadanie 5
- 

```html
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zadanie 6</title>
    <link rel="stylesheet" type="text/css" href="zadanie5.css">
</head>
<body>
    <ul class="nav">
        <li class="nav-item">Home</li>
        <li class="nav-item">About</li>
        <li class="nav-item">Content</li>
    </ul>
    <section id="thisOne">
        <h1>Header</h1>
        <button class="btn-light">przycisk</button>
        <p id="thisOne">
            To jest akapit.
        </p>
    </section>
    <section style="border: #000 solid 2px">
        <h1>Header</h1>
        <button class="btn-light"> inny przycisk</button>

    </section>
    <p id="thirdOne">
        To jest kolejny akapit.
    </p>
    <section>
        <button class="btn-light">inny przycisk</button>
        <p>
            To jest trzeci akapit.
        </p>
    </section>
</body>
</html>
```

- [Aktualny podgląd kodu](https://prawy126.github.io/Technologie_Internetowe/lab3/zadanie5)
---
- zadanie 6
- 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="zadanie6.css">
</head>
<body>
    <table class="col-stripes">
        <thead>

        </thead>
        <tbody>
            <tr>
                <th>nagłówek</th>
                <th>nagłówek2</th>
                <th>nagłówek3</th>
            </tr>
            <tr>
                <th>1</th>
                <th>wartość1</th>
                <th>technologie</th>
            </tr>
            <tr>
                <th>2</th>
                <th>wartość2</th>
                <th>internetowe</th>
            </tr>
            <tr>
                <th>3</th>
                <th>wartość3</th>
                <th>CSS</th>
            </tr>
        </tbody>
    </table>
</body>
</html>
```

- [Aktualny podgląd kodu](https://prawy126.github.io/Technologie_Internetowe/lab3/zadanie6)
---
- zmiana wyglądu strony z labu poprzedniego wersja 1
- 

```html
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Strona internetowa</title>
    <style>
        body {
            background-color: #5d4e49;
            font-family: "Corbel", Arial, sans-serif;

        }
        input{
            border-radius: 10px;
        }
        select {
            border-radius: 10px;
        }
        button {
            border-radius: 10px;
            background-color: #414141;
            color:white;
        }
    </style>
</head>
<body>
    <form>
        <h1>Wyszukaj produkt</h1>
        <input type="search" value="🔍Nazwa produktu"><br>
        <br>
        <fieldset>
            <legend>Cena</legend>
            <label for="cena od">od </label>
            <input type="search" value="0,00">
            <label for="cena do">do</label>
            <input type="search" value="10000000,00">
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
                <input type="radio" name="5gwiazdkowy" value="5" checked>5,0⭐⭐⭐⭐⭐
            </label><br>
            <label>
                <input type="radio" name="4gwiazdkowy" value="4">4,0⭐⭐⭐⭐
            </label><br>
            <label>
                <input type="radio" name="3gwiazdkowy" value="3">3,0⭐⭐⭐
            </label><br>
            <label>
                <input type="radio" name="2gwiazdkowy" value="2">2,0⭐⭐
            </label><br>
            <label>
                <input type="radio" name="1gwiazdkowy" value="1">1,0⭐
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

- [Aktualny podgląd kodu](https://prawy126.github.io/Technologie_Internetowe/lab3/strona)
---
- zmiana wyglądu strony z labu poprzedniego wersja 2
- 

```html
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Strona internetowa</title>
    <style>
        body {
            background-color: #0033A0;
            font-family: Open Sans, sans-serif;
            margin: auto;
            padding:10px;
            text-align: center;
            color:white;
            
        }
        input{
            border-radius: 20px;
            padding: 10px;
        }
        select {
            border-radius: 10px;
        }
        button {
            border-radius: 30px;
            background-color: white;
            color:#0033A0;
            padding:10px;
            
        }
        fieldset {
            border:2px solid white;
            border-radius: 30px;
            border-top-width: 10px;
            border-left-width: 4px;
        }
        legend{
            margin-right: auto;
            
        }
        #wyszukiwarka{
            padding-left: 100px;
            padding-right: 100px;
            padding-bottom: 5px;
            padding-top: 5px;
        }
        label{
            color: white;                 
            font-weight: bold;            
            display: inline;              
            margin-right: 10px; 
        }
       
    </style>
</head>
<body>
    <form>
        <h1>WSZUKAJ PRODUKT</h1>
        <input type="search" value="🔍Nazwa produktu" id="wyszukiwarka"><br>
        <br>
        <fieldset>
            <legend>CENA</legend>
            <label for="cena od">OD </label>
            <input type="number" value="0.00">
            <label for="cena do">DO</label>
            <input type="number" value="10000000.00">
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
            <legend>OCENA PRODUKTU</legend>
            <label>
                <input type="radio" name="ocena" value="5" checked>5,0⭐⭐⭐⭐⭐
            </label><br>
            <label>
                <input type="radio" name="ocena" value="4">4,0⭐⭐⭐⭐
            </label><br>
            <label>
                <input type="radio" name="ocena" value="3">3,0⭐⭐⭐
            </label><br>
            <label>
                <input type="radio" name="ocena" value="2">2,0⭐⭐
            </label><br>
            <label>
                <input type="radio" name="ocena" value="1">1,0⭐
            </label><br>
        </fieldset><br>
        <label for="kolor">KOLOR:</label>
        <input type="color" value="#FFFF00"><br>
        <label for="DataProduktu">DATA PRODUKCJI:</label>
        <input type="datetime-local"><br>
        <label for="Ladowanie">SZYBKIE ŁADOWANIE: 0W</label>
        <input type="range" valuemax="150" valuemin="0" value="50" >150W 
        <fieldset>
            <legend>Inne:</legend>
            <label for="dual-sim"></label>
            <input type="checkbox"> DUAL-SIM
            <label for="5G"></label>
            <input type="checkbox">5G
            <label for="Gorilla glass"></label>
            <input type="checkbox">GORILLA GLASS
        </fieldset><br>
        <button>FILTRUJ</button>
        <button>USUŃ FILTRY</button>
    </form>
</body>
</html>
```

- [Aktualny podgląd kodu](https://prawy126.github.io/Technologie_Internetowe/lab3/strona2)

### Treści zadań
- [link](https://prawy126.github.io/Technologie_Internetowe/lab3/README)