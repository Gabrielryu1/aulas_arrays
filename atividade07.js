const ler = require('readline-sync');


let numeros = new Array(10);

console.log("Digite 10 numeros inteiros:");
for (let i = 0; i < 10; i++) {
    numeros[i] = ler.questionFloat(`Digite o numero ${i + 1}: `);
}


let opcao;
do {
    console.log("\nMenu de opções:");
    console.log("0 - Finalizar o programa");
    console.log("1 - Mostrar a lista na ordem direta");
    console.log("2 - Mostrar a lista na ordem inversa");
    console.log("3 - Mostrar a soma total dos valores");

    opcao = ler.questionFloat("Digite sua opcao: ");

    switch (opcao) {
        case 0:
            console.log("Programa finalizado.");
            break;
        case 1:
            console.log("Lista na ordem direta:", numeros);
            break;
        case 2:
            console.log("Lista na ordem inversa:", numeros.slice().reverse());
            break;
        case 3:
            let soma = numeros.reduce((acc, curr) => acc + curr, 0);
            console.log("Soma total dos valores:", soma);
            break;
        default:
            console.log("Opção inválida. Digite 0, 1, 2 ou 3.");
            break;
    }

} while (opcao !== 0);
