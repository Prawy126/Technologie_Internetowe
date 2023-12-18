---
layout: default
---

#  LAB 4
- ZADANIE 1
- 

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=dvice-width , initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="units.css">
    </head>
    <body>
        <div class="cm">cm</div>
        <div class="mms">10 mm</div>
        <div class="inchascm">2.54cm</div>
        <div class="inchasmm">25.4mm</div>
        <div class="inch">inch</div>
        <div calss="pxs96">96pxs</div>
        <div class="pts72">72pts</div>
        <div class="pcs6">6pcs</div>
    </body>
</html>
```
- [Podgląd aktualny podgląd jak wygląda strona](https://prawy126.github.io/Technologie_Internetowe/lab4/zadanie1)
---
- ZADANIE 2
- 

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8"/>
        <title>title</title>
        <style>
            html {
    font-size: 24px;
}
.parent {
    font-size: 1.6rem; /* Zmienione z 16rm na 1.6rem */
    
}

.child-one {
    font-size: 1.5rem; /* Zmienione z 1.5rm na 1.5rem */
}
.child-two {
    font-size: 1.5rem; /* Zmienione z 1.5rm na 1.5rem */
}
.child-tree{
    font-size: 2rem; 
}
.child-four {
    font-size: 5rem; 
    border: 4px solid red;
}

            
        </style>
    </head>
    <body>
        <div class="parent">parent
            <div class="child-one">
                1 <div class="child-four">4</div>
            </div>
            <div class="child-two">2</div>
            <div class="child-tree">
                3<div class="child-four">4</div>
            </div>
            </div>
            <div class="child-four">4</div>
        </div>
    </body>
</html>
```

- [Podgląd aktualny podgląd jak wygląda strona](https://prawy126.github.io/Technologie_Internetowe/lab4/zadanie2)
---
- ZADANIE 3, 4, 5 I 6 
-

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Zad 3-6</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <style>
        body{
            margin: 0px;
        }
        nav{
            height: 100px;
            width: auto;
            text-align: center;
        }

        ol{
            list-style-type: none;
            text-align: center;
            width: auto;
            margin: 0;
            padding: 0;
        }

        ol > li{
            float: left;
            background-color: blue;
            color: white;
            font-size: 16px;
            height: 30px;
            padding: 20px 0 20px 0;
            width: 170px;
            text-align: center;
        }

        ul > li{
            background-color: blue;
            color: white;
            font-size: 16px;
            height: 30px;
            padding: 20px 0 20px 0;
            width: 170px;
            text-align: center;
        }

        ol > li:hover{
            background-color: darkblue;
        }

        ol > li > ul
        {
            list-style-type: none;
            display: none;
            pointer-events: none;
            padding: 0;
            margin: 0;
        }

        ol > li:hover > ul{
            display: block;
            pointer-events: auto;
        }

        ol > li > ul > li
        {
            position: relative;
            top: 30px;
        }

        ol > li > ul > li:hover{
            background-color: darkblue;
        }
        
        li{
            position: relative;
            height: auto;
        }

        .arrowD::after{
            content: "";
            font-size: 0;
            width: 0;
            height: 0;
            margin: 0;
            border-top: 10px solid white;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-bottom: 10px solid transparent;
            position: relative;
            left: -95px;
        }
        
        .arrowR::after{
            content: "";
            font-size: 0;
            width: 0;
            height: 0;
            margin: 0 auto;
            border-left: 10px solid white;
            border-top: 10px solid transparent;
            border-right: 10px solid transparent;
            border-bottom: 10px solid transparent;
            position: relative;
            left: -95px;
        }

        .green{
            background-color: green;
            position: relative;
            left: 130px;
            top: -38px;
            display: none;
            pointer-events: none;
        }

        .green:hover{
            background-color: greenyellow;
        }

        li:hover > ul > li.green{
            display: block;
            pointer-events: auto;
        }
    </style>
    <body>
        <nav>
            <ol>
                <li>Kolegium</li>
                <li>Jednostki naukowe</li>
                <li><div class ="arrowD">Student</div>
                    <ul>
                        <li><div class="arrowR">Kierunki</div>
                            <ul>
                                <li class="green">Informatyka</li>
                                <li class="green">Matematyka</li>
                                <li class="green">Biotechnoligia</li>
                                <li class="green">Mechatronika</li>
                            </ul>
                        </li>
                        <li>Aktualności</li>
                        <li>Dziekanat</li>
                        <li>Stypendia</li>
                    </ul>
                </li>
                <li><div class ="arrowD">Doktorant</div>

                    <ul>
                        <li>Kontakt</li>
                        <li>Ogłoszenia</li>
                        <li>Stypendia</li>
                    </ul>

                </li>
            </ol>
        </div>
        </nav>
    </body>
</html>
```

- [Podgląd aktualny podgląd jak wygląda strona](https://prawy126.github.io/Technologie_Internetowe/lab4/zadanie3)
---
- ZADANIE 7 
-

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        section{
            border: 1px solid black;
            background-color: whitesmoke;
           
            
        }
        img{
            height: 40px;
            width: 40px;
        }
       article{
        display: flex;
       }
        
    </style>
</head>
<body>
    <article>
        <section id="pierwszy">
            <img src="logo_UR_blue.png">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
            laborum
        </section>
        <section id="drugi">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
            TECHNOLOGIE INTERNETOWE | MGR INŻ. WOJCIECH GAŁKA, 
            MGR INŻ. MARCIN MRUKOWICZ, MGR INŻ. JAROMIR SARZYŃSKI 
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
            laborum
        </section>
        <section id="trzeci">
            <img src="logo_UR_blue.png">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
            TECHNOLOGIE INTERNETOWE | MGR INŻ. WOJCIECH GAŁKA, 
            MGR INŻ. MARCIN MRUKOWICZ, MGR INŻ. JAROMIR SARZYŃSKI 
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
            laborum
        </section>
    </article>
</body>
</html>
```
- [Podgląd aktualny podgląd jak wygląda strona](https://prawy126.github.io/Technologie_Internetowe/lab4/zadanie7)
---
- ZADANIE 8 
-

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>zad8</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <style>
            @media screen and (min-width: 768px) {
            #pierwsza{
                height: 100px;
            }

            article{
                height: 200px;
                margin-bottom: 20px;
            }
            #pierwsza > li{
                display: inline-block;
                width: 24%;
            }

            #left{
                float: left;
                width: 20%;
            }
            #right{
                float: right;
                width: 80%;
            }
        }
        @media screen and (max-width: 768px) {

            article{
                min-height: 300px;
                margin-bottom: 20px;
            }
            #pierwsza > li{
                display: block;
            }
        }
    </style>
    <body>
        <ul id="pierwsza">
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
        </ul>
        <article>
            <section id="left">
                <h3>In this article</h3>
                <ul id="druga">
                    <li><a href="#">Link</a></li>
                    <li><a href="#">Link</a></li>
                    <li><a href="#">Link</a></li>
                    <li><a href="#">Link</a></li>
                </ul>
            </section>
            <section id="right">
                <h1>Main content</h1>
                    orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            </section>
        </article>
        <ul id="pierwsza">
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
        </ul>
    </body>
