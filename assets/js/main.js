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


function myFunction() { 

    // chilometri
    let chilometri = parseFloat( document.getElementById("chilometri").value );

    // età
    let eta = parseInt( document.getElementById("eta").value );

    // tariffa in base al numero di chilometri
    const tariffa = 0.21;

    // prezzo totale
    let prezzoTotale = tariffa * chilometri;

    // sconto del 20%
    if ( eta < 18 ) {

        scontoMinori =  prezzoTotale * 0.8;
        prezzoFinale = `
            <p>Complimenti hai uno sconto del 20&#37; perch&#233; sei minorenne!</p>  
            <span>${ ( scontoMinori.toFixed(2) ) }&#8364;</span>
        `;

    // sconto del 40%
    } else if ( eta > 65 ) {

        scontoAnziani = prezzoTotale * 0.6;
        prezzoFinale = `
        <p>Complimenti hai uno sconto del 40&#37; perch&#233; sei over 65!</p>  
        <span>${ ( scontoAnziani.toFixed(2) ) }&#8364;</span>
        `;

    } else { 
        prezzoFinale = prezzoTotale;
    }

    // Inserimento dei dati nell'output
    document.getElementById("prezzoFinale").innerHTML = prezzoFinale;

    console.log(prezzoTotale);

}

/* 
    preventDefault() per evitare il caricamento della pagina ogni volta che si chiama la funzione myFunction()
*/
document.getElementById("button-form").addEventListener("click", function(event){
        event.preventDefault()
    });
