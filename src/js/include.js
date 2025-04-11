// include.js
const APP_COMPONENTS = {
    headerPlaceHolder: "/src/pages/include/header.html",
    footerPlaceHolder: "/src/pages/include/footer.html"
};

function includeHTML() {
    const promises = [];

    Object.entries(APP_COMPONENTS).forEach(([elementId, filePath]) => {
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