</html>
```
- [Podgląd aktualny podgląd jak wygląda strona](https://prawy126.github.io/Technologie_Internetowe/lab4/zadanie8)
---
- ZADANIE 9
-

```html
<!DOCTYPE html>
<html>
    <head>
    <meta charset="UTF-8" />
        <title>title</title>
        <style>
            @import url(external.css);
            @layer first, second,third, zero;
            @layer first {
            section {
                color: black !important;
            }
            }
            @layer second {
            section {
                color: red;
                border: 1px solid;
            }
            }@layer third{
                section{
                    color: blue;
                }
            }
            section{
                color: green;
                
            }
        </style>
    </head>
    <body>
        <section>
            <p>Ten akapit będzie miał niebieską czcionkę i obramowanie,
            gdyż warstwa second jest wyżej niż warstwa first. </p>
        </section>
    </body>
</html>
```
- [Podgląd aktualny podgląd jak wygląda strona](https://prawy126.github.io/Technologie_Internetowe/lab4/zadanie9)
---
- ZADANIE 10 
-

```html
<!DOCTYPE html>
<html>
    <head>
    <meta charset="UTF-8" />
        <title>title</title>
        <style>
            @import url(external.css);
            @layer first, second,third, zero;
            @layer first {
            section {
                color: black ;
            }
            }
            @layer second {
            section {
                color: red;
                border: 1px solid;
            }
            }@layer third{
                section{
                    color: blue;
                }
            }
            section{
                color: rgba(0,0,225, 0.5);
                scale: 200%;
                rotate: 10deg;
                filter: blur(1px);
                padding: 1em - 5px;
            }
        </style>
    </head>
    <body>
        <section>
            <p>Ten akapit będzie miał niebieską czcionkę i obramowanie,
            gdyż warstwa second jest wyżej niż warstwa first. </p>
        </section>
    </body>
</html>
```
- [Podgląd aktualny podgląd jak wygląda strona](https://prawy126.github.io/Technologie_Internetowe/lab4/zadanie10)