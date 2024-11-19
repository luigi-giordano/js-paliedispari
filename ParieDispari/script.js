//VARIABILI
//const numGiocatore = Math.ceil(Math.random() * 5)
//const numComputer = Math.ceil(Math.random() * 5)

//FUNZIONE PER GENERARE NUMERO CASUALE DA 1 A 5
function numeroRandom() {
  return Math.ceil(Math.random() * 5);
}

//GENERA IL NUMERO RANDOM PER GIOCATORE E PC
const numComputer = numeroRandom();
const numGiocatore = numeroRandom();

//VARIABILI
let somma = numGiocatore + numComputer;
let messaggio = '';
let sceltaGiocatore = 'PARI';

//STAMPO IL NUMERO SCELTO DA GIOCATORE E PC
console.log('Il numero giocatore uscito è' ,numGiocatore );
console.log('Il numero computer uscito è' ,numComputer);

//VERIFICO LE ALTERNATIVE
if (!(somma % 2)){
  messaggio = 'PARI'
} else {
  messaggio = 'DISPARI'
}

//STAMPO IL MESSAGGIO CHE RICEVO DALLE ALTERNATIVE
console.log(messaggio);

//VERIFICO CHI VINCE TRA GIOCATORE E PC SCRIVENDO LE ALTERNATIVE
if(messaggio === sceltaGiocatore){
  console.log('Il Giocatore ha vinto!');
} else {
  console.log('Il Computer ha vinto!');
}