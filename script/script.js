"use strict";
console.clear();

/*
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
*/

// creo un ciclo per stampare i numeri da 1 a 100

for (let i = 1; i <= 100; i++) {
// verifico quali numeri sono divisibili per 3 e per 5
if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
} else if (i % 3 === 0) { // verifico quali nuemri sono divisibili solo per 3
    console.log('Fizz');
} 
    console.log(i);
}