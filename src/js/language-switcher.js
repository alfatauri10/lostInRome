window.LanguageSwitcher = {
    switchLanguage: function(newLang) {
        const languageDropdown = document.getElementById('languageDropdown');
        if (!languageDropdown) return;

        // Cambia la bandiera e il testo nel pulsante principale
        const flag = languageDropdown.querySelector('.flag-icon');
        const text = languageDropdown.querySelector('.lang-text');
        const italianTextElement = document.querySelector('.italian-text');
        const englishTextElement = document.querySelector('.english-text');

        if(newLang === 'en') {
            flag.className = 'flag-icon flag-gb';
            text.textContent = '';
            italianTextElement.textContent='Italian';
            englishTextElement.textContent='English';

            // Mostra menu inglese e nascondi italiano
            document.querySelector('.lang-it').style.display = 'none';
            document.querySelector('.lang-en').style.display = 'flex';
            // Mostra motto inglese e nascondi italiano
            document.querySelector('.motto-lang-it').style.display = 'none';
            document.querySelector('.motto-lang-en').style.display = 'flex';

            //redirect verso la corrispondente pagina nell'altra lingua
            if(window.location.pathname.includes('chiSiamo.html')) {
                window.location.href = window.location.pathname.replace('src/pages/menu/it/chiSiamo.html', 'src/pages/menu/en/chiSiamoEN.html');
            }else if(window.location.pathname.includes('contatti.html')) {
                window.location.href = window.location.pathname.replace('src/pages/menu/it/contatti.html', 'src/pages/menu/en/contattiEN.html');
            }else if(window.location.pathname.includes('index.html')) {
                window.location.href = window.location.pathname.replace('/lostInRome/index.html', '/lostInRome/indexEN.html');
            }else if(window.location.pathname === '/' || window.location.href === 'https://lostinrome.netlify.app/') {
                window.location.href = '/lostInRome/indexEN.html';
            }else if(window.location.pathname.includes('/it/colosseo.html')) {
                window.location.href = window.location.pathname.replace('src/pages/monument/it/colosseo.html', 'src/pages/monument/en/colosseo.html');
            }else if(window.location.pathname.includes('/it/altareDellaPatria.html')) {
                             window.location.href = window.location.pathname.replace('src/pages/monument/it/altareDellaPatria.html', 'src/pages/monument/en/altareDellaPatria.html');
                         }else if(window.location.pathname.includes('/it/araPacis.html')) {//arapacis
                             window.location.href = window.location.pathname.replace('src/pages/monument/it/araPacis.html', 'src/pages/monument/en/araPacis.html');
                         }else if(window.location.pathname.includes('/it/fontanaDiTrevi.html')) {//fontana
                              window.location.href = window.location.pathname.replace('src/pages/monument/it/fontanaDiTrevi.html', 'src/pages/monument/en/fontanaDiTrevi.html');
                         }else if(window.location.pathname.includes('/it/pantheon.html')) {//pantheon
                              window.location.href = window.location.pathname.replace('src/pages/monument/it/pantheon.html', 'src/pages/monument/en/pantheon.html');
                         }else if(window.location.pathname.includes('/it/piazzaDelPopolo.html')) {//piazzaDelPopolo
                             window.location.href = window.location.pathname.replace('src/pages/monument/it/piazzaDelPopolo.html', 'src/pages/monument/en/piazzaDelPopolo.html');
                         }else if(window.location.pathname.includes('/it/piazzaDiSpagna.html')) { //piazzaDiSpagna
                             window.location.href = window.location.pathname.replace('src/pages/monument/it/piazzaDiSpagna.html', 'src/pages/monument/en/piazzaDiSpagna.html');
                         }

        } else {
            flag.className = 'flag-icon flag-it';
            text.textContent = '';

            italianTextElement.textContent='Italiano';
            englishTextElement.textContent='Inglese';

            // Mostra menu italiano e nascondi inglese
            document.querySelector('.lang-it').style.display = 'flex';
            document.querySelector('.lang-en').style.display = 'none';
            // Mostra motto italiano e nascondi inglese
            document.querySelector('.motto-lang-it').style.display = 'flex';
            document.querySelector('.motto-lang-en').style.display = 'none';

            //redirect verso la corrispondente pagina nell'altra lingua
            if(window.location.pathname.includes('chiSiamoEN.html')) {
                window.location.href = window.location.pathname.replace('src/pages/menu/en/chiSiamoEN.html', 'src/pages/menu/it/chiSiamo.html');
            }else if(window.location.pathname.includes('contattiEN.html')) {
                window.location.href = window.location.pathname.replace('src/pages/menu/en/contattiEN.html', 'src/pages/menu/it/contatti.html');
            }else if(window.location.pathname.includes('indexEN.html')) {
                window.location.href = window.location.pathname.replace('/lostInRome/indexEN.html', '/lostInRome/index.html');
            }else if(window.location.pathname.includes('/en/colosseo.html')) {
                window.location.href = window.location.pathname.replace('src/pages/monument/en/colosseo.html', 'src/pages/monument/it/colosseo.html');
            }else if(window.location.pathname.includes('/en/altareDellaPatria.html')) {
              window.location.href = window.location.pathname.replace('src/pages/monument/en/altareDellaPatria.html', 'src/pages/monument/it/altareDellaPatria.html');
          }else if(window.location.pathname.includes('/en/araPacis.html')) {//arapacis
              window.location.href = window.location.pathname.replace('src/pages/monument/en/araPacis.html', 'src/pages/monument/it/araPacis.html');
          }else if(window.location.pathname.includes('/en/fontanaDiTrevi.html')) {//fontana
               window.location.href = window.location.pathname.replace('src/pages/monument/en/fontanaDiTrevi.html', 'src/pages/monument/it/fontanaDiTrevi.html');
          }else if(window.location.pathname.includes('/en/pantheon.html')) {//pantheon
               window.location.href = window.location.pathname.replace('src/pages/monument/en/pantheon.html', 'src/pages/monument/it/pantheon.html');
          }else if(window.location.pathname.includes('/en/piazzaDelPopolo.html')) {//piazzaDelPopolo
              window.location.href = window.location.pathname.replace('src/pages/monument/en/piazzaDelPopolo.html', 'src/pages/monument/it/piazzaDelPopolo.html');
          }else if(window.location.pathname.includes('/en/piazzaDiSpagna.html')) { //piazzaDiSpagna
              window.location.href = window.location.pathname.replace('src/pages/monument/en/piazzaDiSpagna.html', 'src/pages/monument/it/piazzaDiSpagna.html');
          }
        }

        document.documentElement.lang = newLang;
        // Salva la preferenza
        localStorage.setItem('preferredLang', newLang);
    },

    initialize: function() {
        // PER RICORDARSI L'ULTIMA LINGUA SELEZIONATA E NON RESETTARE L'IT
        const savedLang = localStorage.getItem('preferredLang') || 'it';
        this.switchLanguage(savedLang);

        // Aggiungi gestori di eventi per gli elementi del menu a tendina
        document.querySelectorAll('.language-switcher .dropdown-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const newLang = e.currentTarget.getAttribute('data-lang');
                window.LanguageSwitcher.switchLanguage(newLang);
            });
        });
    }
};