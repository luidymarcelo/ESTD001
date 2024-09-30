const prompt = require("prompt-sync")()
const valor = Number(prompt("Valor da compra R$: "))
const aux = Math.floor(valor / 20)
const parcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux
const valorParcela = valor / parcelas

console.log(`Pode pagar em nomáximo ${parcelas}x de R$: ${valorParcela.toFixed(2)}`)

prompt("Pressione Enter para encerrar o programa...") // Aguarda uma interação do usuário antes de fechar

/*3

LINHA 4 EQUIVALE A FUNÇÃO ABAIXO

let parcelas

if(aux == 0) {
    parcelas = 1
} else if (aux > 6) {
    parcelas = 6
} else {
    parcelas = aux
}
    
*/