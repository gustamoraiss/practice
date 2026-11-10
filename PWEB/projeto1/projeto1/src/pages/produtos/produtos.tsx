import Card from "@/components/Card"
import Topo from "@/components/Topo"

function calcDesc(v: number, d: number) {
  return v - d
}

function calcDesc2(v: number, d: number) {
  return v - (d/2)
}

const produtos = [
  {
    produto: "Mouse",
    valor:49.90,
    desconto:0,
    disponivel: true
  },
  {
    produto: "Teclado",
    valor:69.90,
    desconto:0,
    disponivel: true
  },
  {
    produto: "Monitor",
    valor:659.90,
    desconto:0,
    disponivel: true
  },
  {
    produto: "CPU",
    valor:899.90,
    desconto:0,
    disponivel: true
  },
  {
    produto: "Cx. som",
    valor:39.90,
    desconto:0,
    disponivel: false
  }
]

export default function produtosPagina() {
    return (
        <div>
            <Topo/>
        
            <div className="flex justify-center gap-3">
                {
                    produtos.map((e: any) => {
                        if (e.disponivel){
                            return (
                                    <Card produto = {e.produto} valor = {e.valor} desconto = {e.desconto} funcao = {calcDesc} />
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}