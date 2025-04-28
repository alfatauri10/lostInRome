// itinerario-osm.js
function initItinerarioMap() {
 const mapElement = document.getElementById('itinerario-mappa');
 if (!mapElement) return;


 // Dati dalla mappa
 const monumenti = JSON.parse(mapElement.dataset.monumenti);
 const posizioni = Object.values(monumenti);
 const nomi = Object.keys(monumenti);


 // Creazione mappa
 const map = L.map('itinerario-mappa').setView(posizioni[0], 15);


 // Layer OSM
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
 }).addTo(map);


 // Percorso
 L.polyline(posizioni, {
   color: '#068D9D',
   weight: 5,
   opacity: 0.7,
   dashArray: '10, 10'
 }).addTo(map);


 // Marker
 posizioni.forEach((pos, i) => {
   L.marker(pos, {
     icon: L.divIcon({
       className: 'monument-marker',
       html: `<span>${i+1}</span>`,
       iconSize: [30, 30]
     })
   })
   .addTo(map)
   .bindPopup(`<b>${nomi[i].toUpperCase()}</b>`);
 });


 // Adatta la vista
 map.fitBounds(posizioni);
}


// Avvia quando il DOM è pronto
document.addEventListener('DOMContentLoaded', initItinerarioMap);