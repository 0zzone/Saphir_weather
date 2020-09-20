


function monHeure()
{
	var today = new Date();
	var hour = today.getHours() + ":" + today.getMinutes();
	document.getElementById("heure").innerHTML = hour;
}
setInterval("monHeure()", 1000);

function maDate()
{
var today = new Date()

var tab_mois = new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre");
var mois = tab_mois[today.getMonth()];
var jour = today.getDate();
var annee = today.getFullYear();
var date_complete = jour + " " + mois + " " + annee;
document.getElementById("date").innerHTML = date_complete;
document.getElementById("date-result").innerHTML = date_complete;
}
setInterval("maDate()", 1000);








function loc(){

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(maPosition);
  }
  recherche()
}
loc()

function maPosition(position) {


  if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition(maPosition);
  }


  if(document.getElementById('lang').checked == true){
    var language = "en"
    var unit = "imperial"
    var unite = " °F"
  }
  else{
    var language = "fr"
    var unit = "metric"
    var unite = " °C"
  }




  var apiKey = "17687efd1ab56d1a61a6d883c105d91a";
  var lati = position.coords.latitude;
  var longi = position.coords.longitude;
  var url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lati}&lon=${longi}&lang=${language}&units=${unit}&appid=${apiKey}`;



  fetch(url)
    .then(res => res.json())
    .then(resJson => {
      document.getElementById("ville").innerHTML = resJson.city.name;
      document.getElementById("infos-city").innerHTML = resJson.city.name;
      document.getElementById("temp").innerHTML = resJson.list[0].main.temp + unite;
      document.getElementById("pays").innerHTML = resJson.city.country;

      var icone = resJson.list[0].weather[0].icon;
      document.getElementById("image").setAttribute('src', "http://openweathermap.org/img/w/" + icone + ".png")

      document.getElementById("apparence").innerHTML = resJson.list[0].weather[0].description;
      document.getElementById("ressenti").innerHTML =  resJson.list[0].main.feels_like + unite;
      document.getElementById("temp_max").innerHTML =  resJson.list[0].main.temp_max + unite;
      document.getElementById("temp_min").innerHTML =  resJson.list[0].main.temp_min + unite;
      document.getElementById("humidity").innerHTML =  resJson.list[0].main.humidity + " %";
      document.getElementById("pressure").innerHTML =  resJson.list[0].main.pressure + " hPa";

      var wind = resJson.list[0].wind.speed * 3.6;
      document.getElementById("wind").innerHTML = wind + " Km/h";


function fore1()
{
      var heure = resJson.list[1].dt_txt;
      const heurre = heure.split(' ');
      const heure_1 = heurre[1];
      const heure_2 = heure_1.split(':');
      var fore_1 = heure_1[0] + heure_1[1];
      document.getElementById("indic-fore-1").innerHTML = fore_1 + " h";

      var icone = resJson.list[1].weather[0].icon;
      document.getElementById("img-fore-1").setAttribute('src', "http://openweathermap.org/img/w/" + icone + ".png")

      document.getElementById("temp-fore-1").innerHTML = resJson.list[1].main.temp + unite;

}
fore1();




function fore2()
{
      var heure = resJson.list[2].dt_txt;
      const heurre = heure.split(' ');
      const heure_1 = heurre[1];
      const heure_2 = heure_1.split(':');
      var fore_1 = heure_1[0] + heure_1[1];
      document.getElementById("indic-fore-2").innerHTML = fore_1 + " h";

      var icone = resJson.list[2].weather[0].icon;
      document.getElementById("img-fore-2").setAttribute('src', "http://openweathermap.org/img/w/" + icone + ".png")

       document.getElementById("temp-fore-2").innerHTML = resJson.list[2].main.temp + unite;
}
fore2();

function fore3()
{
      var heure = resJson.list[3].dt_txt;
      const heurre = heure.split(' ');
      const heure_1 = heurre[1];
      const heure_2 = heure_1.split(':');
      var fore_1 = heure_1[0] + heure_1[1];
      document.getElementById("indic-fore-3").innerHTML = fore_1 + " h";

      var icone = resJson.list[3].weather[0].icon;
      document.getElementById("img-fore-3").setAttribute('src', "http://openweathermap.org/img/w/" + icone + ".png")

       document.getElementById("temp-fore-3").innerHTML = resJson.list[3].main.temp + unite;
}
fore3();

function fore4()
{
      var heure = resJson.list[4].dt_txt;
      const heurre = heure.split(' ');
      const heure_1 = heurre[1];
      const heure_2 = heure_1.split(':');
      var fore_1 = heure_1[0] + heure_1[1];
      document.getElementById("indic-fore-4").innerHTML = fore_1 + " h";

      var icone = resJson.list[4].weather[0].icon;
      document.getElementById("img-fore-4").setAttribute('src', "http://openweathermap.org/img/w/" + icone + ".png")

       document.getElementById("temp-fore-4").innerHTML = resJson.list[4].main.temp + unite;
}
fore4();

function savoirJour1(){
  var jour_complet = resJson.list[1].dt_txt;
    const date_complet = jour_complet.split('-');
    const jour = date_complet[2];
    const fini = jour.split(' ');
    var day = fini[0];
    document.getElementById('fore-date-1').innerHTML = day + "/" + date_complet[1];
}
savoirJour1();

function savoirJour2(){
  var jour_complet = resJson.list[2].dt_txt;
    const date_complet = jour_complet.split('-');
    const jour = date_complet[2];
    const fini = jour.split(' ');
    var day = fini[0];
    document.getElementById('fore-date-2').innerHTML = day + "/" + date_complet[1];
}
savoirJour2();

function savoirJour3(){
  var jour_complet = resJson.list[3].dt_txt;
    const date_complet = jour_complet.split('-');
    const jour = date_complet[2];
    const fini = jour.split(' ');
    var day = fini[0];
    document.getElementById('fore-date-3').innerHTML = day + "/" + date_complet[1];
}
savoirJour3();


function savoirJour4(){
  var jour_complet = resJson.list[4].dt_txt;
    const date_complet = jour_complet.split('-');
    const jour = date_complet[2];
    const fini = jour.split(' ');
    var day = fini[0];
    document.getElementById('fore-date-4').innerHTML = day + "/" + date_complet[1];
}
savoirJour4();


if(icone == '01n' || icone == '0n' || icone == '03n' || icone == '04n' || icone == '09n' || icone == '10n' || icone == '11n' || icone == '13n' || icone == '50n')
{
	var body = document.querySelector('body');
		body.style.backgroundColor="#0c224a";

  document.getElementById("jour-nuit").setAttribute('src', "src/img/lune.png");

  document.getElementById("day-night").innerHTML = "Nuit";


  var lien = document.getElementById("link");
    lien.style.color="white";

  var refresh = document.querySelector('figure');
    refresh.style.color="silver";

  var rechercher = document.getElementById('h1-recherche');
      rechercher.style.color="ghostwhite";

  var validate_input = document.getElementById('validate');
    validate_input.style.color="ghostwhite";
    validate_input.style.border="1px solid ghostwhite";

  document.getElementById('ville-alert').style.color="silver";
}

 
    })
}

function recherche(){


if(document.getElementById('lang').checked == true){
  var language = "en"
  var unit = "imperial"
  var unite = " °F"

  document.getElementById('indic-ressenti').innerHTML = "Feeling";
  document.getElementById('indic-temp_min').innerHTML = "Minimum temperature";
  document.getElementById('indic-temp_max').innerHTML = "Maximal temperature";
  document.getElementById('indic-humidity').innerHTML = "Humidity";
  document.getElementById('indic-pressure').innerHTML = "Pressure";
  document.getElementById('indic-wind').innerHTML = "Wind";

  document.getElementById('recherche-indic-ressenti').innerHTML = "Feeling";
  document.getElementById('recherche-indic-temp_min').innerHTML = "Minimum temperature";
  document.getElementById('recherche-indic-temp_max').innerHTML = "Maximal temperature";
  document.getElementById('recherche-indic-humidity').innerHTML = "Humidity";
  document.getElementById('recherche-indic-pressure').innerHTML = "Pressure";
  document.getElementById('recherche-indic-wind').innerHTML = "Wind"; 
}
else if(document.getElementById('lang').checked == false){
  var language = "fr"
  var unit = "metric"
  var unite = " °C"

  document.getElementById('indic-ressenti').innerHTML = "Ressenti";
  document.getElementById('indic-temp_min').innerHTML = "Température minimale";
  document.getElementById('indic-temp_max').innerHTML = "Température maximale";
  document.getElementById('indic-humidity').innerHTML = "Humidité";
  document.getElementById('indic-pressure').innerHTML = "Pression";
  document.getElementById('indic-wind').innerHTML = "Vent";

  document.getElementById('recherche-indic-ressenti').innerHTML = "Ressenti";
  document.getElementById('recherche-indic-temp_min').innerHTML = "Température minimale";
  document.getElementById('recherche-indic-temp_max').innerHTML = "Température maximale";
  document.getElementById('recherche-indic-humidity').innerHTML = "Humidité";
  document.getElementById('recherche-indic-pressure').innerHTML = "Pression";
  document.getElementById('recherche-indic-wind').innerHTML = "Vent"; 
}




	var apiKey = "17687efd1ab56d1a61a6d883c105d91a";
	var city = document.getElementById('recherche').value;
	var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${language}&units=${unit}&appid=${apiKey}`;

	fetch(url)
    	.then(res => res.json())
    	.then(resJson => {


        if(resJson.message == "city not found"){
          document.getElementById('ville-alert').innerHTML = "Aucune ville n'a été trouvée :(";
          document.getElementById('infos-result').style.display="none";
        }
        if(resJson.message == "Nothing to geocode"){
          document.getElementById('ville-alert').innerHTML = "Veuillez rentrer dans la barre de recherche ci-dessus le nom d'une ville pour  obtenir la météo de celle-ci";
          document.getElementById('infos-result').style.display="none";
        }
        else if(resJson.base == 'stations'){
          document.getElementById('ville-alert').innerHTML = "";
          document.getElementById('infos-result').style.display="block";
          document.getElementById('ville-result').innerHTML = resJson.name;
          document.getElementById('pays-result').innerHTML = resJson.sys.country;
          document.getElementById("temp-result").innerHTML = resJson.main.temp + unite;

        var icone = resJson.weather[0].icon;
        document.getElementById("image-result").setAttribute('src', "http://openweathermap.org/img/w/" + icone + ".png")

        document.getElementById("apparence-result").innerHTML = resJson.weather[0].description;

        document.getElementById("ressenti-result").innerHTML =  resJson.main.feels_like + unite;
        document.getElementById("temp_max-result").innerHTML =  resJson.main.temp_max + unite;
        document.getElementById("temp_min-result").innerHTML =  resJson.main.temp_min + unite;
        document.getElementById("humidity-result").innerHTML =  resJson.main.humidity + " %";
        document.getElementById("pressure-result").innerHTML =  resJson.main.pressure + " hPa";

        var wind = resJson.wind.speed * 3.6;
        document.getElementById("wind-result").innerHTML = wind + " Km/h";
        console.log('hey');
      }




    	})
}