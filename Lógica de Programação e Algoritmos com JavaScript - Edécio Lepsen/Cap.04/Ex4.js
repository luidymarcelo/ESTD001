const frm       = document.querySelector("form")
const resp      = document.querySelector("h2")

frm.addEventListener("submit", (e) =>{

    e.preventDefault()

    const horasBr = Number(frm.inHoras.value)
    let horaFr = horasBr + 5

    if (horaFr > 24) {
        cHoraFr = horaFr - 24
    }
    resp.innerText = `Hora na França ${cHoraFr.toFixed(2)}`
})