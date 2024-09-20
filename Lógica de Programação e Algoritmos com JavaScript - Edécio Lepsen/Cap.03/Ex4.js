const prompt = require("prompt-sync")()
const peso = Number(prompt("Peso da Ração (KG): "))
const consumo = Number(prompt("Consumo diário (GR): "))
const duracao = Math.floor((peso * 1000) / consumo)
const sobra = (peso * 1000) % consumo

console.log(`Duração: ${duracao}`)
console.log(`Sobra: ${sobra}`)