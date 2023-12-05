---
layout: default
---

# LAB 6
- ZADANIE 1
- 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div{
            background-size: 100%;
            width: 100px;
            height: 100px;
            animation-name: zmiana;
            background-image: url("logo_barwne.png");
            animation-duration: 6s; 
            animation-iteration-count: infinite; 
           
        }
        div#nastepny:hover{
            animation-name: powiekszenie;
            animation-duration: 2s;
            animation-iteration-count: 1;
        }
        div#dookola:hover{
            animation-name: dookola;
            animation-duration: 5s;
            animation-iteration-count: infinite;
        }
        
        @keyframes zmiana {
            from{background-image: url("logo_barwne.png");}
            to{background-image: url("logo_monochromatyczne.png");
        }
        }
        @keyframes powiekszenie {
            from{background-image: url("logo_barwne.png");}
            to{width:  200px; height: 200px;}
        }
        @keyframes dookola {
            from{transform: rotate(0);}
            to{transform: rotate(360deg);}
        }
    </style>
</head>
<body>
    <div>
        
    </div>
    <div id="nastepny">

    </div>
    <div id="dookola">

    </div>
</body>
</html>
```

- [Podgląd aktualny podgląd jak wygląda strona](https://prawy126.github.io/Technologie_Intenetowe/lab6/zadanie1)
---
- ZADANIE 2
- 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
           
            display: flex;
            justify-content: center; 
            align-items: center;
            
            
        }
       
        @keyframes obracanie{
            from{transform: rotate(0);}
            to{transform: rotate(360deg);}
        }
        .loader,
.loader:after {
  border-radius: 50%;
  width: 10em;
  height: 10em;
}
.loader {
    border-top: 1.1em solid rgba(255, 255, 255, 0.2);
  border-right: 1.1em solid rgba(255, 255, 255, 0.2);
  border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
  border-left: 1.1em solid #000000;
  animation: obracanie 1.1s infinite linear;
}
    </style>
</head>
<body>
     <div class="loader"></div>
</body>
</html>
```

