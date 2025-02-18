/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
/**
 * prende una lista di nome all'ingresso
 * estrae la prima lettera di ogni nome all'interno della lista
 * restituisce lanuova lista creata
 * @param {Array} arr lista di nomi
 * @returns {charater} arrayFirstChar lista prime lettere
 */
const firstChar = arr => {
    const arrayFirstChar = []
    for (let i = 0; i < arr.length; i++) {
        const thisArrayWord = arr[i].split("")//prendo la parola,la trasformo in un array
        const thisFirstChar = thisArrayWord[0] // estragggo il primo carattere situato nella prima posizione
        arrayFirstChar.push(thisFirstChar)
    }
    return arrayFirstChar
}

// Invoca la funzione qui e stampa il risultato in console

console.log(firstChar(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]