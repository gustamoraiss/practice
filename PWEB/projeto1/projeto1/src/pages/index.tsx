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

import Topo from "@/components/Topo";
import Card from "@/components/Card";

const nome = 'Gustavo'
const canal = 'GustavoCursos'

export default function Home() {
  return (
    <main>
      <Topo/>
      <div style={testecss}>
        <div>Curso de React/Next</div>
        <div>TypeScript</div>
        <div style={{color: '#f00', backgroundColor: '#bbb'}}>React</div>
      </div>
      <div className="flex justify-center gap-3">
        <Card produto = {'Mouse'} valor = {49.90} desconto = {10}/>
        <Card produto = {'Teclado'} valor = {69.90} desconto = {2}/>
        <Card produto = {'Monitor'} valor = {459.90} desconto = {0}/>
        <Card produto = {'CPU'} valor = {799.90} desconto = {50}/>
      </div>
    </main>
  );
}

const testecss = {
  display: 'flex',
  justifyContent: 'Center',
  alignItems: 'Center',
  color: '#00f',
  backgroundColor: '#eee',
  fontSize: '20px'
}