// include.js

//Path dei placeholder di default
const APP_COMPONENTS = {
    headerPlaceHolder: "/src/pages/include/header.html",
    footerPlaceHolder: "/src/pages/include/footer.html",
    lostInRomePlaceHolder: "src/pages/itinerary/it/lostInRome.html",
    adventureItineraryPlaceHolder: "src/pages/itinerary/it/avventura.html",
    castelliRomaniPlaceHolder: "src/pages/itinerary/it/castelliRomani.html",
    enoGastronomicoPlaceHolder: "src/pages/itinerary/it/enoGastronomico.html",
    lostInRomePlaceHolderEN: "src/pages/itinerary/en/lostInRome.html",
    castelliRomaniPlaceHolderEN: "src/pages/itinerary/en/castelliRomani.html",
    enoGastronomicoPlaceHolderEN: "src/pages/itinerary/en/enoGastronomico.html",
    adventureItineraryPlaceHolderEN: "src/pages/itinerary/en/avventura.html",
    presentazioneVideoHolder: "src/pages/include/videoPresentazione.html"
};

//includeHTML riceve i path dei placeholder in ingresso
//(perchè cambiano a seconda della pagina in cui sono inclusi)
function includeHTML(customComponents = {}) {
    const components = { ...APP_COMPONENTS, ...customComponents };
    const promises = [];

    Object.entries(components).forEach(([elementId, filePath]) => {
        const element = document.getElementById(elementId);
        if (element) {
            const promise = fetch(filePath)
                .then(response => response.text())
                .then(html => {
                    element.innerHTML = html;
                    return elementId;
                })
                .catch(error => console.error(`Errore nel caricare ${filePath}:`, error));
            promises.push(promise);
        }
    });

    Promise.all(promises).then(() => {
        if (window.LanguageSwitcher && window.LanguageSwitcher.initialize) {
            window.LanguageSwitcher.initialize();
        }
        fixLinksForCapacitor(); // <--- questa è la chiamata

    });

    
}

// ===============================================================
// FIX AUTOMATICO LINK per Capacitor (funziona solo in app mobile)
// ===============================================================
function fixLinksForCapacitor() {
    const isCapacitor = window.location.protocol === 'capacitor:';
    if (!isCapacitor) return; // sul sito web non fa nulla

    console.log('Modalità Capacitor rilevata: correggo i link');

    // 1️⃣ Corregge tutti i link assoluti (href="/pagina.html")
    document.querySelectorAll('a[href^="/"]').forEach(link => {
        const href = link.getAttribute('href');
        if (href.startsWith('/')) {
            const newHref = href.substring(1);
            link.setAttribute('href', newHref);
        }
    });

    // 2️⃣ Aggiunge una funzione globale per lo switch lingua
    window.goTo = function(path) {
        if (isCapacitor) {
            // Rimuove lo slash iniziale se presente
            window.location.href = path.replace(/^\//, '');
        } else {
            // Sul sito web resta invariato
            window.location.href = path;
        }
    };

    console.log('Link e switch lingua sistemati ✅');
}

document.addEventListener("DOMContentLoaded", includeHTML);

