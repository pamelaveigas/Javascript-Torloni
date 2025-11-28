//Calcular a soma dos números de 1 a 100 utilizando a estrutura
//while.

// let numero = 1; //variavel inicial
// let soma

// //condição
// while (numero <= 100) {
//     soma = soma + numero; //Esta somando os números
//     numero++; //incremento de cada volta
// }


let i = 1;
let soma = 0;

while (i <= 100) {
    soma = soma + i;
    i++;
}

console.log(soma);

alert("A soma dos números de 1 a 100 é: " + soma);