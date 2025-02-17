/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

const firstChar = arr => {
    const arrayFirstChar = []
    for (let i = 0; i < arr.length; i++) {
        arrayFirstChar.push((arr[i].split(""))[0])
    }
    return arrayFirstChar
}

// Invoca la funzione qui e stampa il risultato in console

console.log(firstChar(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]