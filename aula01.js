// window.alert("Minha primeira mensagem")

// window.confirm("Hoje é sexta?")

// let nome = window.prompt("Qual é o seu nome?")

// window.alert("Bem vindo(a)!" + nome)

// console.log("Apresenta mensagem na tela")

// let numero01 = parseInt(prompt("Digite o primeiro número: "))

// let numero02 = parseInt(prompt("Digite o segundo número: "))

// let soma = numero01 + numero02

// console.log(soma)

// 

// let idade = parseInt(prompt("Qual é sua idade"))

// if (idade >= 18) {
//     console. log("Você é maior de idade, da-lheee")
// }
// else{
//     console. log("Você é menor de idade, Baixinho")
// }



let estacoes = prompt("Digite uma estação do ano: ")

switch (estacoes) {
    case "Verão":
        console.log("Muito calor e praia")
        break;

    case "Outono":
        console.log("As folhas caem, no final")
        break;

    case "Inveno":
        console.log("Está muito frio")
        break;

    case "Primavera":
        console.log("Eu vejo flores em Você...")
        break;

    default:
        console.log("Não existe essa estação!!!")
        break;
}

