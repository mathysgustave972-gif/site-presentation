const slider = document.getElementById("slider");
const valueDisplay = document.getElementById("value");
const message = document.getElementById("message");
const tentativesDisplay = document.getElementById("tentatives");

// Nombre mystère aléatoire
let number = Math.floor(Math.random() * 100) + 1;

window.onload = function () {

    const slider = document.getElementById("slider");
    const valueDisplay = document.getElementById("value");
    const message = document.getElementById("message");

    slider.addEventListener("input", function () {
        let value = parseInt(slider.value);
        valueDisplay.textContent = value;

        if (value < number) {
            message.textContent = "Trop petit...";
        } 
        else if (value > number) {
            message.textContent = "Trop grand...";
        } 
        else {
            message.textContent = "gagner !";
        }
    });

};

// =============================
// 🕒 DATE ET HEURE
// =============================

   function afficherHeure() {
        const maintenant = new Date();
        document.getElementById("horloge").innerHTML =
            maintenant.toLocaleDateString() + " " +
            maintenant.toLocaleTimeString();
    }

    afficherHeure();
    setInterval(afficherHeure, 1000);

   var xhrWeather = new XMLHttpRequest();

xhrWeather.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        var json = JSON.parse(xhrWeather.responseText);

        document.getElementById("demo").innerHTML =
            "Température : "
            + json.main.temp.toFixed(1)
            + " °C<br>Pression : "
            + json.main.pressure
            + " hPa";
    }
};

xhrWeather.open(
    "GET",
    "https://api.openweathermap.org/data/2.5/weather?q=FORT-DE-FRANCE&units=metric&appid=e2bce031867e4cb7597469fca6b4a94c",
    true
);

xhrWeather.send();