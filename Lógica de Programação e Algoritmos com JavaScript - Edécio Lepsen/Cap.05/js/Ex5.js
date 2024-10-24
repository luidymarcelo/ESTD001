const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

let resposta = ""
let numContas = 0
let valTotal = 0

frm.addEventListener("submit", (e)=>{

    e.preventDefault()

    const descricao = frm.inConta.value
    const valor = Number(frm.inValor.value)

    numContas++

    valTotal = valTotal + valor
    resposta = resposta + descricao + " - R$: " + valor.toFixed(2) + "\n"
    resp1.innertext = `${resposta}----------------------------`
    resp2.innertext = `${numContas} Conta(s) - Total R$: ${valTotal.toFixed(2)}`

    frm.inConta.value = ""
    frm.inValor.value = ""
    frm.inConta.focus()
})