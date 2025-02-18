/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
/**
 * presa una lista di nomi e una lettera di confrontro
 * estraiamo la prima lettera di ogni nome 
 * la confrontiamo con la lettera di confronto passata all'inizio
 * se il nome inizia con la lettera passata allora 
 *  inseriamo quella parola nella nuova lista
 * restituisce la nuova lista creata
 * @param {Array} arr lista di nomi
 * @param {*} a lettera di confronto
 * @returns {Array}
 */
const firstCharWord = (arr, a) => {
    const arrayFirstCharWord = []
    for (let i = 0; i < arr.length; i++) {
        const thisArrayWord = arr[i].toLowerCase().split("")//prendo la parola,la rendo tutta minuscola,la trasformo in un array
        const thisFirstChar = thisArrayWord[0]// seleziono la prima lettera
        if (thisFirstChar === a) {
            arrayFirstCharWord.push(arr[i])
        }
    }
    return arrayFirstCharWord
}

// Invoca la funzione qui e stampa il risultato in console

console.log(firstCharWord(names, "a"));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]