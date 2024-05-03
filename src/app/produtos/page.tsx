import Card from "../components/Card";
import "./produtos.css";

export default function Produtos() {
    return (
        <>  
            <main>
                <div className="produtos">
                    <Card nome="Batom hidratante" foto="/p1.png" preco="14,50"/>
                    <Card nome="Blush em pó" foto="/p2.png" preco="16,00"/>
                    <Card nome="Kit completo cabelo" foto="/p3.webp" preco="254,99"/>
                    <Card nome="Creme para pentear" foto="/p4.png" preco="8,49"/>
                    <Card nome="Pó compacto" foto="/p5.png" preco="20,00"/>
                    <Card nome="Base efeito matte" foto="/p6.webp" preco="23,00"/>
                    <Card nome="Creme hidratante" foto="/p7.png" preco="30,50"/>
                    <Card nome="Pó iluminador" foto="/p8.png" preco="20,00"/>
                    <Card nome="Contorno em bastão" foto="/p9.png" preco="22,99"/>
                    <Card nome="Paleta de sombras" foto="/p10.png" preco="32,90"/>
                    <Card nome="Caneta delineadora" foto="/p12.png" preco="14,50"/>
                    <Card nome="Necessaire transparente" foto="/p13.png" preco="17,00"/>
                    <Card nome="Kit de pincéis" foto="/p14.png" preco="23,00"/>
                    <Card nome="Kit de esponjinhas" foto="/p15.png" preco="10,99"/>
                </div>
            </main>
        </>
    );
}