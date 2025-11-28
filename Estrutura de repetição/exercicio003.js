// 3. Faça um programa que imprima na tela a tabuada de um número
// qualquer escolhido pelo usuário até o 10.


let tabuadaescolhida = parseInt(prompt("Digite um número de 1 a 10 para aparecer a tabuada:"))

//1 número dentro da condição do for - inicialização - variável
//2 número dentro da condição do for - condição - verifica a volta da variável
//3 número dentro da condição do for - incremento - soma as voltas
//i++ igual a i = i+i

console.log(`==TABUADA do ${tabuadaescolhida}==`);

for (let i = 1; i <= 10; i++) {
    console.log(tabuadaescolhida + " X " + i + " = " + (tabuadaescolhida * i));
}