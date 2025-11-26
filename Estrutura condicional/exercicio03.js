// Exercício 3: Ímpar ou par
// Faça um programa que receba um número do usuário e informe se este número é par ou
// ímpar.

let numero = parseInt(prompt("Digite seu número de usuário: "))

if (numero % 2 === 0) {
    console.log("O número " + numero + " é par")

}

else {
    console.log("O número " + numero + " é impar")
}