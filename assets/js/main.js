/*
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero

Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

MILESTONE 2:
Solo una volta che il MILESTONE 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

// Funzione al click
function myFunction(x) { 
    
    // previene il reset della pagina al click sul bottone
    x.preventDefault()

    // nome e cognome
    let nomeCognome = document.getElementById("nomeCognome").value;

    // chilometri
    let chilometri = parseFloat( document.getElementById("chilometri").value );

    // età
    let eta = parseInt( document.getElementById("eta").value );

    // carrozza
    let carrozza = Math.floor( (Math.random() * 10) + 1 );

    // codice CP
    let codiceCP = Math.floor( (Math.random() * 100000) + 1 );

    // tariffa in base al numero di chilometri
    const tariffa = 0.21;

    // sconto minorenni del 20%
    let scontMinori = 0.8;

    // sconto anziani del 40%
    let scontAnziani = 0.8;

    // prezzo prima classe, 20% in più
    let primaClasse = 1.2;

    // prezzo seconda classe, 10% in più
    let secondaClasse = 1.1;

    // prezzo totale per km
    let prezzo = tariffa * chilometri;

    // Variabile per prezzo classe
    let prezzoClasse;
    
    // Classe passeggero
    let classe = document.getElementById("classePasseggero").value;
    
    // Condizione per aumento di prezzo in base alla classe scelta
    if ( classe == "primaClasse" ) {

        prezzoClasse = prezzo * 1.2;

        classePasseggero = "Prima Classe";

    } else if ( classe == "secondaClasse" ) {

        prezzoClasse = prezzo * 1.1;

        classePasseggero = "Seconda Classe";

    }

    // sconto minorenni del 20%
    if ( eta < 18 && classe == "primaClasse" ) {

        prezzo = prezzoClasse * scontMinori;
        prezzoFinale = `
            <p>Complimenti hai uno sconto del 20&#37; perch&#233; sei minorenne!</p>  
            <span>${ ( prezzo.toFixed(2) ) }&#8364;</span>
        `;

    // sconto over 65 del 40%
    } else if ( eta > 65 ) {

        prezzo = prezzoClasse * scontAnziani;
        prezzoFinale = `
        <p>Complimenti hai uno sconto del 40&#37; perch&#233; sei over 65!</p>  
        <span>${ ( prezzo.toFixed(2) ) }&#8364;</span>
        `;

    // senza sconti
    } else { 
        prezzoFinale = `
        <span>${ prezzo }&#8364;</span>
        `
    }

    // Inserimento dei dati nell'output
    document.getElementById("bigliettoPasseggero").innerHTML = 
    `
        <div class="container h-100 border border-2 border-warning p-5">

            <h3 class="fw-semibold mb-4">Dettagli passeggero</h3>

            <div class="row py-4 h-100 border border-2 border-dark">

                <div class="col-3 d-flex flex-column justify-content-between">

                    <h5 class="text-uppercase">nome passeggero</h5>
                    <h4>${nomeCognome}</h4>
                </div>

                <div class="col-2 d-flex flex-column justify-content-between border-start">

                    <h5>Classe</h5>
                    <span>${classePasseggero}</span>
                </div>
 
                <div class="col-2 d-flex flex-column justify-content-between border-start">

                    <h5>Carrozza</h5>
                    <span>${carrozza}</span>
                </div>

                <div class="col-2 d-flex flex-column justify-content-between border-start">

                    <h5>Codice CP</h5>
                    <span>${codiceCP}</span>
                </div>

                <div class="col-3 d-flex flex-column justify-content-between border-start">

                    <h5>Costo Biglietto</h5>
                    <span>${prezzoFinale}</span>
                </div>
            </div>
        </div>
    ` ;

    // Add classlist into div( id = "output-container" )
    const list = document.getElementById("output-container");

    list.classList.add("box");

    list.style.display = "block";

    console.log(nomeCognome,classePasseggero,carrozza,codiceCP,prezzoFinale);
}