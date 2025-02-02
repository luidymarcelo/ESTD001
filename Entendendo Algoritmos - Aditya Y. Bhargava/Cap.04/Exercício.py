def soma(lista):
  if not lista:
    return 0
  else:
    return lista[0] + soma(lista[1:])

print(soma([2, 4, 6, 10]))