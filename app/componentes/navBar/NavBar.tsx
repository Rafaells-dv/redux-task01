"use client";
import TextoLink from "../textoLink/TextoLink";

export default function NavBar() {
  return (
    <>
      <nav className="h-20 flex items-center justify-between px-4 gap-4">        
        <TextoLink texto="Home" href="/" />
        <TextoLink texto="Galeria" href="/galeria" />
        <TextoLink texto="Comprar" href="/loja" />
        <TextoLink texto="Documentos" href="/documentos" />
        <TextoLink texto="RTK Tutorial" href="/rtk" />              
      </nav>
    </>
  );
}
