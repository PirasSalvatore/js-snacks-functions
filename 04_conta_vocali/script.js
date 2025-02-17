/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript'

// Dichiara la funzione qui.

const countVocal = str => {
    let cont = 0
    const arrayStr = str.toLowerCase().split("")
    for (let i = 0; i < arrayStr.length; i++) {
        if (arrayStr[i] === "a" || arrayStr[i] === "e" || arrayStr[i] === "i" || arrayStr[i] === "o" || arrayStr[i] === "u") {
            cont++
        }
    }
    return cont
}

// Invoca la funzione qui e stampa il risultato in console

console.log(countVocal(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)