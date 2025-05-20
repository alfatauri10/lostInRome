document.addEventListener("DOMContentLoaded", function() {

    includeHTML({
      headerPlaceHolder: "../../include/header.html",
      footerPlaceHolder: "../../include/footer.html"
    });

    // Gestione invio form
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const submitText = document.getElementById('submitText');
    const spinner = document.getElementById('spinner');
    const formAlert = document.getElementById('formAlert');

    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Disabilita il pulsante durante l'invio
      submitBtn.disabled = true;
      submitText.textContent = 'Invio in corso...';
      spinner.classList.remove('d-none');
      formAlert.innerHTML = '';

      try {
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: new FormData(contactForm),
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          formAlert.innerHTML = `
            <div class="alert alert-success">
              Messaggio inviato a <b>unrealteam.info@gmail.com<b> con successo! Ti risponderemo al più presto.
            </div>
          `;
          contactForm.reset();
        } else {
          throw new Error('Errore nel server');
        }
      } catch (error) {
        formAlert.innerHTML = `
          <div class="alert alert-danger">
            Si è verificato un errore. Riprova più tardi o scrivici direttamente a <b>unrealteam.info@gmail.com<b>
          </div>
        `;
      } finally {
        submitBtn.disabled = false;
        submitText.textContent = 'Invia';
        spinner.classList.add('d-none');
      }
    });
  });