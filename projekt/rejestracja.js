class User {
  constructor() {
    // Inicjalizacja właściwości użytkownika
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

  // Metoda zwracająca informacje o użytkowniku jako tekst
  getInfoAsString() {
    return `Imię: ${this.imie}\nNazwisko: ${this.nazwisko}\nLogin: ${this.login}\nHasło: ${this.haslo}\nTelefon: ${this.telefon}\nEmail: ${this.email}\nOtrzymywanie ofert na email: ${this.ofertyEmail}\nOtrzymywanie ofert na SMS: ${this.ofertySMS}\nMiasto: ${this.miasto}\nUlica: ${this.ulica}\nNumer domu: ${this.numerDomu}`;
  }

  // Metoda zapisująca dane użytkownika do lokalnego magazynu
  saveToLocalStorage() {
    localStorage.setItem("userData", JSON.stringify(this));
  }

  // Metoda statyczna wczytująca dane użytkownika z lokalnego magazynu
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

  // Metoda inicjalizująca formularz użytkownika
  initializeForm() {
    // Pobranie formularza i danych użytkownika z lokalnego magazynu
    var form = document.getElementById("myForm");
    var newUser = User.loadFromLocalStorage();

    // Pobranie pól formularza
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

    // Wypełnienie pól formularza danymi użytkownika
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

    // Nasłuchiwanie zdarzenia submit formularza
    form.addEventListener("submit", function (event) {
      // Aktualizacja danych użytkownika na podstawie wartości właściwości formularza
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


      var namePattern = /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/u;
      var telPattern = /^[0-9]{9,15}$/;
      var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      var loginPattern = /^[a-zA-Z0-9]+$/u;
      var ulicaPattern = /^[a-zA-Z0-9]{3,}$/u;
      var numerDomuPattern = /^[1-9]\d*$/;

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
