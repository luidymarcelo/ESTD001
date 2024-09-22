// CRIA REFERÊNCIA AOS ELEMENTOS DE RESPOSTA DO PROGRAMA
const frm   = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

// CRIA O "OUVINTE", ACIONADO QUANDO O BOTÃO SUBMIT FOR CLICADO
frm.addEventListener("submit", (e) =>{
    e.preventDefault()                               // EVITA O ENVIO DO FORMULÁRIO
    const nome       = frm.inNome.value              // OBTÉM VALORES DO FORM
    const nota1      = Number(frm.inNota1.value)
    const nota2      = Number(frm.inNota2.value)
    const media      = (nota1 + nota2) / 2

    resp1.innerText  = `Média no aluno ${nome} é ${media.toFixed(2)}`

    if (media >= 7){
    resp2.innerText   = `Parabéns! Você foi aprovado`
    resp2.style.color = "Green"
    }   
        else if (media >= 4 ){
        resp2.innerText   = `Você está em recuperação! Tanso`
        resp2.style.color = "Yellow"
        }
            else {
            resp2.innerText   = `Parabéns seu burro, você foi reprovado`
            resp2.style.color = "Red"
            }
})