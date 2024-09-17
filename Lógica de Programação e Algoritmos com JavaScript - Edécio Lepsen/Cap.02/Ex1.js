//
const frm = document.querySelector("form")                  // CRIA VARIÁVEL PARA FORM
const nome = document.querySelector("form").inNome.Value    // ACESSA A PROPRIEDADE A ATRÍBUI O VALOR DIGITADO EM inNome OBS: MESMA COISA QUE LINHA 7
const resp = document.querySelector("h3")                   // CRIA VARIÁVEL PARA H3

frm.addEventListener("submit", (e) => {                     // CRIA UM OUVINTE DE EVENTO, ACIONADO SEMPRE QUE CLICAAR EM MOSTRAR
    const nome = frm.inNome.value                           // OBTEM O NOME DIGITADO EM FORM
    resp.innerText = `Olá ${nome}`                          // EXIBE A RESPOSTA DO PROGRAMA NUM FORMATO DE TXT
/*  
    resp.innerHTML = `Olá ${nome}`                          // HTML, SE O USUÁRIO COLOCAR UM CÓDIGO HTML NO CAMPO IRÁ RENDERIZAR
*/
    e.preventDefault()                                      // EVITA O RELOAD DA PÁGIA
})

// Objeto = ex. document
// Método = ex. querySelector
// Propriedade = ex. value

