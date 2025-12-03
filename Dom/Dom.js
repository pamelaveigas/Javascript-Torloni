// Function: é a palavra-chave é utilizada para a função
// Declaração do return: é usado quando precisamos retornar algum valor (opcional quando necessário)
// Somar: é chamada da função com seus nome e com parênteses indicando que é uma função
// DOM: é uma interface padronizada que permite que navegadores possam manipular o conteúdo de uma pagina web

//---------------
//Dom É a arvore/fluxo do meu HTML
//Ele serve para que o JS consiga manipular
//O Dom ele torna os elementos HTML em Obejeto para que os JS consiga acessar de fato

//função - ()
// - {}

// let elementobody = document.getElementsByTagName("body");
// console.log(elementobody);

//acessar pela tag H1

//let elementoH1 = document.getElementsByTagName("h1"); ---
//acessando o elemento pela sua posição
//elementoH1[0].textContent = "Batman"; ---
//console.log();



//exibe o id tecnica
let exibeId = document.getElementById ("tecnica");
console.log(tecnica);

//exibe os elementos que possuem a class jogador
let exibeclass = document.getElementsByClassName ("jogador");
console.log(exibeclass);

//exibe o item 4 dos elementos que possuem a class jogador
console.log(exibeclass[3]);

//muda o texto do conteudo do item da 3 posicao dos elementos que possuem a class jogador
exibeclass[3].textContent = "Macarrão"

//mudar estilizacao de um elemento
exibeId.style.color = "red";
exibeId.style.fontSize = "60px";

//mude a cor a cor da fonte do item da 3 posiçao dos elementos que possuem a class jogador
exibeclass[3].style.color = "red";





