const frm = document.querySelector("form")
const resp = document.querySelector("span")

frm.addEventListener("submit", (e) => {
    
    e.preventDefault()

    const fruta = frm.inFruta.value.toUpperCase()
    let resposta = " "
    const letra1 = fruta.charAt(0)

    for (const letra of fruta) {
        if (letra == fruta.charAt(0)) {
            resposta += letra1
        } else {
            resposta += "-"
        }
    }
    resp.innerText = resposta
    frm.inFruta.value = "*".repeat(fruta.length)
})