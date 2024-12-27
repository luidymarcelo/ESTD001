const frm = document.querySelector("form")
const dvPalco = document.querySelector("#divPalco")

const poltronas = 240

const reservadas = []

window.addEventListener("load", () => {

    const ocupadas = localStorage.getItem("teatroOcupadas")
    ? localStorage.getItem("teatroOcupadas").split(";")
    : []

    for (let i = 1; i <= poltronas; i++) {
        const figure = document.createElement("figure")
        const imgStatus = document.createElement("img")

        imgStatus.src = ocupadas.includes(i.toString()) ? "img/Ocupado.png" : "img/Disponivel.png"
        imgStatus.className = "poltrona"
        const figureCap = document.createElement("figcaption")

        const zeros = i < 10 ? "00" : i < 100 ? "0" : ""
        
        const num = document.createTextNode(`[${zeros}${i}]`)

        figureCap.appendChild(num)
        figure.appendChild(imgStatus)
        figure.appendChild(figureCap)
        dvPalco.appendChild(figure)

    }
})


frm.addEventListener("submit", (e) => { 
    e.preventDefault()

    const poltrona = Number(frm.inPoltrona.value)

    if (poltrona > poltronas) {
        alert("Informe um número de poltrona válido!")
        frm.inPoltrona.focus()
        return
    }

    const ocupadas = localStorage.getItem("teatroOcupadas")
    ? localStorage.getItem("teatroOcupadas").split(";")
    : []

    if (ocupadas.includes(poltrona.toString())) {
        alert("Esta poltrona ja foi reservada!")
        frm.inPoltrona.value = ""
        frm.inPoltrona.focus()
        return
    }

    const imgPoltrona = dvPalco.querySelectorAll("img")[poltrona - 1]

    imgPoltrona.src = "img/Reservada.png"

    reservadas.push(poltrona)

    frm.inPoltrona.value = ""
    frm.inPoltrona.focus()
})

frm.btConfirmar.addEventListener("click", () => { 
    if (reservadas.length == 0) {
        alert("Nenhuma poltrona foi reservada!")
        frm.inPoltrona.focus()
        return
    }

    const ocupadas = localStorage.getItem("teatroOcupadas")
    ? localStorage.getItem("teatroOcupadas").split(";")
    : []

    for (let i = 0; i < reservadas.length; i++) {
        ocupadas.push(reservadas[i])

        imgPoltrona.src = "img/Ocupado.png"

        reservadas.pop()
    }

    localStorage.setItem("teatroOcupadas", ocupadas.join(";"))
})