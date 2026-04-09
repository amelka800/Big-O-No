<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", () => {

  console.log("main.js running");

  const nodes = {
  1: [53.34802, -6.27585],
  2: [53.34802, -6.27679],
  3: [53.34766, -6.27690],
  4: [53.34862, -6.27795],
  5: [53.34878, -6.27625],
  6: [53.34782, -6.27816],
  7: [53.349, -6.27781],
  8: [53.34895, -6.27835],
  9: [53.34895, -6.27835],
  10: [53.34863, -6.27979],
  11: [53.34936, -6.27954]  // updated
};

const graph = {
  1: [{ to: 2, weight: 63.0 }],
  2: [
    { to: 1, weight: 63.0 },
    { to: 3, weight: 40.6 },
    { to: 4, weight: 102.5 },
    { to: 5, weight: 91.8 }
  ],
  3: [{ to: 2, weight: 40.6 }, { to: 6, weight: 86.3 }],
  4: [{ to: 2, weight: 102.5 }],
  5: [{ to: 2, weight: 91.8 }, { to: 7, weight: 107.3 }],
  6: [{ to: 3, weight: 86.3 }, { to: 8, weight: 81.3 }],
  7: [{ to: 5, weight: 107.3 }, { to: 9, weight: 69.5 }],
  8: [{ to: 6, weight: 81.3 }, { to: 11, weight: 470.6 }],
  9: [{ to: 7, weight: 69.5 }, { to: 10, weight: 87.8 }],
  10: [{ to: 9, weight: 87.8 }, { to: 11, weight: 476.5 }],
  11: [{ to: 10, weight: 476.5 }, { to: 8, weight: 470.6 }]
};

});
=======
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

>>>>>>> 2c573e01b7fb0205a132bb6cd276040d56054e2b
