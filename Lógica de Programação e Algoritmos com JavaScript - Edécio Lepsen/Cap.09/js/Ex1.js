const frm = document.querySelector("form")
const imClube = document.querySelector("#imgClube")
const dvTitulo = document.querySelector("#divTitulo")

let clube

const trocarClube = () => {

    if (frm.rbCorinthians.checked) {
        clube = "Corinthians"
    } else if (frm.rbPalmeiras.checked) {
        clube = "Palmeiras"
    } else if (frm.rbSaoPaulo.checked) {
        clube = "Sao Paulo"
    }
    
    dvTitulo.className = `row cores-${clube}`

    imClube.src = `img/${clube.toLowerCase()}.png`
    imClube.className = "img-fluid"
    imClube.alt = `Simbolo do ${clube}`

    localStorage.setItem("clube", clube)

}

frm.rbCorinthians.addEventListener("change", trocarClube)
frm.rbPalmeiras.addEventListener("change", trocarClube)
frm.rbSaoPaulo.addEventListener("change", trocarClube)


const verificarClube = () => {

    if (localStorage.getItem("clube")) {

        const clube = localStorage.getItem("clube")

        if (clube == "Corinthians") {
            frm.rbCorinthians.checked = true
        } else if (clube == "Palmeiras") {
            frm.rbPalmeiras.checked = true
        } else if (clube == "Sao Paulo") {
            frm.rbSaoPaulo.checked = true
        }

        trocarClube()
    }
}

window.addEventListener("load", verificarClube)
