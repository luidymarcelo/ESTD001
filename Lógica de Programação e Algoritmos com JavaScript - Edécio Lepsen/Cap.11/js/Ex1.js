const frm = document.querySelector("form")
const resp1 = document.getElementById('preResposta1')
const resp2 = document.getElementById('preResposta2')
const respCavalo = document.querySelector("#outCavalo")

const cavalos = ["Marujo", "Tordilho", "Belga", "Twister", "Jade", "Lucky"]

const apostas = []

frm.addEventListener("submit", (e) => {

    e.preventDefault()

    const cavalo = Number(frm.inCavalo.value)
    const valor = Number(frm.inValor.value)

    apostas.push({cavalo, valor})

    let lista = `Apostas Realizadas\n${"-".repeat(40)}\n`

    for (const aposta of apostas) {
        lista += `Nº ${aposta.cavalo} ${obterCavalo(aposta.cavalo)} - R$ ${aposta.valor.toFixed(2)}\n`
    }

    resp1.innerText = lista

    frm.reset()
    frm.inCavalo.focus()
});

/*const obterCavalo = (cavalo) => {
    const posicao = cavalo - 1
    return cavalos[posicao]
}*/

frm.inCavalo.addEventListener("blur", () => {

    if (frm.inCavalo.value == "") {
        respCavalo.innerText = " "
        return
    }


    const numCavalo = Number(frm.inCavalo.value)

    if (!validarCavalo(numCavalo)) {
        alert("Cavalo Inválido")
        frm.inCavalo.focus()
        return
    }

    const nome = obterCavalo(numCavalo)
    const constaNum = contarApostas(numCavalo)
    const total = totalizarApostas(numCavalo)

    respCavalo.innerText = `Cavalo: ${nome}\nNº de Apostas: ${constaNum}\nTotal Apostas: R$ ${total.toFixed(2)}`

})

const obterCavalo = (num) => {
    const posicao = num - 1
    return cavalos[posicao]
}

const validarCavalo = (num) => {
    return num >= 1 && num <= cavalos.length
}

const contarApostas = (num) => {
    let contador = 0
    for (const aposta of apostas) {
        if (aposta.cavalo == num) {
            contador++
        }
    }
    return contador
}

const totalizarApostas = (num) => {
    let total = 0
    for (const aposta of apostas) {
        if (aposta.cavalo == num) {
            total += aposta.valor
        }
    }
    return total
}

frm.inCavalo.addEventListener("focus", () => {
    frm.inCavalo.value = ""
    respCavalo.innerText = " "
})

frm.btResumo.addEventListener("click", () => {
    const somaApostas = [0, 0, 0, 0, 0, 0]
    for (const aposta of apostas) {
        somaApostas[aposta.cavalo - 1] += aposta.valor
    }
    let resposta = `Nº Cavalo................R$ Apostado\n${"-".repeat(35)}\n`
    cavalos.forEach((cavalo, i) => {
        resposta += `${i + 1} ${cavalo.padEnd(20)}`
        resposta += `${somaApostas[i].toFixed(2).padStart(11)}\n`
    })
    resp2.innerText = resposta
})

frm.btGanhador.addEventListener("click", () => {
    const ganhador = Number(prompt("Nº Cavalo Ganhador: "))

    if (isNaN(ganhador) || !validarCavalo(ganhador)) {
        alert("Cavalo Invático")
        return
    }

    const total = apostas.reduce((acumulador, aposta) => acumulador + aposta.valor, 0)
    
    let resumo = `Resultado final do Paréo\n${'-'.repeat(30)}\n`

    resumo += `Nº Total de Apostas: ${apostas.length}\n`
    resumo += `Total Apostas: R$ ${total.toFixed(2)}\n`
    resumo += `Nº Cavalo Ganhador: ${ganhador}\n`
    resumo += `Cavalo: ${obterCavalo(ganhador)}\n`
    resumo += `Nº de Apostas: ${contarApostas(ganhador)}\n`
    resumo += `Total Apostas: R$ ${totalizarApostas(ganhador).toFixed(2)}\n`

    respCavalo.innerText = resumo

    frm.btApostar.disabled = true
    frm.btGanhador.disabled = true
    frm.btNovo.focus()

})

frm.btNovo.addEventListener("click", () => window.location.reload())