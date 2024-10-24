/*const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=> {

    e.preventDefault()

    const numero = Number(frm.inNumero.value)

    let resposta1 = ""
    let resposta = ""
    let resposta3 = ""
    for(let i = numero; i >= 1; i--) {
        if (numero == i) {
        resposta1 = "Entre " + numero + " e " + "1 é: "+ resposta + i + ", "
        } else if (i != 1) {
            resposta = resposta + i + ", "
            } else {
                resposta3 = resposta3  + i + "."
                }
    }

    resp.innerText = resposta1 + resposta + resposta3
})*/

const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=> {

    e.preventDefault()

    const numero = Number(frm.inNumero.value)

    let resposta1 = ""
    let resposta = ""
    let resposta3 = ""

    let i = numero

    while (i>= 1 ) {
        if (numero == i) {
        resposta1 = "Entre " + numero + " e " + "1 é: "+ resposta + i + ", "
        i--
        } else if (i != 1) {
            resposta = resposta + i + ", "
            i--
            } else {
                resposta3 = resposta3  + i + "."
                i--
                }
    }

    resp.innerText = resposta1 + resposta + resposta3
})