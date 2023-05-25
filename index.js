const API_KEY = `cc6843cf4fc35eee6908dda580b0ad61`;
const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#col2");
const advise = document.querySelector("#advise");

const getWeather = async (city) => {
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  return showWeather(data);
};

const showWeather = (data) => {
  console.log(data);
  if (data.cod == "404") {
    weather.innerHTML = `<h2> City Not Found <h2>`;
    return;
  } else {
    const div_card = document.createElement("div");
    div_card.setAttribute("class", "info");

    const wlcm = document.createElement("h1");
    const temp = document.createElement("h2");
    const feels_like = document.createElement("h2");
    const desc = document.createElement("p");
    const img=document.createElement("img");


    wlcm.innerHTML=`welcome to.... ${search.value}`;
    temp.innerHTML=`Tempature is ${data.main.temp}`;
    feels_like.innerHTML=`Feels like ${data.main.feels_like}`;
    desc.innerHTML=`${data.weather[0].description}`;
    img.src="https://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png";


    weather.appendChild(div_card);
    div_card.appendChild(wlcm);
    div_card.appendChild(img);
    div_card.appendChild(temp);
    div_card.appendChild(feels_like);
    div_card.appendChild(desc);
  }
  if (search.value != " ") {
    search.value = null;
    
  }
  
};

form.addEventListener("submit", function (event) {
  weather.innerHTML=``;
  weather.style.display="block";
  getWeather(search.value);
  event.preventDefault();
});
