---
layout: default
---

# LAB 5
- ZADANIE 1 I 2
- 

```html
<!DOCTYPE html>
<html>
    <head>
    <meta charset="UTF-8" />
    <title>title</title>
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <style>
       img{
        display: block; /* changed from flex to block for proper image display */
        margin: auto; /* center the image */
        width: 200px;
        height: 200px;
    }
    .container{
        display: flex;
        align-items: stretch;
        justify-content: space-around;
        gap: 10px;
        max-width: 500px;
        flex-wrap: wrap;
        scrollbar-width: none; /* firefox */
        background: linear-gradient(to right, rgba(0, 0, 0, 0.274) 0%, rgba(0, 0, 0, 0.274) 50%);
    }

    .container::-webkit-scrollbar {
        display: none;
    }

    .card{
        min-width: 200px; /* min-width to ensure cards don't get too small */
        flex-grow: 1; /* allows card to grow */
        flex-shrink: 1; /* allows card to shrink */
        flex-basis: calc(50% - 10px); /* subtract the gap from the flex-basis */
        border-radius: 10px;
        background-color: rgb(239, 239, 239);
        border: 0px solid black;
        display: flex;
        align-items: center;
        flex-direction: column; 
        margin: 0;
        padding: 0;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2); /* Optional: adds shadow for depth */
    }

    .main-text{
        display: flex;
        margin: 10px;
        padding: 15px;
        justify-content: center;
        text-align: justify;
        font-size: 20px;
        flex: 1; /* allows this div to fill the space in the flex container */
    }

    .bottom{
        border-radius: 10px;
        margin: auto;
        bottom: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        text-align: center;
        background-color: silver;
    }
    h1,h2,h3{
        text-align: center;
    }
    </style>
    </head>
<body>
    <div class="container">
        <div class="card">
            <h3>Nazwa</h3>
            <img src="logo_UR_blue.png">
            <div class="main-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique sapien 
            ac erat tincidunt, sit amet dignissim lectus vulputate. Donec id iaculis velit. 
            Aliquam vel malesuada erat. Praesent non magna ac massa aliquet tincidunt vel in 
            massa. Phasellus feugiat est vel leo finibus congue.
        </div>
        <div class="bottom"><span><ion-icon name="time-outline"></ion-icon>
            50 min</span> <button><ion-icon name="heart-outline"></ion-icon></button></div>
        </div>
        <div class="card">
            <h3>Nazwa</h3>
            <img src="logo_UR_blue.png">
            <div class="main-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique sapien 
                ac erat tincidunt, sit amet dignissim lectus vulputate. Donec id iaculis velit. 
                Aliquam vel malesuada erat. Praesent non magna ac massa aliquet tincidunt vel in 
                massa. Phasellus feugiat est vel leo finibus congue.
            </div>
        <div class="bottom"><span><ion-icon name="time-outline"></ion-icon>
            120 min</span> <button><ion-icon name="heart-outline"></ion-icon></button></div>
        </div>
        <div class="card">
            <h3>Nazwa</h3>
            <img src="logo_UR_blue.png">
            <div class="main-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi 
                tristique sapien ac erat tincidunt, sit amet dignissim lectus vulputate.
            </div>
        <div class="bottom"><span><ion-icon name="time-outline"></ion-icon> 30 min</span>
            <button><ion-icon name="heart-outline"></ion-icon></button></div>
        </div>
    
    </div>

    </body>
</html>

```

