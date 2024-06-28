document.addEventListener('DOMContentLoaded', function() {
    const apiKey = '035b37a5f6f4059746269c35fdc4d39c'; // Reemplaza con tu API Key válida

    // Función para obtener y mostrar el clima basado en una ciudad
    function getWeather(city) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
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
    }

    // Obtener la referencia a los elementos del DOM
    const cityInput = document.getElementById('city-input');
    const searchBtn = document.getElementById('search-btn');

    // Manejar la búsqueda al hacer clic en el botón
    searchBtn.addEventListener('click', function() {
        const city = cityInput.value.trim();
        if (city) {
            getWeather(city);
        }
    });

    // Manejar la búsqueda al presionar Enter en el campo de entrada
    cityInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const city = cityInput.value.trim();
            if (city) {
                getWeather(city);
            }
        }
    });

    // Mostrar el clima inicial al cargar la página (por ejemplo, Madrid)
    getWeather('Madrid');
});
