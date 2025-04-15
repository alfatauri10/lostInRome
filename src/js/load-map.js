// load-map.js

function loadMap() {
    if(typeof google === 'undefined') {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    }
}

function checkMapPosition() {
    const mapElement = document.getElementById('mappa');
    if(mapElement && mapElement.getBoundingClientRect().top < window.innerHeight + 200) {
        loadMap();
        window.removeEventListener('scroll', checkMapPosition);
    }
}

// Inizializzazione mappa
          function initMap() {
              const colosseum = { lat: 41.8902, lng: 12.4924 };
              const map = new google.maps.Map(document.getElementById("map"), {
                  zoom: 16,
                  center: colosseum,
                  styles: [
                      { featureType: "poi", elementType: "all", stylers: [{ visibility: "off" }] }
                  ]
              });

              new google.maps.Marker({
                  position: colosseum,
                  map: map,
                  title: "Colosseo"
              });
          }

// Caricamento quando il DOM è pronto
document.addEventListener("DOMContentLoaded", function() {
    // Carica subito se la mappa è già visibile
    checkMapPosition();

    // Altrimenti aspetta lo scroll
    window.addEventListener('scroll', checkMapPosition);
});

