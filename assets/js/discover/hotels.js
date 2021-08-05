function getColor(type) {
  return type == 'HOTEL' ? 'rgb(241, 9, 106)' :
    type == 'INDIVIDUAL VACATION UNIT' ? 'rgb(126, 45, 129)' :
      type == 'CONDOMINIUM HOTEL' ? 'rgb(21, 219, 143)' :
        type == 'BED & BREAKFAST' ? 'rgb(230, 54, 54)' :
          type == 'TIMESHARE' ? 'rgb(54, 230, 54)' :

            'white';
}

function createMap(hotelMarkers) {
  console.log(hotelMarkers);

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
    "Hotels": hotelMarkers
  };

  // Create the map object with options
  var map = L.map("map", {
    center: [20.438043, -157.462667],
    zoom: 8,
    layers: [outdoorMap, hotelMarkers]
  });
  // legend--------------------
  var legend = L.control({
    position: 'bottomleft'
  });

  legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend');
    labels = [];

    labels.push("<b>Type of Lodging</b><br>"); //Legend Title
    //items in Legend
    categories = ['HOTEL', 'INDIVIDUAL VACATION UNIT', 'CONDOMINIUM HOTEL', 'BED & BREAKFAST', 'TIMESHARE'];

    for (var i = 0; i < categories.length; i++) {
      div.innerHTML +=
        labels.push(
          '<i  style="background:' + getColor(categories[i]) + '">  </i> ' +
          (categories[i] ? categories[i] : '+'));
    }
    div.innerHTML = labels.join('<br>');
    return div;
  };
  // end of legend--------------------------

  // Create a layer control, pass in the baseMaps and overlayMaps. Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(map);

  legend.addTo(map);
}




// Store our API endpoint inside queryUrl
var queryData = "/assets/js/discover/hotelData.geojson";

d3.json(queryData, function (data) {

  createFeatures(data.features);
  console.log(data.features);
});

function createFeatures(hotelData) {
  function forEachFeaturePrep(feature, layer,) {
    layer.bindPopup("<h4>" + feature.properties.name + "</h4>" + "<hr>" +
      "<h6>type of Lodging: " + feature.properties.type + "</h6>" +
      "<h6 text-center>Islande: " + feature.properties.island + "</h6>" +
      "<h6>Year Opened: " + feature.properties.year_open + "</h6>" +
      "<h6>Address: " + feature.properties.address + "</h6>")
  };

  var hotelMarkers = L.geoJSON(hotelData, {
    onEachFeature: forEachFeaturePrep,
    pointToLayer: function (feature, latlng) {
      return new L.circleMarker(latlng, {
        'radius': 5,
        'opacity': .5,
        'color': getColor(feature.properties.type),
        'fillColor': getColor(feature.properties.type),
        'fillOpacity': 0.75
      });

    }
  });

  createMap(hotelMarkers);
}