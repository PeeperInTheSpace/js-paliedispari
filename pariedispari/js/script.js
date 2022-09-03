/*

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

*/

// Chiedo all'utente di scegliere pari o dispari
let userEvenOdd;
do {
    userEvenOdd = (prompt("Scegli pari o dispari")).toLowerCase();
} while (userEvenOdd !== "pari" && userEvenOdd !== "dispari");

console.log("Il giocatore ha scelto:", userEvenOdd);

// Chideo di inserire un numero compreso tra 1 e 5
let userNumber;
do {
    userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
} while (userNumber < 1 || userNumber > 5);

console.log("Numero utente:", userNumber);

// Genero casualmente un numero compreso tra 1 a 5 per la macchina usando una funzione
const pcNum = rndNumberGenerator()
console.log("Numero Pc:", pcNum);

// Sommo i numeri 
let sum = userNumber + pcNum;
console.log("Somma:", sum);

// Per vedere se % 2 = 1 o 0 uso una funzione
let judgement = evenOddJudge(sum);

// Dichiaro il vincitore
if (userEvenOdd === judgement) {
    console.log("Il vincitore è l'utente!");
} else {
    console.log("Il vincitore è il computer!");
}

// FUNCTIONS

function rndNumberGenerator(rndNum) {
    rndNum = Math.floor(Math.random() * 5) + 1;
    return rndNum;
}

function evenOddJudge(evenOddSum) {
    let result = "";

    if (evenOddSum % 2 === 0) {
        result = "pari";
        console.log("il numero è pari");
    } else {
        result = "dispari";
        console.log("il numero è dispari");
    }

    return result;
}