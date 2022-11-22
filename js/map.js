 var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 33.627360, lng: -111.927570},
          zoom: 18
        });
      }
 function initMap() {
  const myLatLng = {lat: 33.627360, lng: -111.927570},
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: myLatLng,
  });

  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "This is my Highschool!",
  });
}

window.initMap = initMap;