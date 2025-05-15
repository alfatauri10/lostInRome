window.LanguageSwitcher = {
    switchLanguage: function(newLang, event) {
        if (event) event.preventDefault();

        // 1. Leggo tab itinerario attivo corrente dall'URL o dall'elemento attivo
        const activeTab = window.location.hash ||
                        document.querySelector('#itineraryTab .nav-link.active')?.getAttribute('href') ||
                        '#LostInRome';

        // 2. Leggo lingua attivo corrente
        const languageDropdown = document.getElementById('languageDropdown');
        if (!languageDropdown) return;

        const flag = languageDropdown.querySelector('.flag-icon');
        const text = languageDropdown.querySelector('.lang-text');
        const italianTextElement = document.querySelector('.italian-text');
        const englishTextElement = document.querySelector('.english-text');

        if(newLang === 'en') {
            flag.className = 'flag-icon flag-gb';
            text.textContent = '';
            italianTextElement.textContent='Italian';
            englishTextElement.textContent='English';

            document.querySelector('.lang-it').style.display = 'none';
            document.querySelector('.lang-en').style.display = 'flex';
            document.querySelector('.motto-lang-it').style.display = 'none';
            document.querySelector('.motto-lang-en').style.display = 'flex';

            if(window.location.pathname.includes('chiSiamo.html')) {
                window.location.href = window.location.pathname.replace('src/pages/menu/it/chiSiamo.html', 'src/pages/menu/en/chiSiamoEN.html') + activeTab;
            } else if(window.location.pathname.includes('contatti.html')) {
                window.location.href = window.location.pathname.replace('src/pages/menu/it/contatti.html', 'src/pages/menu/en/contattiEN.html') + activeTab;
            } else if(window.location.pathname.includes('index.html')) {
                window.location.href = window.location.pathname.replace('/lostInRome/index.html', '/lostInRome/indexEN.html') + activeTab;
            } else if(window.location.pathname === '/' || window.location.href === 'https://lostinrome.netlify.app/') {
                window.location.href = '/lostInRome/indexEN.html' + activeTab;
            } else if(window.location.pathname.includes('/it/colosseo.html')) {
                window.location.href = window.location.pathname.replace('src/pages/monument/it/colosseo.html', 'src/pages/monument/en/colosseo.html') + activeTab;
            } else if(window.location.pathname.includes('/it/altareDellaPatria.html')) {
                window.location.href = window.location.pathname.replace('src/pages/monument/it/altareDellaPatria.html', 'src/pages/monument/en/altareDellaPatria.html') + activeTab;
            } else if(window.location.pathname.includes('/it/araPacis.html')) {
                window.location.href = window.location.pathname.replace('src/pages/monument/it/araPacis.html', 'src/pages/monument/en/araPacis.html') + activeTab;
            } else if(window.location.pathname.includes('/it/fontanaDiTrevi.html')) {
                window.location.href = window.location.pathname.replace('src/pages/monument/it/fontanaDiTrevi.html', 'src/pages/monument/en/fontanaDiTrevi.html') + activeTab;
            } else if(window.location.pathname.includes('/it/pantheon.html')) {
                window.location.href = window.location.pathname.replace('src/pages/monument/it/pantheon.html', 'src/pages/monument/en/pantheon.html') + activeTab;
            } else if(window.location.pathname.includes('/it/piazzaDelPopolo.html')) {
                window.location.href = window.location.pathname.replace('src/pages/monument/it/piazzaDelPopolo.html', 'src/pages/monument/en/piazzaDelPopolo.html') + activeTab;
            } else if(window.location.pathname.includes('/it/piazzaDiSpagna.html')) {
                window.location.href = window.location.pathname.replace('src/pages/monument/it/piazzaDiSpagna.html', 'src/pages/monument/en/piazzaDiSpagna.html') + activeTab;
            }

        } else {
            flag.className = 'flag-icon flag-it';
            text.textContent = '';
            italianTextElement.textContent='Italiano';
            englishTextElement.textContent='Inglese';

            document.querySelector('.lang-it').style.display = 'flex';
            document.querySelector('.lang-en').style.display = 'none';
            document.querySelector('.motto-lang-it').style.display = 'flex';
            document.querySelector('.motto-lang-en').style.display = 'none';

            // Redirect modificati per mantenere il tab
            if(window.location.pathname.includes('chiSiamoEN.html')) {
                window.location.href = window.location.pathname.replace('src/pages/menu/en/chiSiamoEN.html', 'src/pages/menu/it/chiSiamo.html') + activeTab;
            } else if(window.location.pathname.includes('contattiEN.html')) {
                window.location.href = window.location.pathname.replace('src/pages/menu/en/contattiEN.html', 'src/pages/menu/it/contatti.html') + activeTab;
            } else if(window.location.pathname.includes('indexEN.html')) {
                window.location.href = window.location.pathname.replace('/lostInRome/indexEN.html', '/lostInRome/index.html') + activeTab;
            } else if(window.location.pathname.includes('/en/colosseo.html')) {
                window.location.href = window.location.pathname.replace('src/pages/monument/en/colosseo.html', 'src/pages/monument/it/colosseo.html') + activeTab;
            } else if(window.location.pathname.includes('/en/altareDellaPatria.html')) {
                window.location.href = window.location.pathname.replace('src/pages/monument/en/altareDellaPatria.html', 'src/pages/monument/it/altareDellaPatria.html') + activeTab;
            } else if(window.location.pathname.includes('/en/araPacis.html')) {
                window.location.href = window.location.pathname.replace('src/pages/monument/en/araPacis.html', 'src/pages/monument/it/araPacis.html') + activeTab;
            } else if(window.location.pathname.includes('/en/fontanaDiTrevi.html')) {
                window.location.href = window.location.pathname.replace('src/pages/monument/en/fontanaDiTrevi.html', 'src/pages/monument/it/fontanaDiTrevi.html') + activeTab;
            } else if(window.location.pathname.includes('/en/pantheon.html')) {
                window.location.href = window.location.pathname.replace('src/pages/monument/en/pantheon.html', 'src/pages/monument/it/pantheon.html') + activeTab;
            } else if(window.location.pathname.includes('/en/piazzaDelPopolo.html')) {
                window.location.href = window.location.pathname.replace('src/pages/monument/en/piazzaDelPopolo.html', 'src/pages/monument/it/piazzaDelPopolo.html') + activeTab;
            } else if(window.location.pathname.includes('/en/piazzaDiSpagna.html')) {
                window.location.href = window.location.pathname.replace('src/pages/monument/en/piazzaDiSpagna.html', 'src/pages/monument/it/piazzaDiSpagna.html') + activeTab;
            }
        }

        document.documentElement.lang = newLang;
        localStorage.setItem('preferredLang', newLang);
    },

    initialize: function() {
        // 1. Inizializzazione lingua (originale)
        const savedLang = localStorage.getItem('preferredLang') || 'it';
        this.switchLanguage(savedLang);

        // 2. Listener per cambio lingua (originale)
        document.querySelectorAll('.language-switcher .dropdown-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const newLang = e.currentTarget.getAttribute('data-lang');
                this.switchLanguage(newLang, e);
            });
        });

        // 3. Gestisce i tab
        $(document).ready(function() {
            // Attiva tab dall'hash URL
            if(window.location.hash) {
                const tab = $(`a[href="${window.location.hash}"]`);
                if(tab.length) tab.tab('show');
            }

            // Aggiorna hash quando si cambia tab
            $('#itineraryTab a').on('shown.bs.tab', function(e) {
                window.location.hash = $(e.target).attr('href');
            });
        });
    }
};

// Inizializza al load della pagina
document.addEventListener('DOMContentLoaded', function() {
    window.LanguageSwitcher.initialize();
});