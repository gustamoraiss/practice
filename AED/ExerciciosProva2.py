l = [1,2,3,4,5,6,7,9]
def pesquisa_sequencial(l, k):
    for indice, valor in enumerate(l):
        if valor == k:
            return indice
        elif valor > k:
            return -1

print(pesquisa_sequencial(l, 8))

# ========================================

ld = [9,8,7,6,5,4,3,1]
def pesquisa_binaria(l, k):
    inicio = 0
    fim = len(l) - 1
    meio = 0

    while inicio <= fim:
        meio = (inicio + fim) // 2

        if l[meio] == k:
            return meio
        elif l[meio] > k:
            inicio = meio + 1
        elif l[meio] < k:
            fim = meio - 1

    return -1

print(pesquisa_binaria(ld, 3))

# ========================================

lr = [9,8,7,6,5,4,3,1]
def pesquisa_binaria_recursiva(l, k, ini, fin):

    if ini <= fin:
        meio = (ini + fin) // 2

        if l[meio] == k:
            return meio
        elif l[meio] > k:
            return pesquisa_binaria_recursiva(l, k, meio + 1, fin)
        elif l[meio] < k:
            return pesquisa_binaria_recursiva(l, k, ini, meio - 1)
    return -1

print(pesquisa_binaria_recursiva(lr, 3, 0, len(lr) - 1))

# ========================================



# ========================================

lc = [1,2,3,4,5,6,7,8,9]
def cria_arvore_busca(l, inf, sup):

    if inf <= sup:
        meio = (inf + sup) // 2
        print(l[meio]) 
        cria_arvore_busca(l, inf, meio - 1)
        cria_arvore_busca(l, meio + 1, sup)

cria_arvore_busca(lc, 0, 8)

# ========================================

def encontra_indiceA_recursivo(chave, arvore):
    p = arvore
    if p == None:
        return -1

    if p != None:
        if chave == p.dado.chave:
            return p.dado.indice
        if chave < p.dado.chave:
            return encontra_indiceA_recursivo(chave, p.esq)
        else:
            return encontra_indiceA_recursivo(chave, p.dir)
    return -1

# ========================================

def lista_ordenada(arvore):
    if arvore != None:
        lista_ordenada(arvore.esq)
        print(arvore.dado.chave)
        lista_ordenada(arvore.dir)