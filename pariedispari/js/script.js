/*

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

*/

function pariEDispari() {

    let userNumber = parseInt(document.getElementById("box-numero").value);

    let randomNumber = parseInt(Math.floor(Math.random() * 5) + 1);
    console.log(randomNumber);

    let sum = userNumber + randomNumber;
    console.log(sum);

    // Se risulta pari:

    if (sum % 2 == 0) {
        
        alert("Il numero è pari!");

    }

    // Se risulta dispari:

    else {

        alert("Il numero è dispari!")

    }

}