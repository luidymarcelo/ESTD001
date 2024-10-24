const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{

    e.preventDefault()

    const valor = Number(frm.inNumero.value)
    const numero = valor / 2

    if (Number.isInteger(numero)) {
        resp.innerText = `${valor} é par.`
    } else {
        resp.innerText = `${valor} é impar.`
    }
})