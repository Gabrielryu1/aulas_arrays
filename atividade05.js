const ler = require('readline-sync');

let nome = ler.question("Digite seu nome: ");

let idade = ler.questionInt("Digite sua idade: ");

let usuario = {
    nome: nome,
    idade: idade
};

console.log("Objeto com as informacoes do usuario:", usuario);
