document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'tu_api_key'; // Reemplaza con tu API Key de OpenWeatherMap
    const city = 'Madrid'; // Cambia con la ciudad que desees mostrar

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            const description = data.weather[0].description;

            const weatherInfo = document.getElementById('weather-info');
            weatherInfo.innerHTML = `<p>Temperatura: ${temperature} °C</p>
                                     <p>Clima: ${description}</p>`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            const weatherInfo = document.getElementById('weather-info');
            weatherInfo.innerHTML = `<p>¡Error al cargar datos!</p>`;
        });
});
