

# Software Requirements Specification (SRS) [link al GoogleDoc](https://docs.google.com/document/d/1vZeSWB2j1AxRaS60J09652LO0gDZCkJkbwvGzQtmzkE/edit?usp=sharing)
for

# [**LostInRome**](https://lostinrome.netlify.app/) <img src="src/resources/images/loghi/logoLostInRome.png" alt="Logo" width="60">  

                                                             una guida bilingue per chi ama perdersi nei vicoli di Roma
							   
[visita il sito](https://lostinrome.netlify.app/)

Prepared by _**Alfandari Jacopo**_

 
**Data ultima modifica:** 16/09/2025

# Cronologia versioni SRS

| Version  | Data Ultima modifica | Autore     |   Stato    |  Modifica                                         |
|----------|----------------------|------------|----------- |-------------------------------------------------- |
| v1.0     | 27/03/2025           | JAlfandari |Approved ☑️ |first release										|
| v1.1     | 31/03/2025           | JAlfandari |Approved ☑️ |Add functionality e mockup							|
| v1.2     | 27/04/2025           | JAlfandari |Approved ☑️ |Add Itinerary Section								|
| v1.3     | 16/09/2025           | JAlfandari |Approved ☑️ |Add Modulo IoT Monitoraggio dati ambientali e Quiz  |



# Introduzione
# Descrizione generale (Purpose)
Il sito è una guida turistica digitale in italiano e inglese che presenta 6 monumenti iconici di Roma:

- Piazza del Popolo e Basiliche gemelle 
- Altare della Patria 
- Ara Pacis 
- Pantheon 
- Piazza di Spagna 
- Fontana di Trevi 


# Caratteristiche principali 

✅ Solo consultazione (nessuna interazione complessa)  
🌍 Bilingue (italiano/inglese) con switch tramite bandiere  
🗺️ Mappe integrate (Google Maps) per ogni monumento  
📱 Design responsive (mobile-first)  

Priorità lingua: Impostare l’italiano come lingua predefinita.

Per il momento non sono previste funzionalità di registrazione e autenticazione utente, né altre funzionalità di backend.  Da considerarsi come sviluppi futuri.


# Requisiti Funzionali (RF)
Segue una descrizione dettagliata di tutti i requisiti che dovranno essere rispettati nell’implementazione delle pagine del sito web.

# Requisiti Funzionali Globali (di tutte le pagine)
Tutte le pagine web da sviluppare dovranno avere i seguenti requisiti.
# RF-0: Switch lingua (IT/EN) 

Ogni pagina dovrà avere un’icona a forma di bandiera (🇮🇹/🇬🇧) per lo switch di lingua (da IT a EN e da EN a IT).

Esempio:

- pagina in IT deve avere bandiera 🇬🇧 che rimanda alla pagina in EN
- pagina in EN deve avere bandiera 🇮🇹 che rimanda alla pagina in IT

# RF-1: Link alla HomePage della stessa lingua 
Ogni pagina dovrà avere un’icona a forma di casa (🏠) che rimanda alla homePage nella stessa lingua

Esempio: 
 - pagina in IT → clicco sull’icona homePage 🏠 → homePage in IT


# Stile comune a tutte le pagine 
Ogni pagina dovrà avere lo stesso stile. 

Segue un’immagine delle varie sezioni di una pagina web.

# RF-2: Header (con navbar) comune a tutte le pagine
Ogni pagina dovrà avere lo stesso stile per l’header.
# RF-3: Footer comune a tutte le pagine
Ogni pagina dovrà avere lo stesso stile per il footer.

# RF-4: Contenuto comune a tutte le pagine
Ogni pagina dovrà avere lo stesso stile per il contenuto. 

- 🛠️ **TODO**: INSERIRE MOCKUP 

# RF-5: Navigazione responsive

 Ogni pagina dovrà adattarsi perfettamente alla dimensione di qualsiasi schermo (mobile, tablet, desktop) garantendo una user-experience ottimale.


# Requisiti Funzionali Singole Pagine
     Le singole pagine web da sviluppare dovranno avere i seguenti requisiti.
     
# RF-6: Home pages in lingua (IT/EN) 
- La home page di default dovrà essere quella in IT.
- La home page dovrà contenere una galleria di sei immagini scorrevoli visualizzabili a gruppi di tre.
  
- Le immagini della galleria dovranno:
	- rappresentare i sei monumenti 
	- al passaggio del mouse sulle immagini, si dovrà visualizzare testo descrittivo
	- essere cliccabili: al click su ognuna di queste immagini il sito dovrà aprire (nella stessa scheda) la pagina corrispondente al monumento nella lingua della home page in cui ci si trova
   
- La home page dovrà avere un’icona a forma di bandiera (🇮🇹/🇬🇧) per lo switch di lingua (da IT a EN e da EN a IT).
- Dovranno quindi rispettare gli stili comuni:
	- switch lingua (RF-0),
	- header (RF-2)
	- footer (RF-3) 
	- content (RF-4)
	- responsive (RF-5)

# RF-7: 	Menù a tendina 


Cliccando sulle tre linee situate in alto a destra, si aprirà un menù a tendina, con lo sfondo che passerà in secondo piano, diventando oscurato rispetto al menù appena visualizzato. 

Il menu conterrà i seguenti elementi:
	
 LOGO; COMPANY_NAME guida turistica web bilingue

Home Page.
Chi siamo.  
—-----------------------------------------------------
Contattaci.
Un'icona della mail accompagnata dall'indirizzo email (da definire).
—------------------------------------------------------
Inoltre, saranno presenti tre icone dei seguenti social network: Facebook, Instagram e YouTube.

# RF-8: Page monumenti
- Dovranno avere una sezione **testo** in cui inserire
	- History and construction of the monument
	- How it is used today
	- Recent facts (reconstructions, damages, films where it appeared, advertisements, ecc...)                                   
	- Legends and fun facts
- Dovranno contenere **galleria immagini**
- Dovranno contenere **mappa Google interattiva**
- Dovranno avere un’**icona** a forma di bandiera (🇮🇹/🇬🇧) per lo switch di lingua (RF-0).
- Dovranno contenere **icona** **Home** che rimanda alla home page nella stessa lingua (RF-1)
- Dovranno quindi rispettare gli stili comuni:
	- switch lingua (RF-0),
	- link home page stessa lingua ( RF-1)
	- header (RF-2)
	- footer (RF-3) 
	- content (RF-4)
	- responsive (RF-5)

 # RF-9: Audiolingua 
 Accanto ad ogni sezione delle pagine dei monumenti dovrà essere presente un’icona 🔈che al click riprodurrá un audio relativo testo a cui si riferisce.
Deve essere possibile mettere in pausa l’audio e poi riprenderne la riproduzione.
Questo dovrà essere presente sia nella pagine in inglese che in quelle in italiano.

# RF-10:  Pagina Chi siamo/About us 

# RF11: Pagina Contatti/Contact

# RF12: Creazione itinerari
Gli itinerari dovranno essere sviluppati prendendo spunto dall’itinerario LostInRome contenuto nel file: Itinerari. Ogni itinerario dovrà avere una breve descrizione.
		
Ci saranno 4 tipi di itinerari
LostInRome
Eno-Gastronomico (Roma)
Castelli Romani
Avventura

		2. Itinerario Enogastronomico (Roma)
L’itinerario dovrà includere una selezione di locali tipici della tradizione romana per colazione, pranzo e cena, suggerendo per ciascuno i piatti consigliati in base ai diversi gusti (carne, pesce, vegetariano, ecc.), il vino o la bevanda ideale in abbinamento e un’indicazione orientativa dei costi.

3. Itinerario Culturale e Paesaggistico – Castelli Romani
L’itinerario dovrà proporre un percorso accuratamente selezionato tra le migliori attività, attrazioni e bellezze naturali che la zona dei Castelli Romani ha da offrire. Verranno inclusi i borghi più suggestivi, i punti panoramici imperdibili, le ville storiche, i parchi naturali e gli itinerari enogastronomici locali.
Sarà inoltre indicato come raggiungere ciascuna tappa, sia con mezzi pubblici che privati, insieme a eventuali consigli pratici per il parcheggio, i periodi migliori per la visita e le esperienze autentiche da non perdere.

4. Avventura 
Dovrà essere un itinerario tematico dedicato all’avventura nella città di Roma, pensato per utenti che desiderano esperienze dinamiche, emozionanti e fuori dai percorsi turistici tradizionali.
Il sistema dovrà selezionare attività ad alto contenuto esperienziale, come escursioni urbane, percorsi in bici, trekking nei parchi archeologici, escape room a tema storico, e tour notturni insoliti.
ogni tappa dovrà avere:
una descrizione dell’attività,
il livello di avventura (moderato, intenso, estremo),
la durata media,
l’indirizzo o posizione sulla mappa,
i costi indicativi,
eventuali requisiti fisici o di età.
 Dovranno essere fornite indicazioni su come raggiungere ogni luogo, con opzioni per mezzi pubblici, bicicletta o a piedi e il costo.
 

# RF13: Monitoraggio Dati Ambientali
Il sito dovrà prevedere una sezione accessibile dal menù per la visualizzazione di dati ambientali in tempo reale.
A tal fine sarà implementato un modulo IoT Arduino UNO R4 Wi-Fi collegato a sensori ambientali per il monitoraggio in tempo reale di parametri come temperatura e umidità. I dati raccolti vengono inviati in formato JSON a un database Firebase e saranno letti tramite JavaScript e visualizzati in un'apposita sezione del sito.

Arduino ESP32:
 si collega al wifi
 legge i dati ambientali rilevati dai sensori 
 invia (scrive) i dati ambientali sul cloud (Firebase) in un database
Il sito web 
si collega a Firebase e legge i dati ambientali tramite Javascript 
visualizza i dati ambientali  in VR con A-Frame.
Il visore apre il sito web e vede i dati aggiornarsi in tempo reale



Formato in cui i dati saranno salvati sul Database Firebase:
json
{
  "sensors": {
    "temperature": 22.5,
    "humidity": 65.3,
    "soil_moisture": 2048
  }
}

# RF14: Quiz “Quanto conosci Roma?”

Il sito dovrà prevedere una sezione accessibile dal menù che consentirà agli utenti di mettersi alla prova su quanto conosce Roma.




# Stack tecnologico ⚙️
 # LINGUAGGI DI PROGRAMMAZIONE
- HTML5
- CSS
- JavaScript
- Bootstrap
  
 # DIPENDENZE, LIBRERIE E ALTRI FRAMEWORK
- Google Maps Embed
- AMBIENTE DI SVILUPPO
- IntelliJ

 # STRUMENTI E PIATTAFORME
 - Per il **Versioning**: GitHub 
 - **Deployment** e **Hosting**: Netlify 

 # REQUISITI TECNICI
 - **Cross-browser compatibility** (Browser supportati: Chrome, Firefox, Safari, Edge)
 - **Responsive**: Bootstrap

# Repository GitHub per il VCS (Versioning Control Software)

A questo LINK c’è la repository del progetto.

Url del progetto: https://github.com/alfatauri10/lostInRome

# Deployment, Hosting e dominio - Netlify
Come sito di hosting abbiamo scelto di usare **Netlify** a cui è stata collegata la repository **GitHub** del progetto. 

L’URL del sito è https://lostinrome.netlify.app.


# 4. TEST SUITE
# 4.1 RF-9 TEST CASES HOMEPAGE
- 🛠️ **TODO**: **LISTA CASI DI TEST** 

# 4.2 RF-10 TEST CASES PAGE DOCUMENT
- 🛠️ **TODO**: **LISTA CASI DI TEST** 

# 5. RIFERIMENTI UTILI
https://www.deborasilvestri.it/







