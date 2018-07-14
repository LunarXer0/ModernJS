class Storage{
    constructor(){
        this.city;
        this.country;
        this.defaulCity = 'Orlando';
        this.defaulCountry = 'US';
    }
    getLocationData(){
        if(localStorage.getItem('city') === null){
            this.city = this.defaulCity;
        }
        else{
            this.city = localStorage.getItem('city');
        }
        if(localStorage.getItem('country') === null){
            this.country = this.defaulCity;
        }
        else{
            this.country = localStorage.getItem('country');
        }

        return {
            city: this.city,
            country: this.country
        }
    }

    setLocationData(city, country){
        localStorage.setItem('city', city);
        localStorage.setItem('country', country);
    }
}