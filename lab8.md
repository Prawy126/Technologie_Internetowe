---
layout: default
---
# LAB 8
 ## ZADANIE 1
- 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS</title>
</head>
<body>
    <script>
         a = 3.45;
         b = 4;
         c = true;
         var d;
         e = [];
        console.log(a+b);
        console.log(b-c);
        console.log(a/c);
    </script>
</body>
</html>
```

- [Podgląd aktualny podgląd jak wygląda strona](https://prawy126.github.io/Technologie_Internetowe/lab8/zadanie1)


- ## ZADANIE 2
 

```js
function arithmeticMean(...params){
    suma = 0;
    suma += params;
    srednia = suma / params.length;
    return srednia;
}
```

- [Podgląd aktualny podgląd jak wygląda strona](https://github.com/prawy126/Technologie_Internetowe/lab8/zadanie2)


- ## ZADANIE 3


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .my-table {
 border-collapse: collapse;
 }
.my-table * {
 border: 1px solid black;
}
    </style>
</head>
<body>
    <h1>Nagłówek</h1>
    <p>Akapit</p>
    <script>
        let newP = document.createElement('p');
        newP.innerText = "Programowo utworzony akapit";
        document.body.append(newP);

        const exchangeRate = [
  {"currency":"dolar amerykański","code":"USD","mid":3.9432},
  {"currency":"dolar australijski","code":"AUD","mid":2.6897},
  {"currency":"dolar Hongkongu","code":"HKD","mid":0.5046},
  {"currency":"dolar kanadyjski","code":"CAD","mid":2.9752},
  {"currency":"dolar nowozelandzki","code":"NZD","mid":2.4884},
  {"currency":"dolar singapurski","code":"SGD","mid":2.9809}
];

const HTMLTable = document.createElement('table');
const header = document.createElement('tr');
const headerCurrency = document.createElement('th');
headerCurrency.innerText = 'Waluta';
const headerCurrencyCode = document.createElement('th');
headerCurrencyCode.innerText = 'Kod waluty';
const headerMeanExchangeRate = document.createElement('th');
headerMeanExchangeRate.innerText = 'Kurs średni';
header.appendChild(headerCurrency);
header.appendChild(headerCurrencyCode);
header.appendChild(headerMeanExchangeRate);
HTMLTable.appendChild(header);

for (let curr of exchangeRate) {
  const row = document.createElement('tr');
  const cellCurrency = document.createElement('td');
  cellCurrency.innerText = curr.currency;
  const cellCurrencyCode = document.createElement('td');
  cellCurrencyCode.innerText = curr.code;
  const cellMeanExchangeRate = document.createElement('td');
  cellMeanExchangeRate.innerText = curr.mid;
  row.append(cellCurrency);
  row.append(cellCurrencyCode);
  row.append(cellMeanExchangeRate);
  HTMLTable.appendChild(row);
}

document.body.append(HTMLTable);

HTMLTable.style.borderCollapse = 'collapse';
 for (let child of HTMLTable.children) {
 child.style.border = '1px solid black';
 for (let grandchild of child.children) {
 grandchild.style.border = '1px solid black';
 }
 }

 const HTMLTable2 = HTMLTable.cloneNode(true); // tworzymy kopię elementu zanim 
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

    </script>
</body>
</html>
```

