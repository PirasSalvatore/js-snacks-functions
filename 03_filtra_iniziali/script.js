/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

const firstCharWord = (arr, a) => {
    const arrayFirstCharWord = []
    for (let i = 0; i < arr.length; i++) {
        if (((arr[i].toLowerCase()).split(""))[0] === a) {
            arrayFirstCharWord.push(arr[i])
        }
    }
    return arrayFirstCharWord
}

// Invoca la funzione qui e stampa il risultato in console

console.log(firstCharWord(names, "a"));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]