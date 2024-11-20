//CHIEDERE ALL'UTENTE DI INSERIRE UNA PAROLA
let parolaDaInserire = prompt('Inserisci una parola:');
let message = '';

//CONTROLLO LE IPOTESI
if(isPalindromo(parolaDaInserire)){
  message = `La parola ${parolaDaInserire} è palindroma.`;
} else {
  message = `La parola ${parolaDaInserire} non è palindroma.`;
}

//STAMPO LA MIA PAROLA PALINDROMA
console.log(message);

//FUNZIONE
function isPalindromo(parola){
  parola = parola.toLowerCase();
  return parola === parola.split('').reverse().join('');
}