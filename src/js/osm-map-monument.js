document.addEventListener('DOMContentLoaded', () => {
    const iframe = document.getElementById('osm-iframe');
    if (!iframe) return;

    // Coordinate di default (Colosseo)
    const DEFAULT_COORDS = { lat: 41.8902, lon: 12.4924 };
    const ZOOM_LEVEL = 16;

    try {
        // Estrai coordinate dall'HTML o usa default
        const coords = iframe.dataset.defaultPos
            ? {
                lat: parseFloat(iframe.dataset.defaultPos.split(',')[0]),
                lon: parseFloat(iframe.dataset.defaultPos.split(',')[1])
              }
            : DEFAULT_COORDS;

        // Calcola bounding box
        const padding = 0.003 * (18 - ZOOM_LEVEL);
        const bbox = [
            coords.lon - padding,
            coords.lat - padding,
            coords.lon + padding,
            coords.lat + padding
        ].join(',');

        // Imposta src solo se valido
        iframe.src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${coords.lat},${coords.lon}`;

    } catch (e) {
        console.error("Errore nel caricamento mappa:", e);
        // Fallback visivo
        iframe.style.backgroundColor = '#f5f5f5';
        iframe.innerHTML = `<div style="text-align:center;padding-top:180px">
            Mappa non disponibile</div>`;
    }
});