// Inserisci un numero, se è pari stampa il numero,
//  se è dispari stampa il numero successivo.

let userNumber = parseInt(prompt('Dimmi un numero?'));

if ( userNumber % 2 === 0 ) {
    console.log(userNumber);
} else {
    userNumber++;
    console.log(userNumber);
}