- [Podgląd aktualny podgląd jak wygląda strona](https://prawy126.github.io/Technologie_Internetowe/lab5/zadanie2)
---
- ZADANIE 3 I 4
- 

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Flexbox intro</title>
</head>
<style>
    * {
    box-sizing: border-box;
    }
    @media screen and (min-width: 400px) {
        .take-all-space {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-width: 100vw;
        min-height: 100vh;
        margin: 0px; 
        #toggle, #toggle1 {
        display:none;
    }
        
    }
        }
        .main-content {
        display: flex;
        flex-direction: row;
        flex-grow: 2;
        align-items: stretch;
        }
        .main-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        }
        .main-section section {
        padding: 10px;
        max-width: 70%;
        text-align: center;
        }
        .navbar {
        background-color: #313131;
        }
        .navbar-links {
        display: flex;
        flex-direction: row;
        list-style-type: none;
        justify-content: space-evenly;
        padding: 0px;
        }
        .navbar-links li a {
        color: #fff;
        text-decoration: none;
        padding: 5px;
        }
        .aside {
        background-color: #8e8c8c;
        min-width: 25%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: justify;
        }
        .aside ul {
        display: flex;
        flex-direction: column;
        list-style-type: none;
        justify-content: space-evenly;
        padding: 0px;
        }
        .aside li a {
        color: #000000;
        text-decoration: none;
        padding: 5px;
        }
        .footer {
        background-color: #313131;
        }
        .footer-links {
        display: flex;
        flex-direction: row;
        list-style-type: none;
        justify-content: space-evenly;
        padding: 0px;
        }
        .footer-links li a {
        color: #fff;
        text-decoration: none;
        padding: 5px;
        }
    

    @media screen and (max-width: 400px) {
        .take-all-space {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-width: 100vw;
        min-height: 100vh;
        margin: 0px;
        }
        #toggle, #toggle1 {
        display:inline;
    }
        .main-content {
        display: block;
        flex-direction: row;
        flex-grow: 2;
        align-items: center;
        }
        .main-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        }
        .main-section section {
        padding: 10px;
        max-width: 70%;
        text-align: center;
        }
        .navbar {
        background-color: #313131;
        display: flex;
        align-items: baseline;
        }

        #toggle {
        display: none;
        border: 0px;
        }
        #toggle:checked ~ .navbar-links {
        display: flex;
        flex-direction: column;
        list-style-type: none;
        justify-content: space-evenly;
        padding: 0px;
        }
        .navbar-links {
        display: none;
        flex-direction: row;
        list-style-type: none;
        justify-content: space-evenly;
        padding: 0px;
        }
        .aside-links1 {
        display: none;
        flex-direction: row;
        list-style-type: none;
        justify-content: space-evenly;
        padding: 0px;
        }
        .navbar label {
        color: white;
        background-color: #8e8c8c;
        min-width: 30px;
        text-align: center;
        margin: 5px;
        display: flex;
        }
        .navbar-links li a {
        color: #fff;
        text-decoration: none;
        padding: 5px;
        }
        #toggle1 {
                display: none;
            }
        #toggle1:checked ~ .aside-links1 {
        display: flex;
        flex-direction: column;
        list-style-type: none;
        justify-content: space-evenly;
        padding: 0px;
        }
        .aside {
        display: none;
        flex-direction: row;
        list-style-type: none;
        justify-content: space-evenly;
        padding: 0px;
        }
        .navbar label {
        color: white;
        background-color: #8e8c8c;
        min-width: 30px;
        text-align: center;
        margin: 5px;
        display: flex;
        }
        .aside label {
                display: block; /* Pokaż etykietę na małych ekranach */
                color: white;
                background-color: #313131;
                text-align: center;
                cursor: pointer;
                padding: 5px;
                margin-top: 10px;
            }

        .aside li a {
        color: #fff;
        text-decoration: none;
        padding: 5px;
        }
        .aside {
        background-color: #8e8c8c;
        min-height: 25%;
        display: flex;
        flex-direction: column;
        align-items: center;
        }
        .aside ul {
        display: none;
        flex-direction: row;
        list-style-type: none;
        justify-content: space-evenly;
        padding: 0px;
        }
        .footer {
        background-color: #313131;
        }
        .footer-links {
        display: flex;
        flex-direction: row;
        list-style-type: none;
        justify-content: space-evenly;
        padding: 0px;
        }
        .footer-links li a {
        color: #fff;
        text-decoration: none;
        padding: 5px;
    }
    
}
</style>
<body class="take-all-space">
    <nav class="navbar">
        <label for="toggle">☰</label><input type="checkbox" id="toggle">
        <ul class="navbar-links">
            <li><a href="#">Strona główna</a></li>
            <li><a href="#">Podstrona 1</a></li>
            <li><a href="#">Podstrona 2</a></li>
            <li><a href="#">Podstrona 3</a></li>
        </ul>
    </nav>
    <div class="main-content">
        <aside class="aside">
        <h2>Mapa strony</h2>
        <label for="toggle1">☰</label><input type="checkbox" id="toggle1">
        <ul class="aside-links1">
            <li><a href="#">link1</a></li>
            <li><a href="#">link2</a></li>
            <li><a href="#">link3</a></li>
            <li><a href="#">link4</a></li>
        </ul>
        </aside>
        <div class="main-section">
            <h1>Strona główna</h1>
            <section>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique sapien ac erat tincidunt, sit amet dignissim lectus vulputate. Donec id iaculis velit. Aliquam vel malesuada erat. Praesent non magna ac massa
            aliquet tincidunt vel in massa. Phasellus feugiat est vel leo finibus
            congue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique
            sapien ac erat tincidunt, sit amet dignissim lectus vulputate. Donec id
            iaculis velit. Aliquam vel malesuada erat. Praesent non magna ac massa
            aliquet tincidunt vel in massa. Phasellus feugiat est vel leo finibus
            congue.</section>
            <section>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique sapien ac erat tincidunt, sit amet dignissim lectus vulputate. Donec id iaculis velit. Aliquam vel malesuada erat. Praesent non magna ac massa
            aliquet tincidunt vel in massa. Phasellus feugiat est vel leo finibus
            congue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique
            sapien ac erat tincidunt, sit amet dignissim lectus vulputate. Donec id
            iaculis velit. Aliquam vel malesuada erat. Praesent non magna ac massa
            aliquet tincidunt vel in massa. Phasellus feugiat est vel leo finibus
            congue.</section>
        </div>
    </div>
    <footer class="footer">
        <ul class="footer-links">
            <li><a href="#">link1</a></li>
            <li><a href="#">link2</a></li>
            <li><a href="#">link3</a></li>
            <li><a href="#">link4</a></li>
        </ul>
    </footer>
