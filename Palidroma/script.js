const parolaDaInserire = prompt('Inserisci una parola:');

function isPalindromo(parola){
  let parolaInvertita = parola.split('').reverse().join('');
  return parolaInvertita === parolaDaInserire;

}
console.log(isPalindromo('radar'));