// Crea un array vuoto e chiedi all’utente un numero
// da inserire nell’array. Continua a chiedere i numeri
// all’utente e a inserirli nell’array fino a quando
// a somma degli elementi è minore di 50.

let numbers = []

let somma = 0

while ( somma < 50 ) {

    const userNumbers = parseInt(prompt('Dimmi un numero?'));

    numbers.push(userNumbers);

    somma += userNumbers
    console.log(somma);

}
