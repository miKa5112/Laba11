function fetchWeatherData(city) {
    const apiKey = '1f0af315ac3be953da52b7f03c5cfb50'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        const temperature = Math.round(parseFloat(data.main.temp)-273.15);
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
        const location = data.name;
  
        return { temperature, humidity, windSpeed, location };
        
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }


  
  
  function updateWeatherData() {
    const city = 'Kyiv'; 
    

  
    fetchWeatherData(city)
      .then(weatherData => {
        const weatherDataElement = document.getElementById('weatherData');
        weatherDataElement.innerHTML = `
          <p>Місто: ${weatherData.location}</p>
          <p>Температура: ${weatherData.temperature} &deg;С</p>
          <p>Вологість: ${weatherData.humidity}%</p>
          <p>Швидкість вітру: ${weatherData.windSpeed} м/c</p>
        `;
      });
  }
  
  
  const weatherButton = document.getElementById('weatherButton');
  weatherButton.addEventListener('click', updateWeatherData);