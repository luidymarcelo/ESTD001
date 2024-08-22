def buscarMenor(array): #ESTÁ FUNÇÃO TRÁS O MENOR VALOR EM SUA POSIÇÃO REPITO P-O-S-I-Ç-Ã-O, NÃO RETORNA O MENOR NÚMERO
  menor = array[0] # MENOR RECEBE O VALOR QUE ESTÁ NO INDICE 1
  menor_indice = 0 # DEFINE MENOR INDICE
  for i in range(0, len(array)):
    if array[i] < menor:
      menor = array[i]
      menor_indice = i
  return menor

def ordenacaoporSelecao(array):
  novoarray = []
  for i in range(len(array)):
      menor = buscarMenor(array)
      novoarray.append(array.pop(menor))
  return novoarray

for num1 in range(10, -1, -1): #SYNTAX RANGE
  print(num1)

print (ordenacaoporSelecao([-1, 2, 3, 6, 5, 10]))
print (buscarMenor([-1, 2, 3, 6, 5, 10]))
