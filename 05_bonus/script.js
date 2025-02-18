/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
/**
 * preso un nome in ingresso
 * creo una costante con l'ora attuale
 * confronto l'ora se si trova in un range ben preciso
 *      se compreso tra le 7(incluso) e le 13 stampi a console buongiorno + nome
 *      se compreso tra le 13(incluso) e le 17stampi a console buon pomeriggio + nome
 *      se compreso tra le 17(incluso) e le 24stampi a console buonasera + nome
 *      se compreso tra le 24(incluso) e le 7 stampi a console buona notte + nome
 * @param {String} word 
 */
const hello = word => {
    const hour = (new Date().getHours())

    if (hour >= 7 && hour < 13) {
        console.log("buongiorno " + word);
    } else if (hour >= 13 && hour < 17) {
        console.log("buon pomeriggio " + word);
    } else if (hour >= 17 && hour < 24) {
        console.log("buonasera " + word);
    } else {
        console.log("buona notte " + word);
    }
}

// Invoca la funzione qui e stampa il risultato in console

hello(name)

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.