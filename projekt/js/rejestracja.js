/**
 * Reprezentuje użytkownika systemu, zarządzając jego danymi osobowymi i preferencjami.
 * Klasa umożliwia zapisywanie i odczytywanie informacji o użytkowniku do/z lokalnego magazynu przeglądarki,
 * co pozwala na utrzymanie ciągłości danych między sesjami przeglądania.
 * Zawiera metody do konwersji danych użytkownika na format tekstowy, zapisu i odczytu z lokalnego magazynu,
 * a także inicjalizacji i obsługi formularza rejestracyjnego.
 * 
 * @class
 */
class User {
  /**
   * Tworzy instancję klasy User, inicjalizując wszystkie właściwości na wartości domyślne.
   */
  constructor() {
    this.imie = "";
    this.nazwisko = "";
    this.telefon = "";
    this.email = "";
    this.login = "";
    this.haslo = "";
    this.ofertyEmail = false;
    this.ofertySMS = false;
    this.miasto = "";
    this.ulica = "";
    this.numerDomu = "";
  }

  /**
   * Generuje i zwraca reprezentację informacji o użytkowniku w formie tekstowej.
   * 
   * @returns {string} Tekst zawierający wszystkie dane użytkownika.
   */
  getInfoAsString() {
    return `Imię: ${this.imie}\nNazwisko: ${this.nazwisko}\nLogin: ${this.login}\nHasło: ${this.haslo}\nTelefon: ${this.telefon}\nEmail: ${this.email}\nOtrzymywanie ofert na email: ${this.ofertyEmail}\nOtrzymywanie ofert na SMS: ${this.ofertySMS}\nMiasto: ${this.miasto}\nUlica: ${this.ulica}\nNumer domu: ${this.numerDomu}`;
  }

  /**
   * Zapisuje dane użytkownika do lokalnego magazynu przeglądarki, umożliwiając ich późniejsze odczytanie.
   */
  saveToLocalStorage() {
    localStorage.setItem("userData", JSON.stringify(this));
  }

  /**
   * Odczytuje i zwraca dane użytkownika z lokalnego magazynu przeglądarki.
   * Jeśli dane nie są dostępne, zwraca nową instancję klasy User.
   * 
   * @returns {User} Obiekt użytkownika z danymi odczytanymi z magazynu lub nowy obiekt, jeśli dane nie są dostępne.
   */
  static loadFromLocalStorage() {
    const userData = localStorage.getItem("userData");
    if (userData) {
      const user = JSON.parse(userData);
      const newUser = new User();
      Object.assign(newUser, user);
      return newUser;
    }
    return new User();
  }

