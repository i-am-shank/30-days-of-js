const api_key = "";

// Fetch DOM elements
var cityInput = document.getElementById("city-name");
var searchBtn = document.getElementById("search-btn");
var results = document.getElementById("results");

var body = document.getElementById("wrapper");

// Fetching today's weather forecast
// ------------------------------------------
const fetchWeatherData = async () => {
    try {
        var cityName = cityInput.value;
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_key}`;
        var response = await fetch(apiUrl);
        var data = await response.json();

        // Fetch values from data *********************
        // temperatures -------------
        var temp = (data.main.temp - 273.15).toFixed(2),
            feels_like = (data.main.feels_like - 273.15).toFixed(2),
            minTemp = (data.main.temp_min - 273.15).toFixed(2),
            maxTemp = (data.main.temp_max - 273.15).toFixed(2);
        // pressure, humidity, Sea level, visibility --------------
        var pressure = data.main.pressure,
            humidity = data.main.humidity,
            sea_level = data.main.sea_level,
            visibility = data.visibility;
        var cloud = data.clouds.all;
        var sunrise = data.sys.sunrise,
            sunset = data.sys.sunset;
        var weatherType = data.weather[0].main;

        // unix-timestamp  -->  24-hour time-format
        var riseDate = new Date(sunrise * 1000);
        var riseHours = riseDate.getHours();
        var riseMins = riseDate.getMinutes();
        var riseSecs = riseDate.getSeconds();
        var setDate = new Date(sunset * 1000);
        var setHours = setDate.getHours();
        var setMins = setDate.getMinutes();
        var setSecs = setDate.getSeconds();

        var weatherResult = document.createElement("div");
        weatherResult.innerHTML = `
        <h3>${cityName}</h3>
        <div>
            <main>
                <h1 style="display:inline-block;">
                    ${temp}&deg;C
                </h1> &nbsp; &nbsp;
                <span>
                    ${weatherType}
                </span>
            </main>
            
            <span>min. : ${minTemp}&deg;C, </span>&nbsp;
            <span>max. : ${maxTemp}&deg;C, </span>&nbsp;
            <span>Feels like ${feels_like}&deg;C</span>
        </div>
        <div>
            <span>Cloud : ${cloud}, </span>&nbsp;
            <span>Sunrise : ${riseHours}:${riseMins}:${riseSecs}, </span>&nbsp;
            <span>Sunset : ${setHours}:${setMins}:${setSecs}</span>
        </div>
        <div>
            <span>Pressure : ${pressure}, </span>&nbsp;
            <span>Humidity : ${humidity}, </span>&nbsp;
            <span>Sea level : ${sea_level}m, </span>&nbsp;
            <span>Visibility : ${visibility}</span>
        </div>
    `;
        results.appendChild(weatherResult);
    } catch (err) {
        // Display error message on result-portal
        var errorMsg = document.createElement("div");
        errorMsg.classList.add("error-msg");
        errorMsg.id = "error-msg";
        errorMsg.innerHTML = `
            <h2>Error 404</h2>
            <p>Please enter another city name!</p>
        `;
        results.appendChild(errorMsg);
    }
    return;
};

// Fetching 5-day weather forecast
// ------------------------------------------
const fetchForecastData = async () => {
    try {
        var cityName = cityInput.value;
        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${api_key}`;
        var response = await fetch(apiUrl);
        var data = await response.json();

        var forecastResult = document.createElement("div");

        var list = data.list;
        for (var i = 0; i < list.length && i < 5; i++) {
            var tempType = list[i].weather[0].main;
            var wind = list[i].wind.speed;
            var minTemp = (list[i].main.temp_min - 273.15).toFixed(2);
            var maxTemp = (list[i].main.temp_max - 273.15).toFixed(2);
            var humidity = list[i].main.humidity;
            var dateTxt = list[i].dt_txt.split(" ")[0];
            var monthNum = Number(dateTxt.split("-")[1]);
            var day = Number(dateTxt.split("-")[2]) + (i + 1);
            var months = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ];
            var month = months[monthNum - 1];

            var dayData = document.createElement("div");
            dayData.innerHTML = `
                <span>
                    ${month} ${day} &nbsp;&nbsp;:&nbsp;&nbsp; ${tempType}, &nbsp; ${minTemp}&deg;C / ${maxTemp}&deg;C,
                </span>&nbsp; &nbsp;
                <span>
                    wind : ${wind}, 
                </span>&nbsp;
                <span>
                    humidity : ${humidity}
                </span>
            `;

            forecastResult.appendChild(dayData);
        }
        results.appendChild(forecastResult);
        var horz = document.createElement("hr");
        results.appendChild(horz);
    } catch (err) {
        // Display error message on result-portal
        var errorMsg = document.getElementById("error-msg");
        var errorMsg2 = document.createElement("div");
        errorMsg2.innerHTML = `
            <p>Not able to find 5-day weather forecast for the city name you provided.</p>
            <hr /> <hr />
        `;
        errorMsg.appendChild(errorMsg2);
    }
};

body.addEventListener("click", (e) => {
    cityInput.focus();
});

searchBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    try {
        await fetchWeatherData();
        await fetchForecastData();
    } catch (err) {
        // Display error message on result-portal
        var errorMsg = document.createElement("div");
        errorMsg.innerHTML = `
            <h2>Error 404</h2>
            <p>Please enter another city name!</p>
            <hr />
        `;
        results.appendChild(errorMsg);
    }
    // Reset input-field ----------------
    cityInput.value = "";
    // Keep scrolling to bottom ----------------
    window.scrollTo(0, document.body.scrollHeight);
    return;
});

// Putting input-bar on focus by default
// .. on every page load/reload
// ------------------------------------------

window.onload = () => {
    cityInput.focus();
};
