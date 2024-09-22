const frm    = document.querySelector("form")
const cor1   = document.querySelector("cor")
const ano1   = document.querySelector("ano")
const resp   = document.querySelector("h2")

frm.addEventListener("submit", (e) => {
    const cor1 = frm.cor.value
    const ano1 = Number(frm.ano.value)

    if (cor1 == "Azul" && (ano1 == 2016 || ano1 == 2017)){
        resp.innerText = `Verdade`
    }else{
        resp.innerText = `Falso`
    }

    e.preventDefault()
})