</body>
</html>
```

- [Podgląd aktualny podgląd jak wygląda strona](https://prawy126.github.io/Technologie_Internetowe/lab5/zadanie4)
---
- ZADANIE 6
- 

```html
<!DOCTYPE html>
<html>
    <head>
    <meta charset="UTF-8" />
    <title>title</title>
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <style>
       img{
        display: block; /* changed from flex to block for proper image display */
        margin: auto; /* center the image */
        width: 200px;
        height: 200px;
    }
    .container{
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: auto;
        gap:10px;
    }

    .container::-webkit-scrollbar {
        display: none;
    }

    .card{
       /* min-width: 200px;  min-width to ensure cards don't get too small */
        flex-grow: 1; /* allows card to grow */
        flex-shrink: 1; /* allows card to shrink */
        flex-basis: calc(50% - 10px); /* subtract the gap from the flex-basis */
        border-radius: 10px;
        background-color: rgb(239, 239, 239);
        border: 0px solid black;
        display: flex;
        align-items: center;
        flex-direction: column; 
        margin: 0;
        padding: 0;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2); /* Optional: adds shadow for depth */
    }

    .main-text{
        display: flex;
        margin: 10px;
        padding: 15px;
        justify-content: center;
        text-align: justify;
        font-size: 20px;
        flex: 1; /* allows this div to fill the space in the flex container */
    }

    .bottom{
        border-radius: 10px;
        margin: auto;
        bottom: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        text-align: center;
        background-color: silver;
    }
    h1,h2,h3{
        text-align: center;
    }
    </style>
    </head>
<body>
    <div class="container">
        <div class="card">
            <h3>Nazwa</h3>
            <img src="logo_UR_blue.png">
            <div class="main-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique sapien 
            ac erat tincidunt, sit amet dignissim lectus vulputate. Donec id iaculis velit. 
            Aliquam vel malesuada erat. Praesent non magna ac massa aliquet tincidunt vel in 
            massa. Phasellus feugiat est vel leo finibus congue.
        </div>
        <div class="bottom"><span><ion-icon name="time-outline"></ion-icon>
            50 min</span> <button><ion-icon name="heart-outline"></ion-icon></button></div>
        </div>
        <div class="card">
            <h3>Nazwa</h3>
            <img src="logo_UR_blue.png">
            <div class="main-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique sapien 
                ac erat tincidunt, sit amet dignissim lectus vulputate. Donec id iaculis velit. 
                Aliquam vel malesuada erat. Praesent non magna ac massa aliquet tincidunt vel in 
                massa. Phasellus feugiat est vel leo finibus congue.
            </div>
        <div class="bottom"><span><ion-icon name="time-outline"></ion-icon>
            120 min</span> <button><ion-icon name="heart-outline"></ion-icon></button></div>
        </div>
        <div class="card">
            <h3>Nazwa</h3>
            <img src="logo_UR_blue.png">
            <div class="main-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi 
                tristique sapien ac erat tincidunt, sit amet dignissim lectus vulputate.
            </div>
        <div class="bottom"><span><ion-icon name="time-outline"></ion-icon> 30 min</span>
            <button><ion-icon name="heart-outline"></ion-icon></button></div>
        </div>
        <div class="card">
            <h3>Nazwa</h3>
            <img src="logo_UR_blue.png">
            <div class="main-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi 
                tristique sapien ac erat tincidunt, sit amet dignissim lectus vulputate.
            </div>
        <div class="bottom"><span><ion-icon name="time-outline"></ion-icon> 30 min</span>
            <button><ion-icon name="heart-outline"></ion-icon></button></div>
        </div>
        <div class="card">
            <h3>Nazwa</h3>
            <img src="logo_UR_blue.png">
            <div class="main-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi 
                tristique sapien ac erat tincidunt, sit amet dignissim lectus vulputate.
            </div>
        <div class="bottom"><span><ion-icon name="time-outline"></ion-icon> 30 min</span>
            <button><ion-icon name="heart-outline"></ion-icon></button></div>
        </div>
        <div class="card">
            <h3>Nazwa</h3>
            <img src="logo_UR_blue.png">
            <div class="main-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi 
                tristique sapien ac erat tincidunt, sit amet dignissim lectus vulputate.
            </div>
        <div class="bottom"><span><ion-icon name="time-outline"></ion-icon> 30 min</span>
            <button><ion-icon name="heart-outline"></ion-icon></button></div>
        </div>
        <div class="card">
            <h3>Nazwa</h3>
            <img src="logo_UR_blue.png">
            <div class="main-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi 
                tristique sapien ac erat tincidunt, sit amet dignissim lectus vulputate.
            </div>
        <div class="bottom"><span><ion-icon name="time-outline"></ion-icon> 30 min</span>
            <button><ion-icon name="heart-outline"></ion-icon></button></div>
        </div>
        <div class="card">
            <h3>Nazwa</h3>
            <img src="logo_UR_blue.png">
            <div class="main-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi 
                tristique sapien ac erat tincidunt, sit amet dignissim lectus vulputate.
            </div>
        <div class="bottom"><span><ion-icon name="time-outline"></ion-icon> 30 min</span>
            <button><ion-icon name="heart-outline"></ion-icon></button></div>
        </div>
    
    </div>

    </body>
