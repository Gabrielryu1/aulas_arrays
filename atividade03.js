const ler = require('readline-sync');

let elementos = [];

for (let i = 0; i < 5; i++) {
    let x = ler.question("Digite um elemento: ");
    elementos.push(x);
}

console.log(typeof elementos); 
console.log("Elementos digitados: ", elementos);
console.log("Quantidade de elementos: ", elementos.length);
