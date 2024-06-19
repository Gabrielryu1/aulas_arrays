const ler = require('readline-sync');

let numeros = new Array(10);

console.log("Digite 10 numeros inteiros:");
for (let i = 0; i < 10; i++) {
    numeros[i] = ler.questionFloat(`Digite o numero ${i + 1}: `);
}

let contPares = 0;

for (let i = 0; i < 10; i++) {
    if (numeros[i] % 2 === 0) {
        contPares++;
    }
}

console.log(`O array possui ${contPares} valores pares.`);
