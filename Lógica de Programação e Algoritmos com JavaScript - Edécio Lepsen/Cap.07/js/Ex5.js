const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e )=>{

    e.preventDefault()

    const colaborador = frm.xNome.value

    const partes = colaborador.split(" ")
    let email = " "
    const tam = partes.length

    for (let i = 0; i <= tam - 1; i++) {
        email += partes[i].charAt(0)
    }
    email += partes[tam - 1] + "@transben.com.br"

    resp.innerText = `E-mail: ${email.toLowerCase()}`
})