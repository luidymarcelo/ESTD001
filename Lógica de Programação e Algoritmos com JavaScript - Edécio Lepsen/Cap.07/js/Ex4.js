const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e )=>{

    e.preventDefault()

    const nome = frm.xNome.value.trim()
    if (!nome.includes(" ")) {
        alert("Informe nome completo!")
        return
    }
    const priEspaco = nome.indexOf(" ")
    const ultEspaco = nome.lastIndexOf(" ")

    const crach = nome.substr(0, priEspaco) + nome.substr(ultEspaco)

    resp.innerText = `O nome no crachá ficará desta forma: ${crach}`
})