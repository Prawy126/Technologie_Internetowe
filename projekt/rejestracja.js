class User {
    constructor() {
      this.imie = "";
      this.nazwisko = "";
      this.telefon = "";
      this.email = "";
      this.login = "";
      this.haslo = "";
    }
  
    getInfoAsString() {
      return `Imię: ${this.imie}\nNazwisko: ${this.nazwisko}\nLogin: ${this.login}\nHasło: ${this.haslo}\nTelefon: ${this.telefon}\nEmail: ${this.email}`;
    }
  
    saveToLocalStorage() {
      localStorage.setItem("userData", JSON.stringify(this));
    }
  
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
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector("form");
    var newUser = User.loadFromLocalStorage();
  
    var nameInput = document.getElementById("name");
    var surnameInput = document.getElementById("nazwisko");
    var telInput = document.getElementById("tel");
    var mailInput = document.getElementById("mail");
    var loginInput = document.getElementById("login");
    var hasloInput = document.getElementById("haslo");
  
    nameInput.value = newUser.imie;
    surnameInput.value = newUser.nazwisko;
    telInput.value = newUser.telefon;
    mailInput.value = newUser.email;
    loginInput.value = newUser.login;
    hasloInput.value = newUser.haslo;
  
    form.addEventListener("submit", function (event) {
      newUser.imie = nameInput.value.trim();
      newUser.nazwisko = surnameInput.value.trim();
      newUser.telefon = telInput.value.trim();
      newUser.email = mailInput.value.trim();
      newUser.login = loginInput.value.trim();
      newUser.haslo = hasloInput.value.trim();
  
      var namePattern = /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/u;
      var telPattern = /^[0-9]{9,15}$/;
      var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      var loginPattern = /^[a-zA-Z0-9]+$/u;
  
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
  
      if (!telPattern.test(newUser.telefon)) {
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
  
      // Wywołujemy metodę saveToLocalStorage, aby zapisać informacje o użytkowniku
      newUser.saveToLocalStorage();
      alert("Rejestracja udana!\n\n" + newUser.getInfoAsString());
    });
  });
