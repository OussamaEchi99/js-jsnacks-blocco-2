// Crea un array di numeri interi
// e fai la somma di tutti gli elementi
// che sono in posizione dispari

let numbers = [ 10, 14, 5, 7, 1, 20, 23]

let somma = 0

for ( let i = 0; i < numbers.length; i++) {

    thisNumber= numbers[i];
    // console.log(thisNumber);

    if ( thisNumber % 2 != 0 ) {
        somma += thisNumber;
        
    }
}

console.log(somma);