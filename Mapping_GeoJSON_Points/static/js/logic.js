
// // Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};

// L.geoJSON(sanFranAirport, {
//     onEachFeature: function(feature, layer) {
//         console.log(feature);
//         console.log(layer);
//         layer.bindPopup("<h2><b>" + feature.properties.name + "</b></h2><hr><h3>" + feature.properties.city + ", " + feature.properties.country + "</h3>");
//     }
// }).addTo(map);

// Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, {
//     pointToLayer: function(feature, latlng) {
//         console.log(feature);
//         console.log(latlng);
//         return L.marker(latlng).bindPopup("<h2><b>" + feature.properties.name + "</b></h2><hr><h3>" + feature.properties.city + ", " + feature.properties.country + "</h3>");
//     }
// }).addTo(map);

let dark = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/dark-v10",
    accessToken: API_KEY
})

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
})

// Create a base layer that holds both maps.
let baseMaps = {
    Street: streets,
    Dark: dark
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [30, 30],
    zoom: 2,
    layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);


let airportData = "https://raw.githubusercontent.com/MiracleSkyHawk/Mapping_Earthquakes/Mapping_GeoJSON_Points/majorAirports.json";
// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
    console.log(data);
    // Creating a GeoJSON layer with the retrieved data.
    L.geoJson(data, {
        onEachFeature: function(feature, layer) {
            layer.bindPopup("<h2><b>" + feature.properties.name + "</b></h2><hr><h3>" + feature.properties.city + ", " + feature.properties.country + "</h3>");
        }
    }).addTo(map);
});


// streets-v11
// satellite-streets-v11
// dark-v10
// light-v10
// navigation-preview-night-v4