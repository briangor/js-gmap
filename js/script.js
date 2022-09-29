// add your API_KEY and use it locally
// import API_KEY from "./config"; //todo: add import for API_KEY

//const URL = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=weekly`;

let getLocationBtn = document.getElementById("getLocationBtn");

// Initialize and add the map
function initMap(lat, long) {
    // The location of X
    const location = { lat: +lat, lng: +long };
    //console.log(location)

    // The map, centered at X
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: location,
    });
    // The marker, positioned at X
    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}
//console.log(KEY);
function showMap() {
    let lat = document.getElementById('lat').value;
    let long = document.getElementById('long').value;

    // todo: Dynamically add the mapping script to DOM
    // let script = document.createElement("script");
    // script.type = "text/javascript";
    // script.src = URL;
    // script.setAttribute('defer', '');
    // document.body.appendChild(script);

    //console.log(lat);
    //console.log(long);
    initMap(lat, long);
}

  //window.initMap = initMap;

getLocationBtn.addEventListener('click', showMap);