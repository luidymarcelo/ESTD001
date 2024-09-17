// CRIA REFERêNCIA AO FORM E AOS ELEMENTOS H3 E H4 (RESPOSTA)

const frm = document.querySelector("form")
const resp3 = document.querySelector("h3")
const resp4 = document.querySelector("h4")

// CRIA "OUVINTE" DE EVENTO, ACIONADO QUANDO BOTÃO SUBMIT FOR ACIONADO

frm.addEventListener("submit", (e) => {
    const titulo = frm.inTitulo.value
    const duracao = Number(frm.inDuracao.value)
    const horas = Math.floor(duracao / 60)
    const minutos = duracao % 60

    resp3.innerText = titulo
    resp4.innerText = `${horas} hora(s) e ${minutos} minuto(s)`

e.preventDefault()
})