
// Construtor Parser
var Parser = function () {

};

// Analisa o texto especificado
Parser.prototype.parse = function ( text ) {
	
	var results = {};

	// Quebra o arquivo em linhas
	var lines = text.split('\n');

	lines.forEach(function ( line ) {
		var parts = line.split( ' ' );
		var letter = parts[ 1 ];
		var count = parseInt( parts[2] );

		if ( !results[ letter ] ) {
			results[ letter ] = 0;
		}

		results[ letter ] += parseInt( count );
	});

	return results;
};

// Exportando o construtor Parser neste módulo
module.exports = Parser;
