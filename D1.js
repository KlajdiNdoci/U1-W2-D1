/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output collega questo file al tuo HTML e apri la console del browser. 
- Dovrai creare una direttiva di output per testare le variabili od i risultati delle espressioni che crei
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* I principali datatype di javascript sono:
1. String, che rappresenta una sequenza di caratteri. Le stringhe sono delimitate da apici singoli o doppi (utilizzare i doppi). Ad esempio: "Hello!"
2. Number, che viene utilizzato per rappresentare i numeri, inclusi numeri interi e numeri decimali, il decimale si esprime con il punto
3. Bigint,che è uno speciale tipo numerico che supporta numeri interi di lunghezza arbitraria. Si utilizza aggiungendo il suffisso n alla fine di un numero intero, oppure con la funzione BigInt.
4. Boolean, che rappresenta un valore di verità, ovvero che può essere solo vero (true) o falso (false)
5. Undefined, che è una variabile dichiarata ma a cui non è stato assegnato alcun valore. Una variabile non inizializzata ha il valore undefined.
6. Null, che indica l'assenza intenzionale di un valore. È un valore assegnato esplicitamente e rappresenta "nessun valore".
7. Symbol, che rappresenta un identificatore univoco e immutabile utilizzato per le proprietà degli oggetti.
8. Object, che è una collezione non ordinata di coppie chiave-valore. Gli oggetti in JavaScript sono rappresentati tra parentesi graffe ({}) e le coppie chiave-valore sono separate da due punti (:).
*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

const name = "Klajdi";

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

console.log("sum", 12 + 20);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

const x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

// const name = "Ndoci";

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

console.log("subtraction", 4 - x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

const name1 = "john";
const name2 = "John";
console.log(name1 === name2.toLowerCase());
