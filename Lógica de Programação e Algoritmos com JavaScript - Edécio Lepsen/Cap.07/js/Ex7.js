const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e )=>{

    e.preventDefault()

    const dataVenc = frm.inData.value
    const dataAtual = new Date()
    const dataVencimento = new Date(dataVenc)

    const diferenca = dataVencimento.getTime() - dataAtual.getTime()

    const valor = frm.inValor.value
    const multa = 10
    const juros = valor * 0.05

    if (diferenca < 0) {
        resp.innerText = "Vencido"

        const total = Number(valor) + (valor * 0.05) + Number(multa)

        frm.inTotal.value = total
        frm.inMulta.value = multa
        frm.inJuros.value = juros
    } else {
        resp.innerText = `Não vecido.\nDias restantes: ${Math.ceil(diferenca / (1000 * 60 * 60 * 24))}`
    }

})