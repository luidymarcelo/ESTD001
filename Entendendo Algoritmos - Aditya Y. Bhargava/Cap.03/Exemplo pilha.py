def sauda2(nome):
    print("Qual seu nome,", nome ,"?")

def tchau():
    print("ok tchau!")

def sauda(nome):
    print("Olá,"+nome+"!")
    sauda2(nome)
    print("Preparando para dizer tchau...")
    tchau()

sauda("Luidy")