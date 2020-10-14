fetch('https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.json').then(res => res.json()).then(data => {
    console.log('привет', data) 

    for (var key in data) {
        console.log(key);
        var option = document.createElement('option');
        option.innerHTML = key;
        country.append(option);
    
    for (i = 0; i< key.length; key++){
        var optionCity = document.createElement('option');
        optionCity.innerHTML = Object.values();
        city.append([optionCity]);
    }
    
}









    /*
    var city1 = data[country[0]];
    for (var i = 0; i <city1.lenght; i++){
        city1.add(new Option(city1[i]));
    }*/
    
    /*
    for (var key in country) {




        var optionCity = document.createElement('option');

        optionCity.innerHTML = [key];
        city.append(option);*/
    
})
/*
var city = data[country[0]];
    for (var i = 0; i <city.lenght; i++)
        city.add(new Option(city[i]));*/