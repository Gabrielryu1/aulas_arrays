const ler = require('readline-sync');


let elementos = [];

for (let i = 0; i < 5; i++) {
    let elemento = ler.question("Digite um elemento: ");
    elementos.push(elemento);
}


let elementoparacontar = ler.question("Digite o elemento que deseja contar: ");


let contagem = 0;
for (let i = 0; i < elementos.length; i++) {
    if (elementos[i] === elementoparacontar) {
        contagem++;
    }
}


console.log(`O elemento '${elementoparacontar}' aparece ${contagem} vezes no array.`);
