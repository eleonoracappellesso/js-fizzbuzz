"use strict";
console.clear();

/*
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
*/

// creo un ciclo per stampare i numeri da 1 a 100

const maxNumber = 100;

for (let i = 1; i <= maxNumber; i++) {
    // verifico se i è divisibile per 3
    if (i % 3 === 0) {
        if (i % 5 === 0) { // verifico se è divisibile anche per 5
            console.log('FizzBuzz');
        } else {
            console.log('Fizz'); // output se divisibile solo per 3 
        }
    } else if (i % 5 === 0) { // verifico se è divisibile per 5
        console.log('Buzz');  // output se divisibile solo per 5
    } else {
        console.log(i); // output se non divisibile ne per 3 ne per 5
    }
}
