// Generatore di “nomi cognomi” casuali: prendendo
// una lista di nomi e una lista di cognomi,
// Gatsby vuole generare una falsa lista di invitati.

let names = [ 'Alberto', 'Darius', 'Patrick', 'Emanuele', 'Elmira', 'Oussama', 'Lillio'];

let lastNames = [ 'Bisetti', 'Dejan', 'Galasso', 'Salzano', 'Radfar', 'Echi', 'Sebastian'];

for ( let i = 0; i < 7; i++ ) {
    let thisNames = names[Math.floor(Math.random() * 6)]
    let thisLastNames = lastNames[Math.floor(Math.random() * 6)];

    guest = `${thisNames} ${thisLastNames}`
    console.log(guest);
}