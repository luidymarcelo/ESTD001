def buscarMenor(array):
  menor = array[0]
  menor_indice = 0
  for i in range(1, len(array)):
    if array[i] < menor:
      menor = array[i]
      menor_indice = i
  return menor_indice

def ordenacaoporSelecao(array):
  novoarray = []
  for i in range(len(array)):
      menor = buscarMenor(array)
      novoarray.append(array.pop(menor))
  return novoarray

print (ordenacaoporSelecao([5, 3, 6, 2, 10]))
print (buscarMenor([5, 3, 6, 2, 10]))