console.log("working");

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
})

let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/satellite-streets-v11",
    accessToken: API_KEY
})

// Create a base layer that holds both maps.
let baseMaps = {
    "Streets": streets,
    "Satellite": satelliteStreets
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [39.5, -98.5],
    zoom: 3,
    layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);


let earthquakeURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// This function returns the style data for each of the earthquakes we plot on
// the map. We pass the magnitude of the earthquake into a function
// to calculate the radius.
function styleInfo(feature) {
    return {
        opacity: 1,
        fillOpacity: 1,
        fillColor: "#ffae42",
        color: "#000000",
        radius: getRadius(feature.properties.mag),
        stroke: true,
        weight: 0.5
    };
}

// This function determines the radius of the earthquake marker based on its magnitude.
// Earthquakes with a magnitude of 0 will be plotted with a radius of 1.
function getRadius (magnitude) {
    if (magnitude === 0) {
        return 1;
    }
    return magnitude * 4;
}

// Retrieve the earthquake GeoJSON data.
d3.json(earthquakeURL).then(function(data) {
    console.log(data);
    // Creating a GeoJSON layer with the retrieved data.
    L.geoJson(data, {
        pointToLayer: function(feature, latlng) {
            console.log(data);
            return L.circleMarker(latlng);
        },
        style: styleInfo
    }).addTo(map);
});

// d3.json(earthquakeURL).then(function(data) {
//     console.log(data);
//     // Creating a GeoJSON layer with the retrieved data.
//     L.geoJson(data, {
//         pointToLayer: function(feature, latlng) {
//             console.log(data);
//             return L.circleMarker(latlng);
//         },
//         style: function(x) {
//             console.log(x);
//             return {
//                 opacity: 1,
//                 fillOpacity: 1,
//                 fillColor: "#ffae42",
//                 color: "#000000",
//                 radius: getRadius(x.properties.mag),
//                 stroke: true,
//                 weight: 0.5
//             };
//         }
//     }).addTo(map);
// });

// d3.json(earthquakeURL).then(function(data) {
//     console.log(data);
//     // Creating a GeoJSON layer with the retrieved data.
//     L.geoJson(data, {
//         onEachFeature: function(feature, layer) {
//             layer.bindPopup("<h2>Neighborhood: " + feature.properties.AREA_NAME + "</h2>");
//         },
//         style: myStyle
//     }).addTo(map);
// });




// streets-v11
// satellite-streets-v11
// dark-v10
// light-v10
// navigation-preview-night-v4
// navigation-preview-day-v4
