// Variáveis = Um espaço da memória do computador que guardamos algo (numeros, letra, imagem)

// Função = Um trecho de código que só é executado quando é chamado

let chave = "eb55941e4aa152eddc6b5a825729a8e6"

function colocarNaTela(dados) {
    console.log(dados)

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name

    document.querySelector(".temp").innerHTML = 
    Math.floor(dados.main.temp) + " ºC"

    document.querySelector(".descricao").innerHTML = dados.weather[0].description

    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"

    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}

async function buscarCidade(cidade){
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
    cidade +
    "&appid=" +
    chave +
    "&lang=pt_br" +
     "&units=metric")
    .then( resposta => resposta.json())   

    colocarNaTela(dados)
}



function cliqueiNoBotao() {
    let cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
} 