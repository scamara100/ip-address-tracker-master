
// declare the variables and objects
let map
let marker

// setting map 
export function initMap(lat = 0, lng = 0) {
    // create map inside #map div
    map = L.map("map").setView([lat, lng], 13);


    // add OpenStreetMap tiles (the actual map graphics)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors"
    }).addTo(map);

    // add marker
    marker = L.marker([lat, lng]).addTo(map);

    marker.bindPopup("<b>My Location</b>").openPopup();
}
