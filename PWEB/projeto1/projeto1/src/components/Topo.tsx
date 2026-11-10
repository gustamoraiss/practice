import Link from "next/link";

export default function Topo() {
    return (
        <div className="flex flex-col h--[130px] items-center justify-between bg-zinc-300 px-4">
            <div>Logo</div>
            <div className="flex flex-col justify-center items-center">
                <div className="text-3xl">GustavoCursos</div>
                <div className="font-bold text-blue-600">Curso de React</div>
            </div>
            <div>
                <nav>
                    <Link href={"/"}>
                        Home
                    </Link>
                    <Link href={"/produtos/produtos"}>
                        Produtos
                    </Link>
                    <Link href={"/teste/teste"}>
                        Teste
                    </Link>
                </nav>
            </div>
        </div>
    )
}