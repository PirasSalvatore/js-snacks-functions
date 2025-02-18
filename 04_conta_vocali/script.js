/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript'

// Dichiara la funzione qui.
/**
 * presa una stringa all'ingresso
 * creiamo un contatore inizializato a 0
 * trsformiamo la stringa in un array scritto tutto in minuscolo
 * confrontiamo ogni carattere del nuovo array creato
 *      se il carattere è una vocale allora si aggiunge 1 al contatore
 * restituisce il contatore delle vocali
 * @param {Array} str parola o frase
 * @returns {Number} cont Numero vocali parola
 */
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