// let nome = window.prompt("Qual seu nome?")

// let senha = window.prompt("Qual é a senha?")

let login = prompt("Qual seu nome? ")

switch (login) {
    case "Admin":
        console.log("Nome correto ")
        break;

    default:
        console.log("Nome incorreto! ")
        break;
}

let senha = prompt("Digite sua senha: ")

switch (senha) {
    case "senha123":
        console.log("Senha correta")
        break;

    default:
        console.log("Senha incorreta! ")
        break;
}