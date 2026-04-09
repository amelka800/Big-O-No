/* This is a test */ 

// Create map centered on Workday
var map = L.map('map').setView([53.3477872,  -6.2750163], 13);
var home = L.latLng(53.3477872, -6.2750163); // Workday
var dest = L.latLng(53.349346, -6.279470);   // Nail Salon

// Add map tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Add a marker in Dublin city centre
L.marker([53.3477872,  -6.2750163]).addTo(map)
  .bindPopup('Dublin 7')
  .openPopup();

L.marker([53.341, -6.251])
  .addTo(map)
  .bindPopup("🚫 Stairs - bad accessibility");

L.marker([53.346, -6.265])
  .addTo(map)
  .bindPopup("✅ Ramp - good accessibility");
map.on('click', function(e) {
  console.log(e.latlng); // {lat, lng}
});

var score = 100;

var obstructions = {

  "wheelchair": {
    "stairs": 5, 
    "no_path": 10
  }
};

