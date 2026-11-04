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

function retNome() {
  return nome
}

export default function Home() {
  return (
    <main>
      <div>{retNome()}</div>
      <div>{canal}</div>
      <div>Curso de React/Next</div>
      <div>TypeScript</div>
      <div>React</div>
    </main>
  );
}
