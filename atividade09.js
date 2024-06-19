const ler = require('readline-sync');

let nomes = [];

console.log("Digite 10 nomes de pessoas:");
for (let i = 0; i < 10; i++) {
    let nome = ler.question(`Digite o nome ${i + 1}: `);
    nomes.push(nome);
}


let busca = ler.question("Digite um nome para buscar: ");

let encontrado = false;
for (let i = 0; i < 10; i++) {
    if (nomes[i] === busca) {
        encontrado = true;
        break;
    }
}


if (encontrado) {
    console.log("ACHEI");
} else {
    console.log("NÃO ACHEI");
}
