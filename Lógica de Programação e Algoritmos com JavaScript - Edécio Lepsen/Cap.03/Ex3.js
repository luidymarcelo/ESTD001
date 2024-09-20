const prompt = require("prompt-sync")()
const salario = Number(prompt("Salário R$: "))
const tempo = Number(prompt("Tempo (anos): "))
const quadrienios = Math.floor(tempo/4)
const acrescimo = salario * quadrienios / 100

console.log(`Duração: ${quadrienios}`)
console.log(`Sobra: ${(salario+acrescimo)}`)

/*
SALARIO
TEMPO
QUADRI
SALÁRIO
*/