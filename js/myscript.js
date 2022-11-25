/**

CONSEGNA:
 
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
si ma noi cosa vogliamo fare?
torniamo a scrivere in italiano
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
*/

// GIOCO DEI DADI

let playerNumberElement = document.getElementById('player-number');
let computerNumberElement = document.getElementById('computer-number');

const button = document.querySelector('.btn')

button.addEventListener ('click', function(){

    playerNumber = Math.floor(Math.random() * 6 + 1);
    computerNumber = Math.floor(Math.random() * 6 + 1);
    playerNumberElement.innerHTML = playerNumber;
    computerNumberElement.innerHTML = computerNumber;

    let esitoPlayer = document.getElementById('esito-player');
    let esitoComputer = document.getElementById('esito-computer');

    if ( playerNumber > computerNumber ){
        esitoPlayer.innerHTML = 'Hai vinto!';
        esitoComputer.innerHTML = 'Hai perso!';
    } else if ( playerNumber < computerNumber ) {
        esitoComputer.innerHTML = 'Hai vinto!';
        esitoPlayer.innerHTML = 'Hai perso!';
    } else {
        esitoComputer.innerHTML = 'Pareggio!';
        esitoPlayer.innerHTML = 'Pareggio!';
    }
})

// ESERCIZIO EMAIL

/**
CONSEGNA:

Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?

*/

const lista = ['ciao@gmail.com', 'pippo@hotmail.it', 'pluto@live.com'];

const submit = document.getElementById('submit');
const userEmail = document.getElementById('user-email');

submit.addEventListener('click', function(){

    let presente = false;

    for (let i=0; i < lista.length; i++ ){
        
        if (userEmail.value == lista[i]){
            presente = true;
        }
            
    }

if (presente){
    console.log('puoi accedere');
} else{
    console.log('registrati');
}

})