- [Podgląd aktualny podgląd jak wygląda strona](https://prawy126.github.io/Technologie_Internetowe/lab8/zadanie3)


- ## ZADANIE 4
 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Kalkulator opłacalności pizzy</h1>
    
    <label name="cena">Pizza 1</label><br>
    <input type="number" id="cena" placeholder="Podaj cenę pizzy"><br>
    <input type="number" id="malaPizza" placeholder="Podaj średnicę pizzy"><br>

    <label name="cena">Pizza 2</label><br>
    <input type="number" id="cena2" placeholder="Podaj cenę pizzy"><br>
    <input type="number" id="duzaPizza" placeholder="Podaj średnicę pizzy">
    
    <br><br><button>Oblicz</button>
    <script>
        const button = document.querySelector("button");

        button.addEventListener("click", (event) =>{
            cena = document.getElementById('cena').value;
            malaPizza = document.getElementById('malaPizza').value;
            cena2 = document.getElementById('cena2').value;
            duzaPizz = document.getElementById('duzaPizza').value;
            var a = document.getElementById("cena");
            var b = document.getElementById("cena2");
            
            if(duzaPizz>malaPizza){
                if(cena2 == cena){
                   a.style.background = "red";
                   b.style.background = "green";
                }else if(cena2<cena){
                    a.style.background = "red"
                    b.style.background = "green";
            }else if(2*cena == cena2 && duzaPizz == malaPizza*2){
                    a.style.background = "green"
                    b.style.background = "green";
            }
            else {
                a.style.background = "green"
                b.style.background = "red";
            }
            }else if(malaPizza == duzaPizz){
                if(cena == cena2){
                    a.style.background = "green"
                    b.style.background = "green";
                }else if(cena>cena2){
                    a.style.background = "red"
                    b.style.background = "green";
                }else{
                    a.style.background = "green"
                    b.style.background = "red";
                }
            }else{
                if(cena<cena2){
                    a.style.background = "red"
                    b.style.background = "green"; 
                }else if(cena == cena2){
                    a.style.background = "green"
                    b.style.background = "green";
                }else{
                    a.style.background = "green"
                    b.style.background = "red";
                }
            }
            
        })
    </script>
</body>
</html>
```

- [Podgląd aktualny podgląd jak wygląda strona](https://prawy126.github.io/Technologie_Internetowe/lab8/zadanie4)


- ## ZADANIE 5
 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stopwatch</title>
</head>
<body>
    <h1>Zegarek</h1>
    <div id="stopwatchDisplay">00:00:00</div>
    <button id="startButton">Start</button>
    <button id="stopButton">Stop</button>
    <button id="resetButton">Reset</button>

    <script>
        let startTime;
        let updatedTime;
        let savedTime = localStorage.getItem('savedTime') ? parseInt(localStorage.getItem('savedTime')) : 0;
        let timerInterval;
        let running = false;

        function startTimer() {
            if (!running) {
                startTime = new Date().getTime();
                if (savedTime) {
                    startTime -= savedTime;
                }
                timerInterval = setInterval(updateDisplay, 1);
                running = true;
            }
        }

        function stopTimer() {
            if (running) {
                clearInterval(timerInterval);
                savedTime = updatedTime - startTime;
                localStorage.setItem('savedTime', savedTime);
                running = false;
            }
        }

        function resetTimer() {
            clearInterval(timerInterval);
            savedTime = 0;
            localStorage.setItem('savedTime', savedTime);
            running = false;
            document.getElementById('stopwatchDisplay').innerHTML = '00:00:00';
        }

        function updateDisplay() {
            updatedTime = new Date().getTime();
            let timeDifference = updatedTime - startTime;

            let hours = Math.floor(timeDifference / (1000 * 60 * 60));
            let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            hours = (hours < 10) ? "0" + hours : hours;
            minutes = (minutes < 10) ? "0" + minutes : minutes;
            seconds = (seconds < 10) ? "0" + seconds : seconds;

            document.getElementById('stopwatchDisplay').innerHTML = hours + ':' + minutes + ':' + seconds;
        }

        // Event Listeners
        document.getElementById('startButton').addEventListener('click', startTimer);
        document.getElementById('stopButton').addEventListener('click', stopTimer);
        document.getElementById('resetButton').addEventListener('click', resetTimer);

        // Initialize the display with saved time
        if (savedTime) {
            let hours = Math.floor(savedTime / (1000 * 60 * 60));
            let minutes = Math.floor((savedTime % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((savedTime % (1000 * 60)) / 1000);
            hours = (hours < 10) ? "0" + hours : hours;
            minutes = (minutes < 10) ? "0" + minutes : minutes;
            seconds = (seconds < 10) ? "0" + seconds : seconds;
            document.getElementById('stopwatchDisplay').innerHTML = hours + ':' + minutes + ':' + seconds;
        }
    </script>
</body>
</html>

```

- [Podgląd aktualny podgląd jak wygląda strona](https://prawy126.github.io/Technologie_Internetowe/lab8/zadanie5)

### Treści zadań
- [link](https://prawy126.github.io/Technologie_Internetowe/lab8/README)

