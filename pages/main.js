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

