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
    <div>
      <div>Logo</div>
      <div>{canal}</div>
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
