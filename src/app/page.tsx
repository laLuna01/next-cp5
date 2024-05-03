import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section>
        <div className="texto">
          <h1 className="titulo">Beleza Dourada,<br/>Brilho que Encanta.</h1>
          <p>Nossos cosméticos premium são projetados para realçar sua beleza natural e trazer brilho ao seu dia a dia. Da maquiagem ao cuidado com a pele, cada produto é cuidadosamente selecionado para proporcionar a você a qualidade que merece. Transforme sua rotina de beleza com a Rosa Dourada e brilhe com confiança.</p>
        </div>
        <div className="imagem">
          <span></span>
          <Image className="pessoa" src="/3.webp" alt="pessoa" width={430} height={500}/>
        </div>
      </section>
    </main>
  );
}
