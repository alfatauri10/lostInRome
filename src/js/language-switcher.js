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
            // Aggiorna anche i link se necessario

            // Se siamo nella pagina "Chi siamo", reindirizza alla versione EN
            if(window.location.pathname.includes('chiSiamo.html')) {
                window.location.href = window.location.pathname.replace('it/chiSiamo.html', 'en/chiSiamoEN.html');
            }else if(window.location.pathname.includes('contatti.html')) {
               window.location.href = window.location.pathname.replace('it/contatti.html', 'en/contattiEN.html');
           }
        } else {
            flag.className = 'flag-icon flag-gb';
            text.textContent = 'EN';
            // Mostra menu italiano e nascondi inglese
            document.querySelector('.lang-it').style.display = 'flex';
            document.querySelector('.lang-en').style.display = 'none';
            // Se siamo nella pagina "Chi siamo EN", reindirizza alla versione IT
            if(window.location.pathname.includes('chiSiamoEN.html')) {
                window.location.href = window.location.pathname.replace('en/chiSiamoEN.html', 'it/chiSiamo.html');
            }else if(window.location.pathname.includes('contattiEN.html')) {
                window.location.href = window.location.pathname.replace('en/contattiEN.html', 'it/contatti.html');
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
