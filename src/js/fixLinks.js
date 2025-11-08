// fixLinks.js
// Questa funzione viene eseguita solo quando l'app gira dentro Capacitor
document.addEventListener('DOMContentLoaded', () => {
  const isCapacitor = window.location.protocol === 'capacitor:';

  if (!isCapacitor) return; // sul sito web non fa nulla

  console.log('FixLinks attivo (modalità Capacitor)');

  // 1️⃣ Corregge tutti i link <a> che iniziano con "/"
  document.querySelectorAll('a[href^="/"]').forEach(link => {
    const href = link.getAttribute('href');
    if (href.startsWith('/')) {
      const newHref = href.substring(1); // rimuove lo slash iniziale
      link.setAttribute('href', newHref);
    }
  });

  // 2️⃣ Corregge anche eventuali immagini bandiere o pulsanti che cambiano lingua
  // (se usano onclick con percorsi assoluti)
  window.goTo = function(path) {
    if (isCapacitor) {
      window.location.href = path.replace(/^\//, ''); // rimuove lo slash solo in app
    } else {
      window.location.href = path; // nel browser resta invariato
    }
  };

  console.log('Link e switch lingua adattati per Capacitor');
});
