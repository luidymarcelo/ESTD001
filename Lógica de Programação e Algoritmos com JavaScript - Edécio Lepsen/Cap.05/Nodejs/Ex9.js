const prompt = require("prompt-sync")()
const produto = prompt("Produto: ")
const num = Number(prompt("Nº de etiquetas: "))

for (let i = 1; i <= num; i++) {
    console.log(`${produto.padEnd(30)} ${produto.padEnd(30)}`)
}
if (num % 2 == 1) {
    console.log(produto)
}
prompt("Pressione Enter para encerrar o programa...")