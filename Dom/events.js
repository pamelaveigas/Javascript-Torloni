//eventos sao interacoes do usuario com o websit e também
//comportamentos do website, por exemplo carregara tala

let elementoBtn = document.getElementById("btn");
let elementoIdLeandra = document.getElementById("tecnica");
let novoElemento = document.createElement("a");
novoElemento.textContent = "Luan Santana - Registro Histórico";
novoElemento.href = "https://www.youtube.com/watch?v=ZYd2yeeEad4&list=RDZYd2yeeEad4&start_radio=1";

elementoBtn.addEventListener("click", () => {
    //alert("Você clicou no botão");

    //elementoBtn.style.backgroundColor = "purple"; (trocar a cor do botao)

    document.body.appendChild(novoElemento);
    //document.body.removeChild(elementoIdLeandra);
    //console.log(document.body.children);
    document.body.children[2].removeChild(elementoIdLeandra)
})

