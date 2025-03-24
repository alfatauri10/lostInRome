// Funzione base per includere componenti
function includeHTML(filePath, elementId) {
  fetch(filePath)
    .then(response => response.text())
    .then(html => {
      document.getElementById(elementId).innerHTML = html;
    })
    .catch(error => {
      console.error(`Errore nel caricamento di ${filePath}:`, error);
    });
}