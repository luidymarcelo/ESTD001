const frmm = document.querySelector("form")
const resp = document.querySelector("pre")

frmm.addEventListener("submit", (e) =>{

    e.preventDefault()

    const numero = Number(frmm.inNumero.value)

    let resposta = ""

    for(let i = 1; i <=10; i++) {

        resposta = resposta + numero + "x" + i + "=" + (numero * i) + "\n"

    }

    resp.innerText = resposta
        
})