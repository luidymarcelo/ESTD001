from collections import deque

def pessoa_e_vendedor(nome):
      return nome[-1] == 'm'

grafo = {}
grafo["you"] = ["alice", "bob", "claire"]
grafo["bob"] = ["anuj", "peggy"]
grafo["alice"] = ["peggy"]
grafo["claire"] = ["thom", "jonny"]
grafo["anuj"] = []
grafo["peggy"] = []
grafo["thom"] = []
grafo["jonny"] = []

def procurar(nome):
    fila_de_pesquisa = deque()
    fila_de_pesquisa += grafo[nome]
    procurared = set()
    while fila_de_pesquisa:
        pessoa = fila_de_pesquisa.popleft()
        if pessoa in procurared:
            continue
        if pessoa_e_vendedor(pessoa):
            print(pessoa + " é vendedor de Manga!")
            return True
        fila_de_pesquisa += grafo[pessoa]
        procurared.add(pessoa)
    return False

procurar("you")

"""
from collections import deque

def pessoa_e_vendedor(nome):
    return nome[-1] == 'm'

grafo = {}
grafo["you"] = ["alice", "bob", "claire"]
grafo["bob"] = ["anuj", "peggy"]
grafo["alice"] = ["peggy"]
grafo["claire"] = ["thom", "jonny"]
grafo["anuj"] = []
grafo["peggy"] = []
grafo["thom"] = []
grafo["jonny"] = []

def procurar(nome):
    fila_de_pesquisa = deque()
    fila_de_pesquisa += [nome]
    procurando = set()

    while fila_de_pesquisa:
        pessoa = fila_de_pesquisa.popleft()
        if pessoa in procurando:
            continue
        if pessoa_e_vendedor(pessoa):
            print(pessoa + "é vendedora de manga!")
            return True
        fila_de_pesquisa += grafo[pessoa]
        procurando.add(pessoa)
    return False

procurar("voce")
"""
""" ABAIXO ESTÁ UM EXEMPLO ONDE DESCONSIEDRA PESSOAS JÁ VERIFICADAS"""

from collections import deque

def pessoa_e_vendedor(nome):
      return nome[-1] == 'm'

grafo = {}
grafo["you"] = ["alice", "bob", "claire"]
grafo["bob"] = ["anuj", "peggy"]
grafo["alice"] = ["peggy"]
grafo["claire"] = ["thom", "jonny"]
grafo["anuj"] = []
grafo["peggy"] = []
grafo["thom"] = []
grafo["jonny"] = []

def procurar(nome):
    fila_de_pesquisa = deque()
    fila_de_pesquisa += grafo[nome]
    verificadas = []
    while fila_de_pesquisa:
        pessoa = fila_de_pesquisa.popleft()
        if not pessoa in verificadas:
          if pessoa_e_vendedor(pessoa):
            print(pessoa + " é vendedor de Manga!")
            return True
          else:
            fila_de_pesquisa += grafo[pessoa]
            verificadas.append(pessoa)
    return False

procurar("you")

