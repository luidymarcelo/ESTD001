const frm = document.querySelector("form")
const resp = document.querySelector("#outResp")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

frm.addEventListener("submit", (e) =>{

    e.preventDefault()

    const modelo = frm.inModelo.value
    const ano = Number(frm.inAno.value)
    const preco = Number(frm.inPreco.value)
    const classificacao = classificarVeiculo(ano)
    const entrada = calcularEntrada(preco, classificacao)
    const parcelas = (preco - entrada) / 10

    resp.innerText = modelo + " - " + classificacao
    resp2.innerText = `Entrada de R$ ${entrada.toFixed(2)}`
    resp3.innerText = `+10x de R$ ${parcelas.toFixed(2)}`
    
})

const classificarVeiculo = (ano) => {
    let classificacao
    if (ano < 2000){
        classificacao = "Antigo"
    }else if (ano >= 2000 && ano <= 2015){
        classificacao = "Seminovo"
    }else{
        classificacao = "Novo"
    }
    return classificacao
}

const calcularEntrada = (valor, status) => 
    status == "Novo" ? valor * 0.5 : valor * 0.3
