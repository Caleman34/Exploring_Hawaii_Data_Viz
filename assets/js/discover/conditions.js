function createMap(beachConditions) {
  console.log(beachConditions);

  // Create the tile layer that will be the background of our map
  var lightMap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/light-v10",
    accessToken: API_KEY
  });

  var outdoorMap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/outdoors-v11",
    accessToken: API_KEY
  });

  var satelliteMap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/satellite-streets-v11",
    accessToken: API_KEY
  });

  // Create a baseMaps object to hold the lightmap layer
  var baseMaps = {
    "Street Map": outdoorMap,
    "Satellite Map": satelliteMap,
    "Light Map": lightMap
  };

  // Create an overlayMaps object to hold the beach conditions layer
  var overlayMaps = {
    "Beaches": beachConditions
  };

  // Create the map object with options
  var map = L.map("map", {
    center: [20.438043, -157.462667],
    zoom: 8,
    layers: [outdoorMap, beachConditions]
  });

  // Create a layer control, pass in the baseMaps and overlayMaps. Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(map);
}

// Store our API endpoint inside queryUrl
// var queryUrl = "https://hawaiibeachsafety.com/rest/conditions.json";

// hard code for backup incase CORS error
var queryUrl = "/assets/js/discover/conditions.json";

// // Perform a GET request to the query URL
// d3.json(queryUrl, function (data) {
//   console.log(data);
// });



// Perform an API call to the API to get station information. Call createMarkers when complete
d3.json(queryUrl,

  function (data) {
    console.log(data);

    // Pull the "lat" and "lon" property off of data.data
    // var markers = data;

    // Initialize an array to hold beach markers
    var beachMarkers = [];
    
    // Loop through the stations array
    for (var i = 0; i < data.length; i++) {

      // For each station, create a marker and bind a popup with the station's name
      var beachMarker = L.circleMarker([data[i].lat, data[i].lon], {
        stroke: false,
        fillOpacity: 0.75,
        color: "white",
        fillColor: "rgb(126, 45, 129)",
        radius: 4
      }).bindPopup("<h4>" + data[i].beach + "</h4>" + "<hr>" +
        "<h6>Island: " + data[i].island + "</h6>" +
        "<h6>Shore: " + data[i].shore + "</h6>" +
        "<hr>" + "<h6>Temperature: " + data[i].temp + " F" + "</h6>" +
        "<h6>Weather: " + data[i].weather + "</h6>" +
        "<h6>Surf: " + data[i].surf + "</h6>" +
        "<a href=" + data[i].link + "><h6>Click here more info</h6></a>");


      // Add the marker to the bikeMarkers array
      beachMarkers.push(beachMarker);
    }




    // Create a layer group made from the bike markers array, pass it into the createMap function
    createMap(L.layerGroup(beachMarkers,));
  }
);