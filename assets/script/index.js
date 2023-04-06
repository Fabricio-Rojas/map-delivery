'use strict';

// Declaring elements

const mapTrackBtn = document.querySelector('#start-map-btn');
const flyToBtn = document.querySelector('#fly-btn');

mapboxgl.accessToken = 'pk.eyJ1IjoiZmFicmljaW8tdm1yIiwiYSI6ImNsZzVqYW1tejAzZ24zbHFpMGhkbnMxcGgifQ.ZgmrUeDKUeNrVMRtPltK1Q';

// Main Function
mapTrackBtn.addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(trackLocation, errorHandler, {enableHighAccuracy: true})
        flyToBtn.style.visibility = 'visible';
    } else {
        alert('Your browser does not support geolocation');
    }
})

flyToBtn.addEventListener('click', () => {
    map.flyTo({
        center: [long, lat],
        essential: true
    })
})

let map;
let lat, long;
function trackLocation(position) {
    const {latitude, longitude} = position.coords;
    
    lat = latitude;
    long = longitude;
    
    map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [long, lat],
        zoom: 16,
    });

    const yourLocation = new mapboxgl.Marker({color: '#1DA1F2'})
        .setLngLat([long, lat])
        .addTo(map);
}

function errorHandler() {
    alert('Unable to get location')
}
