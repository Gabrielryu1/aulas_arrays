const readlineSync = require('readline-sync');

let nome = readlineSync.question("Digite seu nome: ");

let idade = readlineSync.questionInt("Digite sua idade: "); 

let usuario = {
    nome: nome,
    idade: idade
};


console.log("Nome do usuário:", usuario.nome);
