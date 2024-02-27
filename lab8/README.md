---
layout: default
---

# Lab 8

### Zadanie 1
Zmienne w języku JavaScript definiujemy za pomocą 3 słów kluczowych:
- **let**
    - nie mogą być ponownie zadeklarowane w danym bloku {}
    - mogą mieć ponownie przypisaną wartość
    - nie są dostępne poza blokami {}
- var
    - może być pusta (undefined)
    -możemy ponownie przypisywać wartości
- **const**
o nie mogą być ponownie zadeklarowane w danym bloku
o nie mogą mieć ponownie przypisanej wartości
o nie są dostępne poza blokami {}

[link](https://developer.mozilla.org/pl/docs/Learn/JavaScript/First_steps/Variables)
JavaScript pozwala na elastyczne przypisywanie różnych typów danych do
tych samych zmiennych w trakcie działania programu.

```js
let zmienna = 10; // Zmienna 'zmienna' jest typu number (liczba)
console.log(typeof zmienna); // Wyświetli: number
zmienna = "Tekst"; // Teraz 'zmienna' jest typu string (tekst)
console.log(typeof zmienna); // Wyświetli: string
zmienna = true; // Teraz 'zmienna' jest typu boolean (wartość logiczna)
console.log(typeof zmienna); // Wyświetli: boolean
```
Podstawowe operatory:

|przypisania|= += -= *= /= %= <<=>>=|
|---|---|
|logiczne "LUB"|`ctrl+\` `ctrl+\` |
|logiczne "I"|&&|
|bitowe "LUB|`ctrl+\`|
|bitowe "XOR"|^|
|bitowe "I"| & |
|Porównanie| ==  =!|
|Porównanie wartości i typu| === !==|
|relacji|< <= > >= in instanceof|
|dodawanie/odejmowanie|+/-|
|mnożenie/dzielenie/modulo|*/`/`/%|

Utwórz zmienne:
a = "3.45"
b = 4
c = true
d
e = []
Wykonaj działania arytmetyczne +, -, *, / na parach zmiennych [a, b] [b,c]
[a, c]
Które z operacji arytmetycznych wykonały się poprawnie?
Czy kolejność zmiennych przy działaniach na zmiennych różnego typu ma
znaczenie?
Znajdź wytłumaczenie otrzymanych rezultatów w sieci.
[link](https://github.com/denysdovhan/wtfjs)

### Zadanie 2

Funkcje można zadeklarować na kilka sposobów.
Sposób 1: Definicja funkcji

```js
function mojaFunkcja() {
// kod funkcji
}
```
Sposób 2: Wyrażenie funkcyjne
Tworzona jest tu funkcja anonimowa (funkcja która nie ma nazwy) i jest
przypisywana do stałej mojaFunkcja

```js
const mojaFunkcja = function () {
// kod funkcji
};
```
Sposób 3: Funkcja strzałkowa (Arrow function) - ES6

```js
const mojaFunkcja = () => {
// kod funkcji
};
```

Sposób 4: Konstruktor Function

```js
const mojaFunkcja = new Function('arg1', 'arg2', 'return arg1 + arg2;');
```

W JavaScript funkcje są obiektami. To oznacza, że w JavaScript funkcje są
instancjami obiektów typu Function który ma dodatkowe cechy, takie jak
zdolność do wywoływania i posiadania kontekstu **(this)**. To sprawia, że są
bardzo elastyczne i użyteczne zarówno jako bloki kodu, jak i obiekty.

**Funkcje jako obiekty:**
Mogą być przypisywane do zmiennych i stałych:

```js
let myFunc = function () {
console.log("Funkcja została wywołana");
};
myFunc(); // wywołanie funkcji
```

Mogą być przekazywane jako argumenty do innych funkcji:

```js
function execute(func_var) {
func_var();
}
execute(function () {
console.log("Wywołana funkcja");
});
```

Mogą być zwracane przez inne funkcje:

```js
function createFunction() {
return function () {
console.log("Funkcja zwrócona przez inną funkcję");
};
}
const newFunction = createFunction(); // przypisuje obiekt zwrócony przez
funkcje do zmiennej
newFunction(); // obiekt ten jest funkcją
```

Mogą posiadać właściwości i metody:

```js
function myFunction() {
// kod funkcji
}
myFunction.nazwa = "Funkcja testowa";
console.log(myFunction.nazwa); // Wyświetli "Funkcja testowa"
```

Są instancjami obiektu typu Function:

```js
console.log(typeof myFunction); // Wyświetli "function"
console.log(myFunction instanceof Function); // Zwróci true
```

Aby utworzyć funkcję, która przyjmuje nieskończenie wiele parametrów
używamy operatora ... (rest parameter)

```js
function przyklad(...params) {
console.log(params);
}
przyklad(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
```

Przekazane jako parametry funkcji liczby od 1 do 10 są przechowywane w
tablicy co można zobaczyć w konsoli po uruchomieniu przykładu.

W pliku zadanie2.js napisz funkcję arithemticMean która przyjmuje dowolną
liczbę parametrów (liczb całkowitych) z których zwracana jest średnia
arytmetyczna.

### Zadanie 3
Załaduj następujący dokument index.html:

```HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>Nagłówek</h1>
    <p>Akapit</p>
</body>

</html>
```

Następnie włącz narzędzia deweloperskie w przeglądarce i wpisz:`document`
Następnie wpisz kolejno instrukcje i obserwuj co zostanie zwrócone przez
konsolę:

```
document.body
document.all
document.getElementsByTagName('h1')
document.getElementsByTagName('h1')[0]
document.getElementsByTagName('h1')[0].innerHTML
document.getElementsByTagName('h1')[0].innerText
document.getElementsByTagName('h1')[0].attributes
document.location
document.children
document.children[0].children
document.children[0].children[1].innerHTML
document.children[0].children[1].innerText
document.parentElement
document.body.parentElement
```

Poza możliwością jedynie podglądu elementów, możliwa jest ich edycja,
która będzie odwzorowana w przeglądarce natychmiast.

```
document.getElementsByTagName('p')[0].innerHTML = 'Akapit 2'
```
Ponadto możliwe jest programowe tworzenie nowych elementów i dodanie
ich do dokumentu:

```js
let newP = document.createElement('p');
newP.innerText = 'Programowo utworzony akapit';
document.body.append(newP);
```

[Tworzenie elementów](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)

Poniżej pokazano przykład, w którym tablice, zawierającą obiekty JSON
przekształcono w dynamicznie wygenerowaną tablicę HTML.
[link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)

```js
const exchangeRate = [{"currency":"dolar amerykański","code":"USD","mid":3.9432},
{"currency":"dolar
australijski","code":"AUD","mid":2.6897},
{"currency":"dolar
Hongkongu","code":"HKD","mid":0.5046},
{"currency":"dolar
kanadyjski","code":"CAD","mid":2.9752},
{"currency":"dolar
nowozelandzki","code":"NZD","mid":2.4884},
{"currency":"dolar
singapurski","code":"SGD","mid":2.9809}];
const HTMLTable = document.createElement('table');
const header = document.createElement('tr');
const currency = document.createElement('th');
currency.innerText = 'Waluta';
const currencyCode = document.createElement('th');
currencyCode.innerText = 'Kod waluty';
const meanExchangeRate = document.createElement('th');
meanExchangeRate.innerText = 'Kurs średni';
header.appendChild(currency);
header.appendChild(currencyCode);
header.appendChild(meanExchangeRate);
HTMLTable.appendChild(header);
for (let curr of exchangeRate) {
const row = document.createElement('tr');
const currency = document.createElement('td');
currency.innerText = curr.currency;
const currencyCode = document.createElement('td');
currencyCode.innerText = curr.code;
const meanExchangeRate = document.createElement('td');
meanExchangeRate.innerText = curr.mid;
row.append(currency);
row.append(currencyCode);
row.append(meanExchangeRate);
HTMLTable.appendChild(row);
}
document.body.append(HTMLTable);
```

Możliwe jest programowa zmiana wartości właściwości stylów CSS danego
elementu(ów). Tutaj sprawiono, że tabela posiada dość klasyczne
obramowanie. Jednak od razu warto zwrócić uwagę na fakt, że żeby to
uzyskać była potrzeba wykorzystania dwóch pętli:

```js
HTMLTable.style.borderCollapse = 'collapse';
for (let child of HTMLTable.children) {
child.style.border = '1px solid black';
for (let grandchild of child.children) {
grandchild.style.border = '1px solid black';
}
}
```

<span style="color:red">Co ważne w rzeczywistości dodamy każdemu elementowi inline style.</span>
Alternatywą jest programowe dodanie samego stylu (który jest przecież
atrybutem HTML):

```js
const HTMLTable2 = HTMLTable.cloneNode(true); // tworzymy kopię elementu zanim
potem zmodyfikujemy mu style, true oznacza, że kopiujemy element z potomkami

HTMLTable.style.borderCollapse = 'collapse';
for (let child of HTMLTable.children) {
child.style.border = '1px solid black';
for (let grandchild of child.children) {
grandchild.style.border = '1px solid black';
}
}
HTMLTable2.setAttribute('class', 'my-table');
document.body.append(HTMLTable);
document.body.append(HTMLTable2);
.my-table {
border-collapse: collapse;
}
.my-table * {
border: 1px solid black;
}
```

Jest to lepsze rozwiązanie w przypadku, gdy chcemy w ten sposób
ostylować dużą liczbę elementów, jak i upraszcza zdecydowanie skrypt.
Na podstawie przykładów napisz program, który wygeneruje programowo
tabelę, na bazie następującej tablicy w JavaScript:

```js
const data = [
['Imię', 'Nazwisko', 'Wiek'],
['John', 'Doe', 30],
['Alice', 'Smith', 28],
['Bob', 'Brown', 35]
];
```
Następnie przekształć powstały kod w funkcję, która będzie w stanie
wygenerować tabelę dla tablicy o dowolnym rozmiarze. Funkcja powinna
przyjmować jako parametr informacje czy tablica ma nagłówki i założyć, że
wtedy pierwszy element tablicy jest nagłówkiem.

### Zadanie 4

Zapoznaj się z poniższymi linkami:
Zdarzenia elementów html (event listener)
[link](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event)
CSS Object Model
[link](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model)
Zmiana właściwości dla elementu html

[link](https://developer.mozilla.org/en-US/docs/Web/APICSSStyleDeclaration/setProperty)

W pliku zadanie4.html Utwórz kalkulator opłacalności zakupu pizzy. Na
podstawie wprowadzonych przez użytkownika danych: cena, średnica dla
małej i dużej pizzy, program zaznacza kolorem zielonym który zakup w
przeliczeniu cena/cm2 jest bardziej opłacalny.

### Zadanie 5
BOM (Browser Object Model) to część interfejsu JavaScriptu, która
umożliwia interakcję z przeglądarką. Oto kilka kluczowych właściwości i
metod BOM:
- **window**: Główne okno przeglądarki, reprezentujące globalne
środowisko przeglądarki. Jest to obiekt (podobnie jak document).
- **window.document**: Odwołuje się do aktualnego dokumentu w oknie
przeglądarki.
- **window.innerWidth** i window.innerHeight: Zwracają szerokość i
wysokość widocznego obszaru okna przeglądarki.
- **window.location**: Udostępnia informacje o aktualnym adresie URL
dokumentu i umożliwia jego manipulację.
- **window.navigator**: Zapewnia informacje o przeglądarce
użytkownika, takie jak nazwa, wersja i platforma.
- **window.alert()**: Wyświetla okno dialogowe z komunikatem dla
użytkownika.
- **window.localStorage**: przechowuje dane trwale w przeglądarce,
pozostające nawet po zamknięciu przeglądarki. Te dane mogą być
używane na różnych sesjach i urządzeniach użytkownika.
- **window.sessionStorage**: przechowuje dane sesji dla określonej
karty lub okna przeglądarki. Dane te są usuwane po zamknięciu karty
lub przeglądarki.
- **window.console**: obiekt wbudowany w przeglądarkę, który
umożliwia dostęp do konsoli deweloperskiej. Pozwala programistom
na wyświetlanie informacji, ostrzeżeń, błędów oraz debugowanie
kodu JavaScript za pomocą metod takich jak log, warn, error, debug,
itp.
- **window.onload**: to zdarzenie wywoływane, gdy cała zawartość
strony została w pełni załadowana, włącznie z elementami HTML, styli
CSS, obrazami, skryptami itp. Jest to moment, w którym wszystkie
zasoby strony są gotowe do interakcji i wykorzystania przez skrypty
JavaScript.

Utwórz stoper, który po zamknięciu okna przeglądarki będzie kontynuował
odliczanie w miejscu, w którym skończył.
Skrypt powinien zaczynać działanie dopiero gdy wszystkie elementy zostaną
załadowane:
[link](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event)
Do przechowania czasu wykorzystaj localStorage:
[link](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
Funkcja setInterval() będzie wywoływać wskazany fragment kodu co x
milisekund, można wykorzystać ją do aktualizacji liczby sekund:
[link](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)