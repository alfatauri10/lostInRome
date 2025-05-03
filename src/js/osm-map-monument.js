// osm-map.js - Versione ottimizzata
document.addEventListener('DOMContentLoaded', () => {
  const iframe = document.getElementById('osm-iframe');
  const link = document.getElementById('osm-link');

  // Aggiunto controllo esistenza elementi
  if (!iframe || !link) return;

  const defaultPos = iframe.dataset.defaultPos?.split(',') || [41.9028, 12.4964]; // Default Roma centro

  // Gestione più robusta dei parametri
  const getParams = () => {
    try {
      const url = new URL(iframe.src);
      const bbox = url.searchParams.get('bbox')?.split(',') || defaultPos.concat(defaultPos); // Crea bbox da defaultPos
      const marker = url.searchParams.get('marker')?.split(',') || defaultPos;
      return { bbox, marker };
    } catch (e) {
      console.error("Error parsing URL:", e);
      return {
        bbox: defaultPos.concat(defaultPos),
        marker: defaultPos
      };
    }
  };

  // Calcolo zoom più preciso
  const calculateZoom = (bbox) => {
    try {
      const latDiff = Math.abs(bbox[3] - bbox[1]);
      const zoom = Math.round(Math.log2(360/latDiff));
      return Math.min(Math.max(zoom, 12), 18); // Limita tra 12 e 18
    } catch (e) {
      return 15; // Fallback
    }
  };

  // Salvataggio stato ottimizzato
  const saveState = () => {
    const { bbox, marker } = getParams();
    const zoom = calculateZoom(bbox);
    localStorage.setItem('osmMapState', JSON.stringify({ bbox, marker, zoom }));
  };

  // Caricamento stato con validazione
  const loadState = () => {
    try {
      const saved = localStorage.getItem('osmMapState');
      if (!saved) return;

      const { bbox, marker, zoom } = JSON.parse(saved);

      // Validazione dati
      if (!Array.isArray(bbox) || !Array.isArray(marker)) return;

      const bboxStr = bbox.slice(0, 4).join(',');
      const markerStr = marker.slice(0, 2).join(',');

      iframe.src = `https://www.openstreetmap.org/export/embed.html?bbox=${bboxStr}&layer=mapnik&marker=${markerStr}`;
      link.href = `https://www.openstreetmap.org/#map=${Math.min(Math.max(zoom, 12), 18)}/${markerStr.replace(',', '/')}`;
    } catch (e) {
      console.error("Error loading state:", e);
    }
  };

  // Configurazione iniziale con gestione errori
  iframe.onload = () => {
    try {
      const saveInterval = setInterval(saveState, 2000);
      window.addEventListener('beforeunload', () => {
        clearInterval(saveInterval);
        saveState();
      });

      link.href = `https://www.openstreetmap.org/#map=17/${defaultPos.slice(0, 2).join('/')}`;
    } catch (e) {
      console.error("Initialization error:", e);
    }
  };

  // Carica lo stato iniziale
  loadState();
});