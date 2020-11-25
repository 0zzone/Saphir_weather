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

  if(document.getElementById('lang').checked == true){
    var tab_mois = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
  }
  else{
    var tab_mois = new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre");
}


var mois = tab_mois[today.getMonth()];
var jour = today.getDate();
var annee = today.getFullYear();
var date_complete = jour + " " + mois + " " + annee;
document.getElementById("date").innerHTML = date_complete;
document.getElementById("date-result").innerHTML = date_complete;
}
setInterval("maDate()", 1000);



if(document.getElementById('lang').checked == true){
  loc();
}
loc();





function loc(){

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(maPosition);
  }
  recherche()
}


function maPosition(position) {


  if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition(maPosition);
  }


  if(document.getElementById('lang').checked == true){
    var language = "en";
    var unit = "imperial";
    var unite = " °F";
    document.getElementById('h1-recherche').innerHTML = "Search a city ?";
    document.getElementById('validate').value = 'Search';
    document.getElementById('recherche').placeholder='Enter a city name';
    document.getElementById("refresh-img").innerHTML = "Refresh";
    document.getElementById("titre").innerHTML = "[ Matteo's weather ]";
    document.getElementById("indic-langue").innerHTML = "[ Mode français";
  }
  else{
    var language = "fr";
    var unit = "metric";
    var unite = " °C";
    document.getElementById('h1-recherche').innerHTML = "Rechercher une ville ?";
    document.getElementById('validate').value = 'Rechercher';
    document.getElementById('recherche').placeholder='Entrez le nom d\'une ville';
    document.getElementById("refresh-img").innerHTML = "Rafraîchir";
    document.getElementById("titre").innerHTML = "[ La météo de Mattéo ]";
    document.getElementById("indic-langue").innerHTML = "[ English mode";
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
      let temperature_main = resJson.list[0].main.temp;
      let res_main = Math.round(temperature_main*10)/10;
      document.getElementById("temp").innerHTML = res_main + unite;
      document.getElementById("pays").innerHTML = resJson.city.country;

      var icone = resJson.list[0].weather[0].icon;
      document.getElementById("image").setAttribute('src', "http://openweathermap.org/img/w/" + icone + ".png")

      document.getElementById("apparence").innerHTML = resJson.list[0].weather[0].description;


      let ressenti = resJson.list[0].main.feels_like;
      let ressenti_main_res = Math.round(ressenti*10)/10;
      document.getElementById("ressenti").innerHTML = ressenti_main_res + unite;


      let temperature_max = resJson.list[0].main.temp_max;
      let res_temp_max = Math.round(temperature_max*10)/10;
      document.getElementById("temp_max").innerHTML = res_temp_max + unite;


      let temperature_min = resJson.list[0].main.temp_min;
      let res_temp_min = Math.round(temperature_min*10)/10;
      document.getElementById("temp_min").innerHTML = res_temp_min + unite;


      document.getElementById("humidity").innerHTML =  resJson.list[0].main.humidity + " %";
      document.getElementById("pressure").innerHTML =  resJson.list[0].main.pressure + " hPa";

      let vent = resJson.list[0].wind.speed * 3.6;
      let res_vent = Math.round(vent*10)/10;
      document.getElementById("wind").innerHTML = res_vent + " Km/h";


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

      let temperature_1 = resJson.list[1].main.temp;
      let res_1 = Math.round(temperature_1*10)/10;
      document.getElementById("temp-fore-1").innerHTML = res_1 + unite;

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

      let temperature_2 = resJson.list[2].main.temp;
      let res_2 = Math.round(temperature_2*10)/10;
      document.getElementById("temp-fore-2").innerHTML = res_2 + unite;
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

      let temperature_3 = resJson.list[3].main.temp;
      let res_3 = Math.round(temperature_3*10)/10;
      document.getElementById("temp-fore-3").innerHTML = res_3 + unite;
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

      let temperature_4 = resJson.list[4].main.temp;
      let res_4 = Math.round(temperature_4*10)/10;
      document.getElementById("temp-fore-4").innerHTML = res_4 + unite;
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

    if(document.getElementById('lang').checked == true){
      document.getElementById("day-night").innerHTML = "Night";
    }
    else{
      document.getElementById("day-night").innerHTML = "Nuit";
    }


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
else{
  if(document.getElementById('lang').checked == true){
    document.getElementById("day-night").innerHTML = "Day";
  }
  else{
    document.getElementById("day-night").innerHTML = "Jour";
  }
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
          if(document.getElementById('lang').checked == false){
          document.getElementById('ville-alert').innerHTML = "Aucune ville n'a été trouvée :(";
          document.getElementById('infos-result').style.display="none";
          }
          else{
            document.getElementById('ville-alert').innerHTML = "No city have been found :(";
            document.getElementById('infos-result').style.display="none";
          }
        }
        if(resJson.message == "Nothing to geocode"){
          if(document.getElementById('lang').checked == false){
          document.getElementById('ville-alert').innerHTML = "Veuillez rentrer le nom d'une ville ci-dessus";
          document.getElementById('infos-result').style.display="none";
          }
          else{
            document.getElementById('ville-alert').innerHTML = "Please enter a city name above";
            document.getElementById('infos-result').style.display="none";
          }
        }
        else if(resJson.base == 'stations'){
          document.getElementById('ville-alert').innerHTML = "Bingo !";
          document.getElementById('infos-result').style.display="block";
          document.getElementById('ville-result').innerHTML = resJson.name;
          document.getElementById('pays-result').innerHTML = resJson.sys.country;


          let temperature = resJson.main.temp;
          let res_temp = Math.round(temperature*10)/10;
          document.getElementById("temp-result").innerHTML = res_temp + unite;

        var icone = resJson.weather[0].icon;
        document.getElementById("image-result").setAttribute('src', "http://openweathermap.org/img/w/" + icone + ".png")

        document.getElementById("apparence-result").innerHTML = resJson.weather[0].description;

        let ressenti_result = resJson.main.feels_like;
        let ressenti_res = Math.round(ressenti_result*10)/10;
        document.getElementById("ressenti-result").innerHTML = ressenti_res + unite;




        let temp_max_result = resJson.main.temp_max;
        let temp_max_result_res = Math.round(temp_max_result*10)/10;
        document.getElementById("temp_max-result").innerHTML = temp_max_result_res + unite;

        let temp_min_result = resJson.main.temp_min;
        let temp_min_result_res = Math.round(temp_min_result*10)/10;
        document.getElementById("temp_min-result").innerHTML = temp_min_result_res + unite;


        document.getElementById("humidity-result").innerHTML =  resJson.main.humidity + " %";
        document.getElementById("pressure-result").innerHTML =  resJson.main.pressure + " hPa";

        let wind_result = resJson.wind.speed * 3.6;
        let wind_result_res = Math.round(wind_result*10)/10;
        document.getElementById("wind-result").innerHTML = wind_result_res + " Km/h";
      }




    	})
}