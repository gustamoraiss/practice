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