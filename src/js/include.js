// include.js

//Path dei placeholder di default
const APP_COMPONENTS = {
    headerPlaceHolder: "/src/pages/include/header.html",
    footerPlaceHolder: "/src/pages/include/footer.html",
    lostInRomePlaceHolder: "/src/pages/itinerary/it/lostInRome.html",
    adventureItineraryPlaceHolder: "/src/pages/itinerary/it/avventura.html",
    castelliRomaniPlaceHolder: "src/pages/itinerary/it/castelliRomani.html",
    enoGastronomicoPlaceHolder: "src/pages/itinerary/it/enoGastronomico.html",
    lostInRomePlaceHolderEN: "src/pages/itinerary/en/lostInRome.html",
    castelliRomaniPlaceHolderEN: "src/pages/itinerary/en/castelliRomani.html",
    enoGastronomicoPlaceHolderEN: "src/pages/itinerary/en/enoGastronomico.html",
    adventureItineraryPlaceHolderEN: "src/pages/itinerary/en/avventura.html"

};

//includeHTML riceve i path dei placeholder in ingresso
//(perchè cambiano a seconda della pagina in cui sono inclusi)
function includeHTML(customComponents = {}) {
    // Unisce le componenti di default con quelle personalizzate
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
    });
}

document.addEventListener("DOMContentLoaded", includeHTML);