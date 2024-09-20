const prompt = require("prompt-sync")()                     // ADICIONA PACOTE PARA ENTRADA DE DADOS
const num1 = Number(prompt("1º Número: "))                  // LÊ OS NÚMEROS
const num2 = Number(prompt("2º Número: "))
const soma = num1 + num2                                    // CALCULA A SOMA
console.log(`soma é: ${soma}`)                              // EXIBE O RESULTADO

