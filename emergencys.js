function geoFindMe() {

    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');
  
    mapLink.href = '';
    mapLink.textContent = '';
  
    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
  
      status.textContent = '';
      mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    }
  
    function error() {
      status.textContent = 'Unable to retrieve your location';
    }
  
    if (!navigator.geolocation) {
      status.textContent = 'Geolocation is not supported by your browser';
    } else {
      status.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(success, error);
    }
  
  }
  var el = document.getElementById('find-me');
  el.addEventListener('click', geoFindMe);





var requestOptions = {
    method: 'GET',
  };
  
  fetch("https://api.geoapify.com/v2/places?categories=commercial.chemist,commercial.health_and_beauty&filter=place:51a681d547963752405975b9e55421063340f00103f901f41ddeff0000000092030a416e746f702048696c6c&limit=50&apiKey=c0dd9e7c60474faf903f0d2c07d6d865", requestOptions)
    .then(response => 
        

        
        response.json()
    )
    .then(result =>
        document.getElementById("demo").innerHTML =result.features[0].properties.formatted
        )
    .catch(error => console.log('error', error));
