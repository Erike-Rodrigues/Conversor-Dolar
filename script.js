// comentando seu codigo.

let botao = document.getElementById("botao")
let select = document.getElementById("select-moedas")

async function converterMoedas() {

    let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then( function(resposta){
        return resposta.json()
    })
    
    let dolar = moedas.USDBRL.high
    let euro = moedas.EURBRL.high


    let inputValorReal = Number(document.getElementById("input").value)
    let inputMoedas = document.getElementById("input-moedas")
    let textoReal = document.getElementById("texto-real")

    if (select.value === "US$ Dolar Américano") {
        let valorEmDolares = inputValorReal / dolar
        inputMoedas.innerHTML = valorEmDolares.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    }

    if (select.value === "€ Euro") {
        let valorEmEuros = inputValorReal / euro
        inputMoedas.innerHTML = valorEmEuros.toLocaleString("de-DE", { style: "currency", currency: "EUR" })

    }

    textoReal.innerHTML = inputValorReal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

//Função responsavel por trocar bandeira e nome das moedas.
function trocaDeMoeda() {
    let textoMoedas = document.getElementById("texto-moedas")
    let bandeiras = document.getElementById("bandeiras")

    if (select.value === "US$ Dolar Américano") {
        textoMoedas.innerHTML = "Dólar Americano"
        bandeiras.src = "./img/eua.png"
    }

    if (select.value === "€ Euro") {
        textoMoedas.innerHTML = "Euro"
        bandeiras.src = "./img/euro.png"

    }

    converterMoedas()

}


botao.addEventListener("click", converterMoedas) //mostra quando o usuario clica no botao
select.addEventListener("change", trocaDeMoeda) // mostra quando o usuario muda a escolha de dolar para euro.
