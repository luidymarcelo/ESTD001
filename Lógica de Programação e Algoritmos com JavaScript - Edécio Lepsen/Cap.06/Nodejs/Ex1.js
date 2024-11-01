const prompt = require("prompt-sync")()
console.log("Informe os alunos, digite 'Fim' no nome para sair")
const alunos = []
do {
    const nome = prompt("Nome: ")
    if (nome == "Fim") {
        break
    }
    const nota = Number(prompt("Nota: "))
    alunos.push({nome,nota})
    console.log("Ok! Aluno(a) cadastrado(a)...")
} while(true)
console.log("-".repeat(40))
const maior = alunos.reduce((a,b) => Math.max(a, b.nota), 0)
const aluno2 = alunos.filter(aux => aux.nota == maior)
for (const notaMaior of aluno2) {
    console.log(`Nota ${maior} do aluno(a) ${notaMaior.nome}`)
}
if (maior >= 7) {
    const destaques = alunos.filter(aluno => aluno.nota >= 7)
    console.log("Estes alunos estão em destaque (com média acima de 7!)")
    for (const destaque of destaques) {
        console.log(`- ${destaque.nome}`)
    }
} else {
    console.log("Não há alunos em destaque na turma")
}
prompt("Acabou o laço, aperte 'Enter' para sair.")