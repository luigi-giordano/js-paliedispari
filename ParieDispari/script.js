const numGiocatore = Math.ceil(Math.random() * 5)
const numComputer = Math.ceil(Math.random() * 5)

let somma = numGiocatore + numComputer;
let messaggio = '';
let sceltaGiocatore = 'PARI';

console.log('Il numero giocatore uscito è' ,numGiocatore );
console.log('Il numero computer uscito è' ,numComputer);

if (!(somma % 2)){
  messaggio = 'PARI'
} else {
  messaggio = 'DISPARI'
}
console.log(messaggio);

if(messaggio === sceltaGiocatore){
  console.log('Il Giocatore ha vinto!');
} else {
  console.log('Il Computer ha vinto!');
}