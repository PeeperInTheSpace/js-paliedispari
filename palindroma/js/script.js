/*

Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

*/

// Chiedo parola all'utente
const givenWord = prompt("Inserisci una parola");
let result = false;

console.log("La parola inserita è: ", givenWord);

let givenWordReversed = wordReverser(givenWord);

if (givenWordReversed === givenWord) {
    result = true;
}

console.log("Palindroma: ", result);

// Funzione per check palindroma
// Descrizione: la funzione inverte l'ordine delle lettere della parola inserita, cosi da poter controllare se la parola resta la stessa, ergo se è palindroma
function wordReverser(word){
    return word.split("").reverse().join("");
}


