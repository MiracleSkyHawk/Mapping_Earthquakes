console.log("working");

let map = L.map('mapid').setView([37.6213, -122.3790], 5);


// Coordinates for each point to be used in the line.
let line = [
    [37.6213, -122.3790],
    [30.1975, -97.6664],
    [43.6777, -79.6248],
    [40.6413, -73.7781],


  ];

L.polyline(line, {
    color: "blue",
    dashArray: [4, 12],
    weight: 4
}).addTo(map);

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
})

streets.addTo(map);

// satellite-streets-v11
// dark-v10