const frm = document.querySelector("form")
const tbFilmes = document.querySelector("table")

frm.addEventListener("submit", (e) => {

    e.preventDefault()

    const titulo = frm.inTitulo.value
    const genero = frm.inGenero.value

    inserirLinha(titulo, genero)
    gravarFilmes(titulo, genero)

    frm.reset()
    frm.inTitulo.focus()
});

const inserirLinha = (titulo, genero) => {
    const linha = tbFilmes.insertRow(-1)

    const col1 = linha.insertCell(0)
    const col2 = linha.insertCell(1)
    const col3 = linha.insertCell(2)

    col1.innerText = titulo
    col2.innerText = genero
    col3.innerHTML = "<i class='exclui' title='Excluir'>&#10008</i>"
};

const gravarFilmes = (titulo, genero) => {
    if (localStorage.getItem("filmesTitulo")) {
        const filmesTitulo = localStorage.getItem("filmesTitulo") + ";" + titulo
        const filmesGenero = localStorage.getItem("filmesGenero") + ";" + genero

        localStorage.setItem("filmesTitulo", filmesTitulo)
        localStorage.setItem("filmesGenero", filmesGenero)
    } else {
        localStorage.setItem("filmesTitulo", titulo)
        localStorage.setItem("filmesGenero", genero)
    }
};

window.addEventListener("load", () => {
    if (localStorage.getItem("filmesTitulo")) {
        const filmesTitulo = localStorage.getItem("filmesTitulo").split(";")
        const filmesGenero = localStorage.getItem("filmesGenero").split(";")
        
        for (let i = 0; i < filmesTitulo.length; i++) {
            inserirLinha(filmesTitulo[i], filmesGenero[i])
        }
    }
});

tbFilmes.addEventListener("click", (e) => {
    if (e.target.className == "exclui") {
        alert("Excluindo...")
        const titulo = e.target.parentElement.parentElement.children[0].innerText

        if (confirm("Confirma a exclusão do filme " + titulo + "?")) {
            e.target.parentElement.parentElement.remove()
            localStorage.removeItem("filmesTitulo")
            localStorage.removeItem("filmesGenero")
        }
        for (let i = 0; i <= tbFilmes.rows.length; i++) {
            let auxTitulo = tbFilmes.rows[i].cells[0].innerText
            let auxGenero = tbFilmes.rows[i].cells[1].innerText
            if (auxTitulo == "Título do Filme" || auxGenero == "Gênero") {
                auxTitulo = ''
                auxGenero = ''
            }
            gravarFilmes(auxTitulo, auxGenero)
    }
}});