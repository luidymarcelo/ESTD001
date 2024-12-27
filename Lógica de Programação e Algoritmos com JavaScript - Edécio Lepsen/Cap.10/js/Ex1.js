const frm = document.querySelector("form")
const dvQuadro = document.querySelector("#divQuadro")

frm.addEventListener("submit", (e) => {

    e.preventDefault()

    const tarefa = frm.inTarefa.value

    const h5 = document.createElement("h5") // createElement cria um novo elemento a ser adicionado na página
    const texto = document.createTextNode(tarefa) // createTextNode cria um texto a ser inserido 

    h5.appendChild(texto) // appendChild inicia com o pai e indica o filho
    dvQuadro.appendChild(h5)

    frm.inTarefa.value = ""
    frm.inTarefa.focus()
})

frm.btSelecionar.addEventListener("click", () => {
    
    const tarefas = document.querySelectorAll("h5")

    if (tarefas.length == 0) {
        alert("Não há tarefas para selecionar")
        return
    }

    aux = 0

    for (let i = 0; i < tarefas.length; i++) {
        if (tarefas[i].className != "tarefa-selecionada") {
            aux += 1
        }
    }

    if (aux == tarefas.length) {
        tarefas[0].className = "tarefa-selecionada"
    } else {
        for (let i = 0; i < tarefas.length; i++) {
            if (tarefas[i].className == "tarefa-selecionada") {
                tarefas[i].className = "tarefa-normal"
                aux2 = i
                //tarefas[i++].className = "tarefa-selecionada"
                break
            }
        }
        aux2 ++
        if (aux2 >= tarefas.length) {
        aux2 = 0
        }
        tarefas[aux2].className = "tarefa-selecionada"
    }
})

frm.btRetirar.addEventListener("click", () => {

    const tarefas = document.querySelectorAll("h5")

    let aux = -1

    tarefas.forEach((tarefa, i) => {
        if (tarefa.className == "tarefa-selecionada") {
            aux = i
        }
    })

    if (aux == -1) {
        alert("Nenhuma tarefa selecionada")
        return
    }

    if (confirm("Confirma a exclusão da tarefa?")) {
        dvQuadro.removeChild(tarefas[aux])
    }
})

frm.btGravar.addEventListener("click", () => {

    const tarefas = document.querySelectorAll("h5")

    if (tarefas.length == 0) {
        alert("Nenhuma tarefa cadastrada para serem salvas")
        return
    }

    let dados = ""

    tarefas.forEach(tarefa => {
        dados += tarefa.innerText + ";"
    })

    if (confirm("Confirma a gravação das tarefas?")) {
        localStorage.setItem("tarefas", dados.slice(0, -1))
    }

    if (localStorage.getItem("tarefas")) {
        alert("Tarefas gravadas com sucesso")
    }
})

window.addEventListener("load", () => {
    if (localStorage.getItem("tarefas")) {
        const dados = localStorage.getItem("tarefas").split(";")

        dados.forEach(dado => {
            const h5 = document.createElement("h5")
            const texto = document.createTextNode(dado)

            h5.appendChild(texto)
            dvQuadro.appendChild(h5)
        })
    }
})