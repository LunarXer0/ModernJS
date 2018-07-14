
const ui = new UI;
const storage = new Storage;
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city, weatherLocation.state);

document.addEventListener('DOMContentLoaded', getWeather);

document.getElementById('w-change-btn').addEventListener('click', () => {
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;
    console.log(country);

    if(ui.valid(city) && ui.valid(country)){
        weather.changeLocation(city, country);
        storage.setLocationData(city, country);
        getWeather();
        $('#locModal').modal('hide');
    }
});

function getWeather(){
    weather.getWeather()
        .then(data=>{
            console.log(data);
            ui.paint(data);
        })
        .catch(err => console.log(err));
}