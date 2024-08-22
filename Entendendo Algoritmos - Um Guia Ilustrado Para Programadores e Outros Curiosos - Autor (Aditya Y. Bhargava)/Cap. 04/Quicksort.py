def quicksort(array):
  if len(array) < 2:
    return array
  else:
    pivo = array[0]
    menores = [i for i in array [1:] if i <= pivo]
#   menores = [1:]
    maiores = [i for i in array [1:] if i > pivo]
    return quicksort(menores) + [pivo] + quicksort(maiores)
  
print(quicksort([40, 50, 35, 5, 1]))