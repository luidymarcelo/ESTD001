// Carregando o módulo fs (filesystem)
var fs = require('fs');
const { PerformanceNodeTiming } = require('perf_hooks');

// Leia o conteúdo do arquivo para a memória
fs.readFile('example-log.txt', function ( err, logData ) {
	
	// Se um erro ocorrer, será lançada uma
	// exceção, e a aplicação irá ser encerrada
	if ( err ) throw err;

	// logData é um Buffer, converta para string
	var text = logData.toString()

	var lines = text.split( '\n' )
	let retorno = " "

	for (let i = 0;i <= 1239; i++) {

			const atual = lines[i]

			const partes = atual.split(",")

			let coluna1 = partes[0]
			let coluna2 = partes[1]
			
			if (i == 0) {
				retorno += `${coluna1} , ${coluna2}\n`
			} else {
				if (coluna2.match(/./g)) {

					const ponto = coluna2.indexOf(".")

					const posponto = ponto + 3
					
					coluna2 = coluna2.substr(0,posponto)
					retorno += `${coluna1} , ${coluna2}\n`
				} else {
					retorno += `${coluna1} , ${coluna2}\n`
				}
			}
	}
	console.log(retorno)

})