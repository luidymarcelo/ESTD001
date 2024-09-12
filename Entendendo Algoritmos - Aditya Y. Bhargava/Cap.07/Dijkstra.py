# GRAFO
grafo = {}
grafo["start"] = {}
grafo["start"]["a"] = 6
grafo["start"]["b"] = 2

grafo["a"] = {}
grafo["a"]["FIM"] = 1

grafo["b"] = {}
grafo["b"]["a"] = 3
grafo["b"]["FIM"] = 5

grafo["FIM"] = {}

# CUSTOS 
inifinito = float("inf")
custos = {}
custos["a"] = 6
custos["b"] = 2
custos["FIM"] = inifinito

# PAIS
pais = {}
pais["a"] = "start"
pais["b"] = "start"
pais["FIM"] = None

processados = []

def encontre_o_no_de_menor_custo(custos):
    menor_custo = float("inf")
    menor_custo_no = None
    # Passe por cada no.
    for no in custos:
        custo = custos[no]
        # Se for o custo mais baixo até agora e ainda não foi processado ...
        if custo < menor_custo and no not in processados:
            # ... defina-o como o novo não de custo mais baixo.
            menor_custo = custo
            menor_custo_no = no
    return menor_custo_no

# Encontre o menor custo não que você ainda não processou.
no = encontre_o_no_de_menor_custo(custos)
# Se você processou todos os nós, esse loop while está concluído.
while no is not None:
    custo = custos[no]
    # Percorra todos os vizinhos deste não.
    vizinhos = grafo[no]
    for n in vizinhos.keys():
        novo_custo = custo + vizinhos[n]
        # Se é mais barato chegar a este vizinho passando por este no...
        if custos[n] > novo_custo:
            # ... atualize o custo para isso no.
            custos[n] = novo_custo
            # Este não passa a ser o novo pai deste vizinho.
            pais[n] = no
    # Marque o não como processado.
    processados.append(no)
    # encontre o próximo não para processar e faça um loop.
    no = encontre_o_no_de_menor_custo(custos)

print("custo from the start to each no:")
print(custos)

