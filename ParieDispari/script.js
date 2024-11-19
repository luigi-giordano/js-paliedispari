const numGiocatore = Math.ceil(Math.random() * 5)
const numComputer = Math.ceil(Math.random() * 5)

let somma = numGiocatore + numComputer;

console.log('Il numero giocatore uscito è' ,numGiocatore );
console.log('Il numero computer uscito è' ,numComputer);

if (somma % 2){
  messaggio = 'PARI'
} else {
  messaggio = 'DISPARI'
}
console.log(messaggio);