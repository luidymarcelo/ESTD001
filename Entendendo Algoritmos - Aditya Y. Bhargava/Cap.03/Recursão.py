def procure_pela_chave(caixa_principal):
    pilha = main_box.crie_uma_pilha_para_busca()
    while pilha is not vazia:
        caixa = pilha.pegue_caixa()
        for item in caixa:
            if item.e_uma_caixa():
                pilha.append(item)
            elif item.e_uma_chave():
                print("achei a chave!")


def procure_pela_caixa(caixa_principal):
    for item in caixa:
        if item.e_uma_caixa():
            procure_pela_chave(item)
        if item.e_uma_chave():
            print("achei a chave!")