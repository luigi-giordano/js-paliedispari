//CHIEDERE ALL'UTENTE DI INSERIRE UNA PAROLA
const parolaDaInserire = prompt('Inserisci una parola:');

//FUNZIONE
function isPalindromo(parola){
  let parolaInvertita = parola.split('').reverse().join('');
  return parolaInvertita === parolaDaInserire;
}
//STAMPO LA MIA PAROLA PALINDROMA
console.log(parolaDaInserire);