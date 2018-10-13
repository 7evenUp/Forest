var map;

var initMap =(function () {
  
  var coordinates = {lat: 60.048339, lng: 30.322016},

  map = new google.maps.Map(document.getElementById('map'), {
    center: coordinates,
    zoom: 15,
    scrollwheel: false,
    disableDefaultUI: true,
    styles: [
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#6c9c5a'}]
      },
      {
        featureType: 'water',
        elementType: 'geometry.fill',
        stylers: [{color: '#6c9c5a'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '#373e42'}]
      }
    ]
  }),

  marker = new google.maps.Marker({
    position: {lat: 60.047709, lng: 30.334475},
    map: map
  })

})();