const soap = require('strong-soap').soap;
const prompt = require('prompt-sync')(); // Certifique-se de instalar este módulo

const url = 'http://srverp01:8002/SERVERTIME.apw?wsdl';
const requestArgs = { PARMETRO: 'teste' };

soap.createClient(url, {}, (err, client) => {
    if (err) {
        console.error('Erro ao criar cliente:', err);
        return;
    }

    client.GETSERVERTIME(requestArgs, (err, result, envelope, xml) => {
        if (err) {
            console.error('Erro na requisição:', err);
        } else {
            console.log('Resultado:', result);
        }
        console.log('Envelope enviado:', xml);
    });
});

// Mantém o programa aberto até o usuário pressionar Enter
prompt("Pressione Enter para encerrar o programa...");
