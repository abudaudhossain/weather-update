// const apikey = 'd033e9aebcaad4d7ecc50df741258424';

// loader function 
const startLoader = () => {
    const loader = document.getElementById('loader');
    loader.innerText = "Loading...";
}
const stopLoader = () => {
    const loader = document.getElementById('loader');
    loader.innerText = "";
}

// input city name 
const getCity = () => {
    startLoader();
    const cityInputField = document.getElementById('city-name');
    const cityName = cityInputField.value.toLowerCase();
    cityInputField.value = "";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=99f02106c12c01634fc84f6bf3254e85`;

    fetch(url).then(res => res.json()).then(data => {
        stopLoader();
        displayTemp(data);
    });

}
// dispaly weather 
const displayTemp = (data) => {

    const tempInfoContainer = document.getElementById('display-temp');
    tempInfoContainer.textContent = "";
    tempInfoContainer.innerHTML = `
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt=""> 
    <h1>${data.name}<sup class="h4 text-success">${data.sys.country}</sup></h1>
    <h3><span>${data.main.temp}</span>&deg;C</h3>
    <h1 class="lead">${data.weather[0].main}</h1>
    `;

}
