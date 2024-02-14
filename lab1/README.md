# Lab1
## Zadanie 1
Utwórz dokument index.html (zwyczajowa nazwa głównego dokumentu
HTML, automatycznie ładowana przez serwer HTTP po wpisaniu adresu URL
strony internetowej), a w nim szkielet dokumentu, którego język to język
polski, tytuł wygląda w następujący sposób: "Jan Kowalski – muzyka to
moja pasja".
## Zadanie 2
Tag < h1 > do < h6 > służy do tworzenia nagłówków dla sekcji dokumentu.
**Nagłówek pierwszego stopnia < h1 > jest najważniejszy. W
przeszłości zalecano wykorzystanie go jedynie jeden raz w całym
dokumencie, jednak HTML5 zniósł to ograniczenie.** Nagłówki mogą
pojawiać się wielokrotnie w dokumencie.
Utwórz nagłówek pierwszego poziomu zawierający tytuł strony związany z
zainteresowaniami np. Topo wspinaczkowe – przewodnik dla nowicjuszy


Utwórz nagłówek 2 poziomu o tytule Zespół Redakcyjny. Oraz nagłówek 3
poziomu z imieniem i nazwiskiem.
Tag < img src="" alt="" > służy do zamieszczania grafiki w dokumencie.
Atrybuty **src** oraz **alt** są to atrybuty wymagane!
- src= definiuje ścieżkę do obrazka (preferowana jest ścieżka
względna)
- alt= tekst wyświetlany, jeśli obrazek nie może zostać wczytany
```html 
< img src="images/red_panda.jpg" alt="Panda czerwona">
```
Więcej o tagu < img >
[1](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element) [2](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)
_Uwaga boczna: założono, że w folderze bieżącym (tj. tym w którym
znajduje się ten dokument HTML) znajduje się podfolder images, w którym
dopiero znajduje się obraz JPEG._
Pod nagłówkiem umieść zdjęcie redaktora w formacie jpg.
<span style="color:red">Umieszczanie zdjęć o bardzo dobrej jakości znacznie obniży wydajność
przetwarzania dokumentu HTML przez przeglądarkę.</span >

Znacznik < p > mówi o tym, że dany fragment dokumentu to akapit.
Oznacza, to że jego zawartość jest połączona tematycznie i podczas
renderingu pojawi się odstęp od innych elementów.
```html
<p>Treść paragrafu.</p>
```
Użyj tego znacznika do stworzenia opisu redaktora pod zdjęciem. Opis
powinien zawierać więcej niż 600 znaków.

