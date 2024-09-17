const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=>{
    const quilo = Number(frm.inQuilo.value)
    const consumo = Number(frm.inConsumo.value)

    const valor = (quilo / 1000) * consumo                          // IRÁ DIVIDIR O KG POR 1000, ISSO IRÁ RESULTAR O VALOR DO PREÇO POR GRAMA, APÓS É MULTIPLICADO O VALOR DA GRAMA PELA QUANTIDADE DE GRAMA CONSUMIDA
    
    resp.innerText = `Valor a ser pago é R$ ${valor.toFixed(2)}`

    e.preventDefault()
})