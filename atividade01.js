const ler = require('readline-sync');

let numeros = [];

for (let i = 0; i < 5; i++) {
    let adc = ler.questionInt("Digite um numero: ");
    numeros.push(adc);
}

let numeromaior = Math.max(...numeros);

console.log("Numeros digitados: ", numeros);
console.log("O maior valor é: ", numeromaior);
