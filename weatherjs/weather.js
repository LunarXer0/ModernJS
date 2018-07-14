class Weather{
    constructor(city, country){
        this.apiKey = '47eb9578a466ef7da8c88b2fa72a68f0';
        this.city = city;
        this.country = country;
    }
    async getWeather(city, country){
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?id=524901&APPID=${this.apiKey}&q=${this.city},${this.country}&units=imperial`);
        const resWeather = await response.json();
        return {
            resWeather
        }
    }

    //* Change weather location
    changeLocation(city, country){
        this.city = city;
        this.country = country;
    }
}
