// Exercício 1: Verificação de login
// Escreva um programa que solicita ao usuário um nome de usuário e uma senha. Verifique se o
// nome de usuário é "admin" e a senha é "senha123". Exiba uma mensagem indicando se o login
// foi bem-sucedido ou não.

// let nome = window.prompt("Qual seu nome?")

// let senha = window.prompt("Qual é a senha?")

// ------
// let login = prompt("Digite o seu usuário: ")

// switch (login) {
//     case "Admin":
//         console.log("Nome correto ")
//         break;

//     default:
//         console.log("Nome incorreto! ")
//         break;
// }

// let senha = prompt("Digite sua senha: ")

// switch (senha) {
//     case "senha123":
//         console.log("Senha correta")
//         break;

//     default:
//         console.log("Senha incorreta! ")
//         break;
// }
// --------

let username = prompt("Digite o seu usuário: ")

let senha = prompt("Digite a sua senha: ")

if (username == "admin" && senha == "senha123") {
    console.log("Login bem-sucedido!")
}
else {
    console.log("Login incorreto! ;-;")
}