// osm-map-itinerary.js

/*usato nelle homepage index.html e indexEN.html per
    - caricare le mappe degli itinerari (vedi funzione initItineraryMaps())
    - bottone mostra sulla mappa
*/

/**
 * Inizializza tutti i componenti mappa
 */
function initAllMapFeatures() {
  initMapButtons();
  initItineraryMaps();
}

/**
 * Gestione dei pulsanti "Mostra sulla mappa"
 */
function initMapButtons() {
  document.querySelectorAll('.btn-map-marker').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const lat = this.getAttribute('data-lat');
      const lon = this.getAttribute('data-lon');

      if (lat && lon) {
        window.open(
          `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=17/${lat}/${lon}`,
          '_blank',
          'noopener,noreferrer'
        );
      }
    });
  });
}

/**
 * Inizializza le mappe degli itinerari
 */
function initItineraryMaps() {
  // Configurazioni delle mappe
  const mapsConfig = [
      {
        id: 'avventura-mappa-generale',
        center: [41.87, 12.49],
        zoom: 13
      },
      {
        id: 'roma-discovery-mappa-generale',
        center: [41.9025, 12.4800],
        zoom: 14
      },
      {
        id: 'castelli-romani-mappa-generale',
        center: [41.77, 12.65],
        zoom: 12
      }
  ];


  mapsConfig.forEach(config => {
    const mapElement = document.getElementById(config.id);

    if (mapElement && !mapElement._map) {
      try {
        const map = L.map(config.id).setView(config.center, config.zoom);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        const stops = JSON.parse(mapElement.getAttribute('data-tappe') || '{}');

        Object.entries(stops).forEach(([stop, coords], index) => {
          L.marker(coords)
            .addTo(map)
            .bindPopup(`<b>${index+1}. ${stop}</b>`);
        });

        // Memorizza l'istanza per evitare reinizializzazioni
        mapElement._map = map;

        // Ridisegna la mappa quando diventa visibile
        observeTabChanges(mapElement, map);
      } catch (error) {
        console.error(`Errore nell'inizializzazione della mappa ${config.id}:`, error);
      }
    }
  });
}

/**
 * Osserva i cambiamenti di visibilità per ridisegnare le mappe
 */
function observeTabChanges(mapElement, mapInstance) {
  const observer = new MutationObserver(() => {
    if (mapElement.offsetParent !== null) {
      setTimeout(() => {
        mapInstance.invalidateSize();
      }, 100);
    }
  });

  observer.observe(mapElement.closest('.tab-pane') || document.body, {
    attributes: true,
    attributeFilter: ['class']
  });
}

// Inizializzazione al caricamento della pagina
if (document.readyState !== 'loading') {
  initAllMapFeatures();
} else {
  document.addEventListener('DOMContentLoaded', initAllMapFeatures);
}



// Attende che il contenuto dinamico sia caricato
function checkMapsLoaded() {
  // Controlla ogni 200ms se i placeholder sono stati popolati
  const checkInterval = setInterval(() => {
    if (document.getElementById('lostInRomePlaceHolder').innerHTML &&
        document.getElementById('adventureItineraryPlaceHolder').innerHTML && document.getElementById('castelliRomaniPlaceHolder').innerHTML ) {
      clearInterval(checkInterval);
      initializeMaps();
    }
  }, 200);
}

// Inizializza le mappe
function initializeMaps() {
  // Forza l'inizializzazione delle mappe
  if (window.initItineraryMaps) {
    initItineraryMaps();

    // Ridimensiona le mappe dopo un breve ritardo
    setTimeout(() => {
      const maps = [
        document.getElementById('avventura-mappa-generale'),
        document.getElementById('lostInRome-mappa-generale'),
         document.getElementById('castelli-romani-mappa-generale')
      ];

      maps.forEach(map => {
        if (map && map._map) {
          map._map.invalidateSize();
        }
      });
    }, 300);
  }
}

// Avvia il controllo quando la pagina è caricata
if (document.readyState !== 'loading') {
  checkMapsLoaded();
} else {
  document.addEventListener('DOMContentLoaded', checkMapsLoaded);
}

// Gestione cambio tab
document.querySelectorAll('[data-toggle="tab"]').forEach(tab => {
  tab.addEventListener('shown.bs.tab', function() {
    setTimeout(() => {
      if (window.initItineraryMaps) {
        initItineraryMaps();
      }
    }, 300);
  });
});