- [Podgląd aktualny podgląd jak wygląda strona](https://prawy126.github.io/Technologie_Intenetowe/lab6/zadanie2)
---
- ZADANIE 3 I 4
- 

```html
<!DOCTYPE html>
<html>

<head>

<style>
:root {
  --form-control-color: rebeccapurple;
  --form-control-disabled: #959495;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
  margin: 0;
}

form {
  display: grid;
  place-content: center;
  min-height: 110vh;
  
}


.form-control {
  font-family: system-ui, sans-serif;
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.1;
  display: grid;
  grid-template-columns: 1em auto;
  gap: 0.5em;
}

.form-control + .form-control {
  margin-top: 1em;
}

.form-control--disabled {
  color: var(--form-control-disabled);
  cursor: not-allowed;
}

input[type="checkbox"] {
  -webkit-appearance: none;
  appearance: none;
  background-color: var(--form-background);
  margin: 0;

  font: inherit;
  color: currentColor;
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid currentColor;
  border-radius: 0.15em;
  transform: translateY(-0.075em);

  display: grid;
  place-content: center;

}

input[type="checkbox"]::before {
  content: "";
  width: 0.65em;
  height: 0.65em;
  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  transform: scale(0);
  transform-origin: bottom left;
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em var(--form-control-color);
  background-color: CanvasText;
}

input[type="checkbox"]:checked::before {
  transform: scale(1);
}

input[type="checkbox"]:focus {
  outline: max(2px, 0.15em) solid currentColor;
  outline-offset: max(2px, 0.15em);
}

input[type="checkbox"]:disabled {
  --form-control-color: var(--form-control-disabled);

  color: var(--form-control-disabled);
  cursor: not-allowed;

}

input:checked{
  animation-name: powiekszanie;
  animation-duration: 2s;
  animation-iteration-count: 1;
}

@keyframes powiekszanie {
  from { transform: scale(1); }
  to { transform: scale(2); }
}

button{
      font-family: system-ui, sans-serif;
      font-size: 1rem;
      font-weight: bold;
      padding: 10px 20px;
      margin-top: 60px;
      border: 2px solid black;
      border-radius: 50%;
      background-color: white;
      cursor: pointer;
      outline: none;
      transition: all 1.0s ease;
     
    }

    button:hover {
      border-color: green;
      
      transform: scale(1.2);
      
    }
    button:active::after {
      content: '✓';
    }
    *{
      margin:0;
      padding:0;
    }
    .container {
      background: #f0f0f0;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left:100px;
      width: 10px;
      height: 10px;
      font-size: 15px;
    }
    .box {
      border-radius: 20px;
      width: 60px;
      height: 60px;
      background: #f0f0f0;
      
      animation: anime 3s cubic-bezier(0.16, 1, 0.3, 1) 1s infinite alternate;
      /* animation-fill-mode: forwards; */
    }

    @keyframes anime {
      0% {
        width: 10px;
        height: 10px;
       
        background: #f0f0f0;
        
      }
      25% {
        width: 10px;
        height: 30px;
        
        background: #f8f8f8;
      
      }
      50% {
        width: 30px;
        height: 60px;
        
        background: #f8f8f8;
        
      }
      100% {
        width: 60px;
        height: 10px;
        
        background: #fafafa;
        
      }
    }
    label{
      margin-top: 20px;
    }
    
</style>
</head>

<body>

<form action="">
    <label class="form-control">
      <input type="checkbox" name="checkbox" />
      <div class="container"><div class="box">Checkbox</div></div>
    </label>
  
    <label class="form-control">
      <input type="checkbox" name="checkbox-checked" checked />
      <div class="container"><div class="box">Checkbox - checked</div></div>
    </label>
  
    <label class="form-control form-control--disabled">
      <input type="checkbox" name="checkbox-disabled" disabled />
      <div class="container"><div class="box">Checkbox Disabled</div></div>
    </label>
  
    <label class="form-control form-control--disabled">
      <input type="checkbox" name="checkbox-disabled-checked" checked disabled />
      <div class="container"><div class="box">Checkbox Disabled - checked</div></div>
    </label>
    <button type="submit">Submit</button>
  </form>
</body>
</html>
```

- [Podgląd aktualny podgląd jak wygląda strona](https://prawy126.github.io/Technologie_Intenetowe/lab6/custom-checkbox)
---
- ZADANIE 5
- 

```html
<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsywny Grid CSS</title>
  <style>
    .container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-areas: 
        "header header header"
        "main main sidebar"
        "footer footer footer";
      gap: 10px;
    }

    .header {
      grid-area: header;
      background-color: #8ca1af;
    }

    .main {
      grid-area: main;
      background-color: #b2c2d1;
    }

    .sidebar {
      grid-area: sidebar;
      background-color: #d1dfe9;
      overflow: hidden;
      transition: max-height 0.3s;
      max-height: 0;
    }

    .footer {
      grid-area: footer;
      background-color: #e1eff8;
    }

    /* Ukrycie checkboxa */
    .sidebar-checkbox {
      display: none;
    }

    /* Styl dla przełącznika sidebar */
    .sidebar-toggle {
      grid-area: sidebar-toggle;
      background-color: #c2d1e1;
      text-align: center;
      padding: 10px;
      cursor: pointer;
    }

    .sidebar-toggle label {
      display: block;
      cursor: pointer;
    }

    /* Style dla rozwinięcia sidebar */
    .sidebar-checkbox:checked ~ .container .sidebar {
      max-height: 500px; /* Wysokość maksymalna kiedy sidebar jest rozwinięty */
    }

    @media (max-width: 600px) {
      .container {
        grid-template-columns: 1fr;
        grid-template-areas: 
          "header"
          "main"
          "sidebar-toggle"
          "sidebar"
          "footer";
      }
    }

    /* Dodatkowe style dla zadania, gdzie kolumna main ma być 5 razy szersza niż sidebar */
    @media (min-width: 601px) {
      .container {
        grid-template-columns: 5fr 1fr;
      }
    }
  </style>
</head>
<body>

<input type="checkbox" id="sidebar-checkbox" class="sidebar-checkbox">
<label for="sidebar-checkbox" class="sidebar-toggle">Pokaż/Zwiń pasek boczny</label>

<div class="container">
  <div class="header">Nagłówek</div>
  <div class="main">Główna treść</div>
  <div class="sidebar" id="sidebar">Pasek boczny</div>
  <div class="footer">Stopka</div>
</div>

</body>
</html>
```

- [Podgląd aktualny podgląd jak wygląda strona](https://prawy126.github.io/Technologie_Intenetowe/lab5/zadanie5)

