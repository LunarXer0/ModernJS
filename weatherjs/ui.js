class UI{
    constructor(){
       this.location = document.getElementById('w-location');
       this.description = document.getElementById('w-desc'); 
       this.image = document.getElementById('w-icon');
       this.humidity = document.getElementById('w-humidity');
       this.wind = document.getElementById('w-wind');
       this.temperature = document.getElementById('w-temp');
    }
    paint(weather){
        let icon = weather.resWeather.weather[0]['icon'],
            city = weather.resWeather.name,
            country = weather.resWeather.sys.country,
            description = weather.resWeather.weather[0]['description'],
            humidity = weather.resWeather.main.humidity,
            wind = weather.resWeather.wind.speed,
            temp = weather.resWeather.main.temp_max;
        
            
        this.location.innerHTML = `${city}, ${country}`;
        this.image.setAttribute('src', `https://openweathermap.org/img/w/${icon}.png`);
        this.temperature.innerHTML = `${temp}&deg F`;
        this.description.innerHTML = `${description}`;
        this.humidity.innerHTML = `Humidity: ${humidity}`;
        this.wind.innerHTML = `Wind Speed: ${wind} mps`;
    }

    valid(input){
        if(input !== '' || input === null){
            return true;
        }
        else{
            return false;
        }
    }

}