  /**
 * Inicjalizuje formularz rejestracyjny użytkownika, wypełniając go danymi z lokalnego magazynu (jeśli dostępne),
 * i obsługuje zdarzenie submit formularza, w tym walidację danych i aktualizację danych użytkownika.
 * Metoda ładuje istniejące dane użytkownika z lokalnego magazynu i ustawia wartości formularza na te dane,
 * umożliwiając użytkownikowi edycję swoich informacji. Po wypełnieniu formularza i jego zatwierdzeniu,
 * metoda waliduje wprowadzone dane na podstawie określonych wzorców. Jeśli dane są prawidłowe, zostaną zapisane
 * w lokalnym magazynie, a formularz zostanie wyczyszczony. W przypadku błędów walidacji użytkownik zostanie o nich
 * poinformowany poprzez komunikaty alert.
 *
 * @memberof User
 */
  initializeForm() {
    // Pobieranie formularza i wczytywanie danych użytkownika z pamięci lokalnej
    var form = document.getElementById("myForm");
    var newUser = User.loadFromLocalStorage();

    // Pobieranie elementów formularza
    var nameInput = document.getElementById("name");
    var surnameInput = document.getElementById("nazwisko");
    var telInput = document.getElementById("tel");
    var mailInput = document.getElementById("mail");
    var loginInput = document.getElementById("login");
    var hasloInput = document.getElementById("haslo");
    var ofertyEmailInput = document.getElementById("ofertyEmail");
    var ofertySMSInput = document.getElementById("ofertySMS");
    var miastoInput = document.getElementById("contact-topic");
    var ulicaInput = document.getElementById("ulica");
    var numerDomuInput = document.getElementById("numerDomu");

    // Przypisanie wartości z pamięci lokalnej do odpowiednich pól formularza
    nameInput.value = newUser.imie;
    surnameInput.value = newUser.nazwisko;
    telInput.value = newUser.telefon;
    mailInput.value = newUser.email;
    loginInput.value = newUser.login;
    hasloInput.value = newUser.haslo;
    ofertyEmailInput.checked = newUser.ofertyEmail;
    ofertySMSInput.checked = newUser.ofertySMS;
    miastoInput.value = newUser.miasto;
    ulicaInput.value = newUser.ulica;
    numerDomuInput.value = newUser.numerDomu;

    // Dodanie nasłuchiwania na zdarzenie 'submit' formularza
    form.addEventListener("submit", function (event) {
      // Aktualizacja danych użytkownika na podstawie wartości pól formularza
      newUser.imie = nameInput.value.trim();
      newUser.nazwisko = surnameInput.value.trim();
      newUser.telefon = telInput.value.trim();
      newUser.email = mailInput.value.trim();
      newUser.login = loginInput.value.trim();
      newUser.haslo = hasloInput.value.trim();
      newUser.ofertyEmail = ofertyEmailInput.checked;
      newUser.ofertySMS = ofertySMSInput.checked;
      newUser.miasto = miastoInput.value;
      newUser.ulica = ulicaInput.value.trim();
      newUser.numerDomu = numerDomuInput.value.trim();

      // Definicje wzorców dla walidacji
      var namePattern = /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/u;
      var telPattern = /^[0-9]{9,15}$/;
      var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      var loginPattern = /^[a-zA-Z0-9]+$/u;
      var ulicaPattern = /^[a-zA-Z0-9]{3,}$/u;
      var numerDomuPattern = /^[1-9]\d*$/;

      // Walidacja danych użytkownika
      if (!namePattern.test(newUser.imie)) {
        alert("Imię może zawierać tylko litery alfabetu.");
        event.preventDefault();
        return;
      }

      if (!namePattern.test(newUser.nazwisko)) {
        alert("Nazwisko może zawierać tylko litery alfabetu.");
        event.preventDefault();
        return;
      }

      if (!telPattern.test(newUser.telefon) || parseInt(newUser.telefon) < 0) {
        alert("Podaj poprawny numer telefonu.");
        event.preventDefault();
        return;
      }

      if (!emailPattern.test(newUser.email)) {
        alert("Podaj poprawny adres email.");
        event.preventDefault();
        return;
      }

      if (!loginPattern.test(newUser.login)) {
        alert("Login może zawierać tylko litery i cyfry.");
        event.preventDefault();
        return;
      }

      if (newUser.haslo.length < 8) {
        alert("Hasło musi zawierać co najmniej 8 znaków.");
        event.preventDefault();
        return;
      }

      if (!ulicaPattern.test(newUser.ulica)) {
        alert("Nazwa ulicy musi zawierać co najmniej 3 litery i może zawierać cyfry.");
        event.preventDefault();
        return;
      }

      if (!numerDomuPattern.test(newUser.numerDomu) || parseInt(newUser.numerDomu) <= 0) {
        alert("Numer domu musi być liczbą większą od zera.");
        event.preventDefault();
        return;
      }

      // Czyszczenie pól formularza po udanej rejestracji
      nameInput.value = "";
      surnameInput.value = "";
      telInput.value = "";
      mailInput.value = "";
      loginInput.value = "";
      hasloInput.value = "";
      ofertyEmailInput.checked = false;
      ofertySMSInput.checked = false;
      miastoInput.value = "";
      ulicaInput.value = "";
      numerDomuInput.value = "";

      // Zapisanie danych do lokalnego magazynu
      newUser.saveToLocalStorage();
      alert("Rejestracja udana!\n\n" + newUser.getInfoAsString());
    });
  }
}
