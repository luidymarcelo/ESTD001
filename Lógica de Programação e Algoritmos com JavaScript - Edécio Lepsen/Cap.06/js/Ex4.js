const frm = document.querySelector("form")
const resp = document.querySelector("pre")
const lista = []

frm.addEventListener("submit", (e) => {

    e.preventDefault()

    const crianca = frm.inNome.value
    const idade = Number(frm.inIdade.value)

    lista.push({Nome_Crianca: crianca, Idade: idade})

    frm.inNome.value = ""
    frm.inIdade.value = ""
    inNome.focus()

    frm.btListar.dispatchEvent(new Event('click'))
})

frm.btListar.addEventListener("click", () => {
    if (lista.length == 0) {
        alert("Não há criança cadastrada")
    }
    const clista = lista.reduce((acumulador, crianca) => acumulador + "Nome: " + crianca.Nome_Crianca + " Idade: " + crianca.Idade + "\n", "")

    resp.innerText = `Lista de crianças cadastradas\n${"-".repeat(40)}\n${clista}`
})

frm.btResumir.addEventListener("click", () => {
    if (lista.length == 0) {
      alert("Não há crianças na lista");
      return;
    }
  
    const copia = [...lista]; // cria um cópia do array de crinças (operador Rest)
    // ordena a cópia do array por idade usando o método sort e função de comparação:
    copia.sort((a, b) => a.Idade - b.Idade); 
  
    let resumo = "";
    // define a idade auxiliar como a idade da primeira criança: 
    let aux = copia[0].Idade;
    let nomes = [];
  
    for (const crianca of copia) { // percorre a cópia do array de crianças
      const { nome, Idade } = crianca; // desestrutura o objeto criança
  
      if (Idade == aux) {
        nomes.push(crianca.Nome_Crianca);
      } else {
        resumo += aux + " anos(s): " + nomes.length + " criança(s) - ";
        resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n";
        resumo += "(" + nomes.join(", ") + ")\n\n";
        aux = Idade;
        nomes = [];
        nomes.push(crianca.Nome_Crianca);
      }
    }
  
    resumo += aux + " ano(s): " + nomes.length + " criança(s) - ";
    resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n";
    resumo += "(" + nomes.join(", ") + ") \n\n";
    resp.innerText = resumo;
  });