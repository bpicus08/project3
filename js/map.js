function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15.5,
    center: { lat: 33.526842, lng: -111.906332},
  });
  var marker = new google.maps.Marker({
    position: { lat: 33.526842, lng: -111.906332},
    map: map,
  });
  var infowindow = new google.maps.InfoWindow({
    content:"(SAGUARO HIGHSCHOOL) This is where I went to high school!!!"
  });
  infowindow.open(map, marker);
}
window.initMap = initMap;