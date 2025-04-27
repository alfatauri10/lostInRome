// osm-persist.js
document.addEventListener('DOMContentLoaded', () => {
  const iframe = document.getElementById('osm-iframe');
  const link = document.getElementById('osm-link');
  const defaultPos = iframe.dataset.defaultPos.split(',');

  // Estrai parametri dall'URL corrente
  const getParams = () => {
    const url = new URL(iframe.src);
    const bbox = url.searchParams.get('bbox').split(',');
    const marker = url.searchParams.get('marker').split(',');
    return { bbox, marker };
  };

  // Calcola il livello di zoom approssimativo
  const calculateZoom = (bbox) => {
    const latDiff = bbox[3] - bbox[1];
    return Math.round(Math.log(360/latDiff)/Math.LN2);
  };

  // Salva stato ogni 2 secondi e quando la pagina viene chiusa
  const saveState = () => {
    const { bbox, marker } = getParams();
    const zoom = calculateZoom(bbox);
    const state = { bbox, marker, zoom };
    localStorage.setItem('osmMapState', JSON.stringify(state));
  };

  // Ripristina stato salvato
  const loadState = () => {
    const saved = localStorage.getItem('osmMapState');
    if (!saved) return;

    const { bbox, marker, zoom } = JSON.parse(saved);
    const newUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox.join(',')}&layer=mapnik&marker=${marker.join(',')}`;
    iframe.src = newUrl;
    link.href = `https://www.openstreetmap.org/#map=${zoom}/${marker.join('/')}`;
  };

  // Configurazione iniziale
  iframe.onload = () => {
    setInterval(saveState, 2000); // Salva periodicamente
    link.href = `https://www.openstreetmap.org/#map=17/${defaultPos.join('/')}`;
  };

  window.addEventListener('beforeunload', saveState);
  loadState();
});