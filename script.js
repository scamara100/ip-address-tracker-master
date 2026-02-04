// declare the variables and objects
// import L from "/leaflet";
const map1 = L.map('map').setView([51.505, -0.09], 13);
const marker = L.marker([51.5, -0.09]).addTo(map1);
const circle = L.circle([51.5, -0.09], {
    color: 'bluelight',
    fillColor: 'rgb(0, 255, 251)',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map1);

// setting map 
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map1)

marker.bindPopup("<b>My Location</b>").openPopup();
// const popup = L.popup()
//     .setLatLng([51.513, -0.09])
//     .setContent("I am a standalone popup.")
//     .openOn(map);

let popup = L.popup();

map1.on('click', (e) => {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked on the map at " + e.latlng.toString())
        .openOn(map1)
})


async function handleRequest() {
    try {
        const response = await fetch("https://geo.ipify.org/api/v2/country?apiKey=at_W36tmoSFI3ZIFoeY5yqPi7RCkbNYo&ipAddress=8.8.8.8") // return a promise
        const data = await response.json() // format data to json
        console.log(data)
    } catch (e) {
        console.error(e)
    }
}

handleRequest()