window.LanguageSwitcher = {
    switchLanguage: function(newLang) {
        const languageToggle = document.getElementById('languageToggle');
        if (!languageToggle) return;

        // Cambia la bandiera e il testo
        const flag = languageToggle.querySelector('.flag-icon');
        const text = languageToggle.querySelector('.lang-text');


        if(newLang === 'en') {
            flag.className = 'flag-icon flag-it';
            text.textContent = 'IT';

            // Mostra menu inglese e nascondi italiano
            document.querySelector('.lang-it').style.display = 'none';
            document.querySelector('.lang-en').style.display = 'flex';

            //redirect verso la corrispondente pagina nell'altra lingua
            if(window.location.pathname.includes('chiSiamo.html')) {
                window.location.href = window.location.pathname.replace('src/pages/menu/it/chiSiamo.html', 'src/pages/menu/en/chiSiamoEN.html');
            }else if(window.location.pathname.includes('contatti.html')) {
                window.location.href = window.location.pathname.replace('src/pages/menu/it/contatti.html', 'src/pages/menu/en/contattiEN.html');
            }else if(window.location.pathname.includes('index.html')) {
                window.location.href = window.location.pathname.replace('/lostInRome/index.html', '/lostInRome/indexEN.html');
            }else if(window.location.pathname === '/' || window.location.href === 'https://lostinrome.netlify.app/') {
                window.location.href = '/lostInRome/indexEN.html';
            }else if(window.location.pathname.includes('/it/colosseo.html')) { //mettere anche /it perchè poichè le due pagine si chiamano uguali --> sfarfallio
                window.location.href = window.location.pathname.replace('src/pages/monument/it/colosseo.html', 'src/pages/monument/en/colosseo.html');
            }

        } else {
            flag.className = 'flag-icon flag-gb';
            text.textContent = 'EN';

            // Mostra menu italiano e nascondi inglese
            document.querySelector('.lang-it').style.display = 'flex';
            document.querySelector('.lang-en').style.display = 'none';

            //redirect verso la corrispondente pagina nell'altra lingua
            if(window.location.pathname.includes('chiSiamoEN.html')) {
                window.location.href = window.location.pathname.replace('src/pages/menu/en/chiSiamoEN.html', 'src/pages/menu/it/chiSiamo.html');
            }else if(window.location.pathname.includes('contattiEN.html')) {
                window.location.href = window.location.pathname.replace('src/pages/menu/en/contattiEN.html', 'src/pages/menu/it/contatti.html');
            }else if(window.location.pathname.includes('indexEN.html')) {
                window.location.href = window.location.pathname.replace('/lostInRome/indexEN.html', '/lostInRome/index.html');
            }else if(window.location.pathname.includes('/en/colosseo.html')) {
                window.location.href = window.location.pathname.replace('src/pages/monument/en/colosseo.html', 'src/pages/monument/it/colosseo.html');
            }

        }

        document.documentElement.lang = newLang;
        // Salva la preferenza
        localStorage.setItem('preferredLang', newLang);

    },

    initialize: function() {


        const languageToggle = document.getElementById('languageToggle');

        if (languageToggle) {

          //PER RICORDARSI L'ULTIMA LINGUA SELEZIONATA E NON RESETTARE L'IT
          const savedLang = localStorage.getItem('preferredLang') || 'it';
          this.switchLanguage(savedLang);



            languageToggle.addEventListener('click', function() {
                const currentLang = document.documentElement.lang;
                const newLang = currentLang === 'it' ? 'en' : 'it';
                window.LanguageSwitcher.switchLanguage(newLang);
            });

        }
    }
};
