console.log("working");

let map = L.map('mapid').setView([37.5, -122.5], 10);


// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

L.geoJSON(sanFranAirport, {
    onEachFeature: function(feature, layer) {
        console.log(feature);
        console.log(layer);
        layer.bindPopup("<h2><b>" + feature.properties.name + "</b></h2><hr><h3>" + feature.properties.city + ", " + feature.properties.country + "</h3>");
    }
}).addTo(map);

// Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, {
//     pointToLayer: function(feature, latlng) {
//         console.log(feature);
//         console.log(latlng);
//         return L.marker(latlng).bindPopup("<h2><b>" + feature.properties.name + "</b></h2><hr><h3>" + feature.properties.city + ", " + feature.properties.country + "</h3>");
//     }
// }).addTo(map);

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/navigation-preview-night-v4",
    accessToken: API_KEY
})

streets.addTo(map);

// satellite-streets-v11
// dark-v10
// light-v10