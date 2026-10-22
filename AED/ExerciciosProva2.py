l = [1,2,3,4,5,6,7,9]
def pesquisa_sequencial(l, k):
    for indice, valor in enumerate(l):
        if valor == k:
            return indice
        elif valor > k:
            return -1

print(pesquisa_sequencial(l, 8))

