
const btn = document.querySelector("#btn");
const tempText = document.querySelector("h1");
const citytext = document.querySelector("#city");
const windSpeed = document.querySelector("#windSpeed");
const humidityText = document.querySelector("#humidityText");
const feel = document.querySelector("#feel");
const error = document.querySelector(".error");


btn.addEventListener("click", () => {
    let search = document.querySelector("input");
    let API = `https://api.openweathermap.org/data/2.5/weather?q=${search.value}&appid=d828ee2a65a428f50dfd2511f775cfa8&units=metric`;

    async function checkWeather() {
        try{
        let response = await fetch(API);
        let data = await response.json();
        let final = Math.round(data.main.temp);
        let city = data.name;
        tempText.innerText = `${final}°c`;
        citytext.innerText = city;
        windSpeed.innerText = `${data.wind.speed}km/h`;
        humidityText.innerText = `${data.main.humidity}%`;
        feel.innerText = `Feels Like : ${Math.round(data.main.feels_like)}°c`;
        error.classList.add("hide")
    }catch(e){
        error.innerText = "Worng City or Country";
        error.classList.remove("hide");
    }
}
    

    checkWeather()
})





