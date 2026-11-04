/*import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});*/

const nome = 'Gustavo'
let canal = 'GustavoCursos'


function Topo() {
  return (
    <div className="flex justify-between items-center bg-zinc-300 h-25">
      <div>Logo</div>
      <div className="flex flex-col justify-center items-center">
        <div className="text-3xl">{canal}</div>
        <div className="subtituloTopo">Curso de React</div>
      </div>
      <div>{nome}</div>
    </div>
  )
}

export default function Home() {
  return (
    <main>
      <Topo/>
      <div>Curso de React/Next</div>
      <div>TypeScript</div>
      <div>React</div>
    </main>
  );
}