</html>

```

- [Podgląd aktualny podgląd jak wygląda strona](https://prawy126.github.io/Technologie_Internetowe/lab5/zadanie6)
---
- ZADANIE 7
- 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grid example</title>
    <style>
        :root {
            --blue-ur: #0033A0;
            --white-ur: #FEFEFE;
        }
        
        body {
            display: grid; 
            text-align: center;
            color: var(--white-ur);
            background-color: var(--blue-ur);
        }
        
        h1 {
            display: grid;
        }
        
        img {
            background-color: var(--white-ur);
            width: 300px;
        }
    </style>
</head>
<body>
    <h1>Gallery</h1>
    <section id="gallery" class="gallery">
        <img src="placeholder.png" alt="placeholder image">
        <img src="placeholder.png" alt="placeholder image">
        <img src="placeholder.png" alt="placeholder image">
        <img src="placeholder.png" alt="placeholder image">
        <img src="placeholder.png" alt="placeholder image">
    </section>
</body>
</html>

```

- [Podgląd aktualny podgląd jak wygląda strona](https://prawy126.github.io/Technologie_Internetowe/lab5/zadanie7)
---
- ZADANIE 8
- 

```html
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>Kalendarz</title>
 <style>
 body {
    font-family: Arial, sans-serif;
  }

  article {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px;
  }
  
  article h2 {
    grid-column: 1 / -1;
    text-align: center;
    background-color: #eeeeee;
    padding: 10px;
    margin-top: 0;
  }

  section {
  display: grid;
  /* grid-template-columns: repeat(7, 1fr); 7 dni w tygodniu */
  gap: 5px;
  margin-bottom: 10px;
  padding: 10px;
  }

 
  

  ul {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    background-color: #ddd;
    padding: 0;
    list-style-type: none;
    margin-top: 0;
    text-align: center;
  }

  ul li {
    padding: 5px;
    background-color: #ddd; 
    border-bottom: 1px solid #bbb; 
  }

  ol {
  display: grid;
  grid-template-columns: repeat(7, 1fr); /* 7 days a week */
  padding: 0;
  margin: 0;
  background-color: #ddd;
  grid-gap: 1px; /* This creates the grid lines */
  }

  ol li {
  padding: 10px;
  text-align: center;
  background-color: #fff; /* Default background for days */
  display: flex;
  justify-content: center;
  align-items: center;
  }

  ol li::before {
    content: attr(data-day);
    position: absolute;
    top: 2px;
    left: 2px;
    font-size: 0.75em;
    color: #555;
  }

  ul li, ol li {
  padding: 5px;
  text-align: center;
  }



 /* Odwrócenie kolorów dla dni w Tygodniu A */
article:nth-of-type(1) ol li:nth-child(14n+1),
article:nth-of-type(1) ol li:nth-child(14n+2),
article:nth-of-type(1) ol li:nth-child(14n+3),
article:nth-of-type(1) ol li:nth-child(14n+4),
article:nth-of-type(1) ol li:nth-child(14n+5),
article:nth-of-type(1) ol li:nth-child(14n+6),
article:nth-of-type(1) ol li:nth-child(14n+7) {
  background-color: #01b5f1; /* Odwrócony kolor, np. stalowy błękit */
}

article:nth-of-type(1) ol li:nth-child(14n+8),
article:nth-of-type(1) ol li:nth-child(14n+9),
article:nth-of-type(1) ol li:nth-child(14n+10),
article:nth-of-type(1) ol li:nth-child(14n+11),
article:nth-of-type(1) ol li:nth-child(14n+12),
article:nth-of-type(1) ol li:nth-child(14n+13),
article:nth-of-type(1) ol li:nth-child(14n+14) {
  background-color: #f60404; /* Odwrócony kolor, np. jasnoniebieski */
}

/* Odwrócenie kolorów dla dni w Tygodniu B */
article:nth-of-type(2) ol li:nth-child(14n+1),
article:nth-of-type(2) ol li:nth-child(14n+2),
article:nth-of-type(2) ol li:nth-child(14n+3),
article:nth-of-type(2) ol li:nth-child(14n+4),
article:nth-of-type(2) ol li:nth-child(14n+5),
article:nth-of-type(2) ol li:nth-child(14n+6),
article:nth-of-type(2) ol li:nth-child(14n+7) {
  background-color:green; /* Odwrócony kolor, np. stalowy błękit */
}

article:nth-of-type(2) ol li:nth-child(14n+8),
article:nth-of-type(2) ol li:nth-child(14n+9),
article:nth-of-type(2) ol li:nth-child(14n+10),
article:nth-of-type(2) ol li:nth-child(14n+11),
article:nth-of-type(2) ol li:nth-child(14n+12),
article:nth-of-type(2) ol li:nth-child(14n+13),
article:nth-of-type(2) ol li:nth-child(14n+14) {
  background-color: blue; /* Odwrócony kolor, np. jasnoniebieski */
}

  @media screen and (min-width: 1200px) {
    article {
      grid-template-columns: 1fr 1fr;
    }
  }
 </style>
</head>
<body>
  <Article>
  <h2>Tydzień A</h2>
  <section>
  <h2>Październik 2023</h2>
  <ul>
  <li>Mon</li>
  <li>Tue</li>
  <li>Wed</li>
  <li>Thu</li>
  <li>Fri</li>
  <li>Sat</li>
  <li>Sun</li>
  </ul>
  <ol>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  <li>6</li>
  <li>7</li>
  <li>8</li>
  <li>9</li>
  <li>10</li>
  <li>11</li>
  <li>12</li>
  <li>13</li>
  <li>14</li>
  <li>15</li>
  <li>16</li>
  <li>17</li>
  <li>18</li>
  <li>19</li>
  <li>20</li>
  <li>21</li>
  <li>22</li>
  <li>23</li>
  <li>24</li>
  <li>25</li>
  <li>26</li>
  <li>27</li>
  <li>28</li>
  <li>29</li>
  <li>30</li>
  <li>31</li>
  </ol>
  </section>
  <section>
  <h2>Listopad 2023</h2>
  <ul>
  <li>Mon</li>
  <li>Tue</li>
  <li>Wed</li>
  <li>Thu</li>
  <li>Fri</li>
  <li>Sat</li>
  <li>Sun</li>
</ul>
<ol>
<li>1</li>
<li>2</li>
<li>3</li>
<li>4</li>
<li>5</li>
<li>6</li>
<li>7</li>
<li>8</li>
<li>9</li>
<li>10</li>
<li>11</li>
<li>12</li>
<li>13</li>
<li>14</li>
<li>15</li>
<li>16</li>
<li>17</li>
<li>18</li>
<li>19</li>
<li>20</li>
<li>21</li>
<li>22</li>
<li>23</li>
<li>24</li>
<li>25</li>
<li>26</li>
<li>27</li>
<li>28</li>
<li>29</li>
<li>30</li>
</ol>
</section>
<section>
<h2>Grudzień 2023</h2>
<ul>
<li>Mon</li>
<li>Tue</li>
<li>Wed</li>
<li>Thu</li>
<li>Fri</li>
<li>Sat</li>
<li>Sun</li>
</ul>
<ol>
<li>1</li>
<li>2</li>
<li>3</li>
 <li>4</li>
 <li>5</li>
 <li>6</li>
 <li>7</li>
 <li>8</li>
 <li>9</li>
 <li>10</li>
 <li>11</li>
 <li>12</li>
 <li>13</li>
 <li>14</li>
 <li>15</li>
 <li>16</li>
 <li>17</li>
 <li>18</li>
 <li>19</li>
 <li>20</li>
 <li>21</li>
 <li>22</li>
 <li>23</li>
 <li>24</li>
 <li>25</li>
 <li>26</li>
 <li>27</li>
 <li>28</li>
 <li>29</li>
 <li>30</li>
 <li>31</li>
 </ol>
 </section>
 <section>
 <h2>Styczeń 2024</h2>
 <ul>
 <li>Mon</li>
 <li>Tue</li>
 <li>Wed</li>
 <li>Thu</li>
 <li>Fri</li>
 <li>Sat</li>
 <li>Sun</li>
 </ul>
 <ol>
 <li>1</li>
 <li>2</li>
 <li>3</li>
 <li>4</li>
 <li>5</li>
 <li>6</li>
 <li>7</li>
 <li>8</li>
 <li>9</li>
 <li>10</li>
 <li>11</li>
 <li>12</li>
 <li>13</li>
 <li>14</li>
 <li>15</li>
 <li>16</li>
 <li>17</li>
 <li>18</li>
 <li>19</li>
 <li>20</li>
 <li>21</li>
 <li>22</li>
 <li>23</li>
 <li>24</li>
 <li>25</li>
 <li>26</li>
 <li>27</li>
 <li>28</li>
 <li>29</li>
 <li>30</li>
 <li>31</li>
 </ol>
 </section>
 <section>
 <h2>Luty 2024</h2>
 <ul>
 <li>Mon</li>
 <li>Tue</li>
 <li>Wed</li>
 <li>Thu</li>
 <li>Fri</li>
 <li>Sat</li>
 <li>Sun</li>
 </ul>
 <ol>
 <li>1</li>
 <li>2</li>
 <li>3</li>
 <li>4</li>
 <li>5</li>
 <li>6</li>
 <li>7</li>
 <li>8</li>
 <li>9</li>
 <li>10</li>
 <li>11</li>
 <li>12</li>
 <li>13</li>
 <li>14</li>
 <li>15</li>
 <li>16</li>
 <li>17</li>
 <li>18</li>
 <li>19</li>
 <li>20</li>
 <li>21</li>
 <li>22</li>
 <li>23</li>
 <li>24</li>
 <li>25</li>
 <li>26</li>
 <li>27</li>
 <li>28</li>
 </ol>
 </section>
 <section>
 <h2>Marzec 2024</h2>
 <ul>
 <li>Mon</li>
 <li>Tue</li>
 <li>Wed</li>
 <li>Thu</li>
 <li>Fri</li>
 <li>Sat</li>
 <li>Sun</li>
 </ul>
 <ol>
 <li>1</li>
 <li>2</li>
 <li>3</li>
 <li>4</li>
 <li>5</li>
 <li>6</li>
 <li>7</li>
 <li>8</li>
 <li>9</li>
 <li>10</li>
 <li>11</li>
 <li>12</li>
 <li>13</li>
 <li>14</li>
 <li>15</li>
 <li>16</li>
 <li>17</li>
 <li>18</li>
 <li>19</li>
 <li>20</li>
 <li>21</li>
 <li>22</li>
 <li>23</li>
 <li>24</li>
 <li>25</li>
 <li>26</li>
 <li>27</li>
 <li>28</li>
 <li>29</li>
 <li>30</li>
 <li>31</li>
 </ol>
 </section>
 <section>
 <h2>Kwiecień 2024</h2>
 <ul>
 <li>Mon</li>
 <li>Tue</li>
 <li>Wed</li>
 <li>Thu</li>
 <li>Fri</li>
 <li>Sat</li>
 <li>Sun</li>
 </ul>
 <ol>
 <li>1</li>
 <li>2</li>
 <li>3</li>
 <li>4</li>
 <li>5</li>
 <li>6</li>
 <li>7</li>
 <li>8</li>
 <li>9</li>
 <li>10</li>
 <li>11</li>
 <li>12</li>
 <li>13</li>
 <li>14</li>
 <li>15</li>
 <li>16</li>
 <li>17</li>
 <li>18</li>
 <li>19</li>
 <li>20</li>
 <li>21</li>
 <li>22</li>
 <li>23</li>
 <li>24</li>
 <li>25</li>
 <li>26</li>
 <li>27</li>
 <li>28</li>
 <li>29</li>
 <li>30</li>
 </ol>
 </section>
 <section>
 <h2>Maj 2024</h2>
 <ul>
 <li>Mon</li>
 <li>Tue</li>
 <li>Wed</li>
 <li>Thu</li>
 <li>Fri</li>
 <li>Sat</li>
 <li>Sun</li>
 </ul>
 <ol>
 <li>1</li>
 <li>2</li>
 <li>3</li>
 <li>4</li>
 <li>5</li>
 <li>6</li>
 <li>7</li>
 <li>8</li>
 <li>9</li>
 <li>10</li>
 <li>11</li>
 <li>12</li>
 <li>13</li>
 <li>14</li>
 <li>15</li>
 <li>16</li>
 <li>17</li>
 <li>18</li>
 <li>19</li>
 <li>20</li>
 <li>21</li>
 <li>22</li>
 <li>23</li>
 <li>24</li>
 <li>25</li>
 <li>26</li>
 <li>27</li>
 <li>28</li>
 <li>29</li>
 <li>30</li>
 <li>31</li>
 </ol>
 </section>
 <section>
 <h2>Czerwiec 2024</h2>
 <ul>
 <li>Mon</li>
 <li>Tue</li>
 <li>Wed</li>
 <li>Thu</li>
 <li>Fri</li>
 <li>Sat</li>
 <li>Sun</li>
 </ul>
 <ol>
 <li>1</li>
 <li>2</li>
 <li>3</li>
 <li>4</li>
 <li>5</li>
 <li>6</li>
 <li>7</li>
 <li>8</li>
 <li>9</li>
 <li>10</li>
 <li>11</li>
 <li>12</li>
 <li>13</li>
 <li>14</li>
 <li>15</li>
 <li>16</li>
 <li>17</li>
 <li>18</li>
 <li>19</li>
 <li>20</li>
 <li>21</li>
 <li>22</li>
 <li>23</li>
 <li>24</li>
 <li>25</li>
 <li>26</li>
 <li>27</li>
 <li>28</li>
 <li>29</li>
 <li>30</li>
 </ol>
 </section>
 <section>
 <h2>Lipiec 2024</h2>
 <ul>
 <li>Mon</li>
 <li>Tue</li>
 <li>Wed</li>
 <li>Thu</li>
 <li>Fri</li>
 <li>Sat</li>
 <li>Sun</li>
 </ul>
 <ol>
 <li>1</li>
 <li>2</li>
 <li>3</li>
 <li>4</li>
 <li>5</li>
 <li>6</li>
 <li>7</li>
 <li>8</li>
 <li>9</li>
 <li>10</li>
 <li>11</li>
 <li>12</li>
 <li>13</li>
 <li>14</li>
 <li>15</li>
 <li>16</li>
 <li>17</li>
 <li>18</li>
 <li>19</li>
 <li>20</li>
 <li>21</li>
 <li>22</li>
 <li>23</li>
 <li>24</li>
 <li>25</li>
 <li>26</li>
 <li>27</li>
 <li>28</li>
 <li>29</li>
 <li>30</li>
 <li>31</li>
</ol>
</section>
<section>
<h2>Sierpień 2024</h2>
<ul>
<li>Mon</li>
<li>Tue</li>
<li>Wed</li>
<li>Thu</li>
<li>Fri</li>
<li>Sat</li>
<li>Sun</li>
</ul>
<ol>
<li>1</li>
<li>2</li>
<li>3</li>
<li>4</li>
<li>5</li>
<li>6</li>
<li>7</li>
<li>8</li>
<li>9</li>
<li>10</li>
<li>11</li>
<li>12</li>
<li>13</li>
<li>14</li>
<li>15</li>
<li>16</li>
<li>17</li>
<li>18</li>
<li>19</li>
<li>20</li>
<li>21</li>
<li>22</li>
<li>23</li>
<li>24</li>
<li>25</li>
<li>26</li>
<li>27</li>
<li>28</li>
<li>29</li>
<li>30</li>
<li>31</li>
</ol>
</section>
<section>
    <h2>Wrzesień 2024</h2>
    <ul>
    <li>Mon</li>
    <li>Tue</li>
    <li>Wed</li>
    <li>Thu</li>
    <li>Fri</li>
    <li>Sat</li>
    <li>Sun</li>
    </ul>
    <ol>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
    <li>7</li>
    <li>8</li>
    <li>9</li>
    <li>10</li>
    <li>11</li>
    <li>12</li>
    <li>13</li>
    <li>14</li>
    <li>15</li>
    <li>16</li>
    <li>17</li>
    <li>18</li>
    <li>19</li>
    <li>20</li>
    <li>21</li>
    <li>22</li>
    <li>23</li>
    <li>24</li>
    <li>25</li>
    <li>26</li>
    <li>27</li>
    <li>28</li>
    <li>29</li>
    <li>30</li>
    </ol>
    </section>
    </Article>
    <Article>
    <h2>Tydzień B</h2>
    <section>
        <h2>Październik 2023</h2>
        <ul>
        <li>Mon</li>
        <li>Tue</li>
        <li>Wed</li>
        <li>Thu</li>
        <li>Fri</li>
        <li>Sat</li>
        <li>Sun</li>
        </ul>
        <ol>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
        <li>21</li>
        <li>22</li>
        <li>23</li>
        <li>24</li>
        <li>25</li>
        <li>26</li>
        <li>27</li>
        <li>28</li>
        <li>29</li>
        <li>30</li>
        <li>31</li>
        </ol>
        </section>
        <section>
        <h2>Listopad 2023</h2>
        <ul>
            <li>Mon</li>
            <li>Tue</li>
            <li>Wed</li>
            <li>Thu</li>
            <li>Fri</li>
            <li>Sat</li>
            <li>Sun</li>
            </ul>
            <ol>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
            <li>11</li>
            <li>12</li>
            <li>13</li>
            <li>14</li>
            <li>15</li>
            <li>16</li>
            <li>17</li>
            <li>18</li>
            <li>19</li>
            <li>20</li>
            <li>21</li>
            <li>22</li>
            <li>23</li>
            <li>24</li>
            <li>25</li>
            <li>26</li>
            <li>27</li>
            <li>28</li>
            <li>29</li>
            <li>30</li>
            </ol>
            </section>
            <section>
            <h2>Grudzień 2023</h2>
            <ul>
            <li>Mon</li>
            <li>Tue</li>
            <li>Wed</li>
            <li>Thu</li>
            <li>Fri</li>
            <li>Sat</li>
            <li>Sun</li>
            </ul>
            <ol>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
            <li>11</li>
            <li>12</li>
            <li>13</li>
            <li>14</li>
            <li>15</li>
            <li>16</li>
            <li>17</li>
            <li>18</li>
            <li>19</li>
            <li>20</li>
            <li>21</li>
            <li>22</li>
            <li>23</li>
            <li>24</li>
            <li>25</li>
            <li>26</li>
            <li>27</li>
            <li>28</li>
            <li>29</li>
            <li>30</li>
            <li>31</li>
            </ol>
            </section>
            <section>
            <h2>Styczeń 2024</h2>
            <ul>
            <li>Mon</li>
            <li>Tue</li>
            <li>Wed</li>
            <li>Thu</li>
            <li>Fri</li>
            <li>Sat</li>
            <li>Sun</li>
        </ul>
        <ol>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
        <li>21</li>
        <li>22</li>
        <li>23</li>
        <li>24</li>
        <li>25</li>
        <li>26</li>
        <li>27</li>
        <li>28</li>
        <li>29</li>
        <li>30</li>
        <li>31</li>
        </ol>
        </section>
        <section>
        <h2>Luty 2024</h2>
        <ul>
        <li>Mon</li>
        <li>Tue</li>
        <li>Wed</li>
        <li>Thu</li>
        <li>Fri</li>
        <li>Sat</li>
        <li>Sun</li>
        </ul>
        <ol>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
        <li>21</li>
        <li>22</li>
        <li>23</li>
        <li>24</li>
        <li>25</li>
        <li>26</li>
        <li>27</li>
        <li>28</li>
        </ol>
        </section>
        <section>
        <h2>Marzec 2024</h2>
        <ul>
        <li>Mon</li>
        <li>Tue</li>
        <li>Wed</li>
        <li>Thu</li>
        <li>Fri</li>
        <li>Sat</li>
        <li>Sun</li>
        </ul>
        <ol>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
        <li>21</li>
        <li>22</li>
        <li>23</li>
        <li>24</li>
        <li>25</li>
        <li>26</li>
        <li>27</li>
        <li>28</li>
        <li>29</li>
        <li>30</li>
        <li>31</li>
        </ol>
        </section>
        <section>
        <h2>Kwiecień 2024</h2>
        <ul>
        <li>Mon</li>
        <li>Tue</li>
        <li>Wed</li>
        <li>Thu</li>
        <li>Fri</li>
        <li>Sat</li>
        <li>Sun</li>
        </ul>
        <ol>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
        <li>21</li>
        <li>22</li>
        <li>23</li>
        <li>24</li>
        <li>25</li>
        <li>26</li>
        <li>27</li>
        <li>28</li>
        <li>29</li>
        <li>30</li>
        </ol>
        </section>
        <section>
        <h2>Maj 2024</h2>
        <ul>
        <li>Mon</li>
        <li>Tue</li>
        <li>Wed</li>
        <li>Thu</li>
        <li>Fri</li>
        <li>Sat</li>
        <li>Sun</li>
        </ul>
        <ol>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
        <li>21</li>
        <li>22</li>
        <li>23</li>
        <li>24</li>
        <li>25</li>
        <li>26</li>
        <li>27</li>
        <li>28</li>
        <li>29</li>
        <li>30</li>
        <li>31</li>
        </ol>
        </section>
        <section>
        <h2>Czerwiec 2024</h2>
        <ul>
        <li>Mon</li>
        <li>Tue</li>
        <li>Wed</li>
        <li>Thu</li>
        <li>Fri</li>
        <li>Sat</li>
        <li>Sun</li>
        </ul>
        <ol>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
        <li>21</li>
        <li>22</li>
        <li>23</li>
        <li>24</li>
        <li>25</li>
        <li>26</li>
        <li>27</li>
        <li>28</li>
        <li>29</li>
        <li>30</li>
        </ol>
        </section>
        <section>
        <h2>Lipiec 2024</h2>
        <ul>
        <li>Mon</li>
        <li>Tue</li>
        <li>Wed</li>
        <li>Thu</li>
        <li>Fri</li>
        <li>Sat</li>
        <li>Sun</li>
        </ul>
        <ol>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
        <li>21</li>
        <li>22</li>
        <li>23</li>
        <li>24</li>
        <li>25</li>
        <li>26</li>
        <li>27</li>
        <li>28</li>
        <li>29</li>
        <li>30</li>
        <li>31</li>
        </ol>
        </section>
        <section>
        <h2>Sierpień 2024</h2>
        <ul>
        <li>Mon</li>
        <li>Tue</li>
        <li>Wed</li>
        <li>Thu</li>
        <li>Fri</li>
        <li>Sat</li>
        <li>Sun</li>
        </ul>
        <ol>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
        <li>21</li>
        <li>22</li>
        <li>23</li>
        <li>24</li>
        <li>25</li>
        <li>26</li>
        <li>27</li>
        <li>28</li>
        <li>29</li>
        <li>30</li>
        <li>31</li>
        </ol>
        </section>
        <section>
        <h2>Wrzesień 2024</h2>
        <ul>
        <li>Mon</li>
        <li>Tue</li>
        <li>Wed</li>
        <li>Thu</li>
        <li>Fri</li>
        <li>Sat</li>
        <li>Sun</li>
        </ul>
        <ol>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
        <li>21</li>
        <li>22</li>
        <li>23</li>
        <li>24</li>
        <li>25</li>
        <li>26</li>
        <li>27</li>
        <li>28</li>
        <li>29</li>
        <li>30</li>
        </ol>
        </section>
        </Article>
       </body>
       </html>                                                             
```

- [Podgląd aktualny podgląd jak wygląda strona](https://prawy126.github.io/Technologie_Internetowe/lab5/zadanie8)