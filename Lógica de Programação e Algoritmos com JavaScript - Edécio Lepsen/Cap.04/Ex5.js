const frm = document.querySelector("form")
const resp = document.querySelector("h2")

frm.addEventListener("submit", (e)=>{

    e.preventDefault()

    const inNumero = Number(frm.inValor.value)
    const raiz = Math.sqrt(inNumero)

    if(Number.isInteger(raiz)) {
        resp.innerText = `Raiz: ${raiz}`
    } else {
        resp.innerText = `Não há raiz exata para ${inNumero}`
    }
})