Znacznik < hr > (horizontal breakdown) mówi, że w dalszej części
dokumentu wystąpi zmiana tematu.
[link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr?retiredLocale=pl)
[link](https://html.spec.whatwg.org/multipage/grouping-content.html#the-hr-element)
Dodaj nowego redaktora a następnie oddziel treść dotyczącą
poszczególnych redaktorów znacznikiem< hr >

## Zadanie 3
Utwórz nagłówek "Najpopularniejsze artykuły" 2 poziomu.
Utwórz listę nieuporządkowaną trzypoziomową związaną z tematyką strony.
Przykładowa lista:
Tworzenie list odbywa się przez zdefiniowanie korzenia znacznikiem **< ol >**
(lista uporządkowana ordered list) lub **< ul >** (lista nieuporządkowana,
unordered list). Następnie w zawartości znacznika definiujemy elementy
listy oznaczone znacznikiem < li >.
```html
<ol>
<li>element 1</li>
<li>element 2</li>
<li>element 3</li>
<li>element 4</li>
<li>element 5</li>
</ol>
```
```html
<ul>
    <li>element 1</li>
    <li>element 2</li>
    <li>element 3</li>
    <li>element 4</li>
    <li>element 5</li>
</ul>
```
Aby utworzyć listę zagnieżdżoną należy w elemencie listy zdefiniować nową
listę:
```html
<ol>
    <li>element 1</li>
    <li>element 2</li>
    <li>element 3
    <ul>
        <li>element 1</li>
        <li>element 2</li>
        <li>element 3</li>
        <li>element 4</li>
        <li>element 5</li>
    </ul>
    </li>
    <li>element 4</li>
    <li>element 5</li>
</ol>
```
[ol](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol)
[ul](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)

[ol elemenety](https://html.spec.whatwg.org/multipage/grouping-content.html#the-ol-element)
[ul elemenety](https://html.spec.whatwg.org/multipage/grouping-content.html#the-ul-element)

## Zadanie 4
Utwórz nagłówek "Terminarz Wydarzeń" a następnie utwórz tabelę
związaną z wydarzeniami tematycznie związanymi z tytułem strony. Przy
tworzeniu tabeli należy użyć atrybutów colspan (scalanie kolumn) i
rowspan (scalanie wierszy) do połączenia komórek w odpowiednich miejscach.
Przykładowa tabela:
```html
<table border="1">
    <thead>
        <tr>
            <th>Nagłówek 1 kolumny</th>
            <th>Nagłówek 2 kolumny</th>
            <th>Nagłówek 3 kolumny</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Nagłówek 1 wiersza</th>
            <td>komórka 1</td>
            <td>komórka 2</td>
        </tr>
        <tr>
            <th>Nagłówek 2 wiersza</th>
            <td>komórka 3</td>
            <td>komórka 4</td>
        </tr>
    </tbody>
</table>
```
- < table border="1" > główny znacznik, wewnątrz którego definiuje się
strukturę tabeli
**<span style="color:red">Atrybut border jest dodany wyłącznie w celach
demonstracyjnych/testowych!!! aby uwidocznić wygląd tabeli.
ATRYBUTU NIE NALEŻY STOSOWAĆ WEDŁUG OBECNEJ
SPECYFIKACJI HTML!</span>**
- < thead > znacznik grupujący nagłówek tabeli
- < tbody > znacznik grupujący elementy ciała tabeli
- < tr > znacznik definiujący wiersz tabeli, wewnątrz niego zdefiniowane są
komórki
- < th > znacznik definiujący komórkę nagłówkową
- < td > Znacznik definiujący komórkę

Łączenie wierszy i kolumn odbywa się za pomocą atrybutów rowspan i
colspan dodawanych do znaczników komórek.
Łącząc komórki należy podać ich odpowiednią liczbę w danym wymiarze.
```html
<table border="1">
    <thead>
        <tr>
            <th>Nagłówek 1 kolumny</th>

            <th colspan="2">połączenie dwóch nagłówków</th>
            <th>Nagłówek 4 kolumny</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Nagłówek 1 wiersza</th>
            <td>komórka 1</td>
            <td>komórka 2</td>
            <td>komórka 3</td>
        </tr>
        <tr>
            <th>Nagłówek 2 wiersza</th>
            <td>komórka 4</td>
            <td>komórka 5</td>
            <td rowspan="2">połączenie dwóch komórek w kolumnie</td>
        </tr>
        <tr>
            <th>Nagłówek 3 wiersza</th>
            <td>komórka 7</td>
            <td>komórka 8</td>
        </tr>
    </tbody>
</table>
```
[tabela](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)
[elementy tabeli](https://html.spec.whatwg.org/multipage/tables.html#the-table-element)

## Zadanie 5

Znacznik _footer (stopka strony)_ wydziela fragment dokumentu, w którym
definiujemy informacje dodatkowe takie jak dane kontaktowe, informacje o
prawach autorskich, linki do innych stron, inne informacje.

Wykorzystaj dotychczas zdobyte informacje na temat języka HTML do
stworzenia stopki dokumentu zawierającej poprawnie użyte następujące
znaczniki:
- < address > - wewnątrz znacznika zdefiniowane zostać powinny
informacje kontaktowe
- < a href="" > - służy do tworzenia hiperłączy (linków) w dokumentach.
Atrybut href definiuje źródło, do którego odwołuje się zawartość
znacznika. W praktyce href powinien być poprawnie zdefiniowanym
adresem URL.

TECHNOLOGIE INTERNETOWE | MGR INŻ. WOJCIECH GAŁKA,
MGR INŻ. MARCIN MRUKOWICZ, MGR INŻ. JAROMIR SARZYŃSKI
- < img width="", heigth="" > osadzone jako zawartość < a > i będące
linkami do social media (tj. obraz jest jednocześnie linkiem). Atrybuty
width i height pozwalają określić rozmiar obrazka w pixelach.

Wykorzystaj encje do oznaczenia praw autorskich (copyrightów):
[link](https://developer.mozilla.org/en-US/docs/Glossary/Entity)
_Przed upowszechnieniem się UTF-8 encje były konieczne do
reprezentowania znaków specjalnych. Obecnie są częściej wykorzystywane,
aby wypisać poprawnie znaki <, >, które łatwo pomylić syntaktycznie z
początkiem/końcem znaczników._

## Zadnaie 6
Zapoznaj się z dokumentacją następujących znaczników:

[Link](https://html.spec.whatwg.org/multipage/text-level-semantics.html#usage-summary)

Następnie napisz akapit, który poprawnie wykorzystuje następujące
znaczniki:
- < b > - reprezentuje fragment tekstu, na który zwraca się uwagę z
praktycznych powodów ("bring attention"), bez przekazywania
dodatkowego znaczenia i bez sugerowania innej narracji lub nastroju,
takich jak słowa kluczowe w streszczeniu dokumentu. W czasach
historycznych był to znacznik prezentacyjny "bold font"; wciąż wiele
przeglądarek renderuje jego zawartość jako pogrubioną czcionkę,
jednak obecnie **nie należy** polegać na tym zachowaniu. Przykładowo
wyszukiwarka potraktuje zawartość tego znacznika jako kluczową dla
strony (więc będzie mieć to znaczenie przy pozycjonowaniu strony dla
danej frazy), stąd nie powinno się oznaczać tym znacznikiem mniej
lub bardziej przypadkowych tekstów.
- < i > - reprezentuje fragment tekstu w innej narracji lub nastroju, lub
w inny sposób odbiegający od normalnego tekstu np. termin
techniczny. W czasach historycznych był to znacznik prezentacyjny
"italic", wciąż wiele przeglądarek renderuje jego zawartość jako
kursywę, jednak obecnie **nie należy** polegać na tym zachowaniu.
- < q > - reprezentuje cytat (od ang. quotation).
Porównaj wynik renderowania znaczników:
- < cite >
- < em >
- < var >

Co możesz o nim powiedzieć?

## Zadanie 7

Uporządkuj zawartość strony wykorzystując poniższe znaczniki:
- < hgroup > - jest używany do grupowania nagłówków < h1 >-< h6 >,
które tworzą hierarchię sekcji na stronie
- < header > - jest używany do zawarcia informacji lub elementów, które
są zazwyczaj umieszczone na górze strony i dostarczają ogólnych
informacji o treści strony lub sekcji
- < article > - ma znaczenie semantyczne związane z sekcją lub treścią,
która stanowi niezależną i samodzielnie sensowną część strony
internetowej lub dokumentu.
- < section > - treści, które są ze sobą powiązane tematycznie lub
konceptualnie
- < aside > - informacje dodatkowe, które mogą być interesujące, ale
nie są niezbędne do zrozumienia treści głównej
- < nav > - oznaczaniem sekcji nawigacyjnej strony internetowej
- < menu > - znacznik tworzący menu, jest używany zamiast znacznika
< ul > - aby semantycznie wskazać, że opcje wewnątrz niego
zdefiniowane za pomocą < li > tworzą menu.
**Do każdego z nagłówków drugiego poziomu dodaj atrybut _id_ o
unikatowej wartości. Następnie utwórz menu składające się z
hiperłączy do odpowiednich nagłówków.**
Hiperłącza mogą odwoływać się do nagłówków przez zdefiniowanie wartości
atrybutu href jako #[id znacznika]:
```html
<a href="#heading">Przejdź do nagłówka o id heading.</a>
<div style="display: block;height: 5000px;"></div>
<h2 id=heading>Nagłówek o id heading</h2>
```