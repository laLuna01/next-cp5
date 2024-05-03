import "./card.css";
import Image from "next/image";
import { Props } from "./interface";

const Card = (props: Props) => {
    return (
        <>
            <div className="card">
                <div className="p-img">
                    <Image src={props.foto} alt={props.nome} width={100} height={100}/>
                </div>
                <div className="p-info">
                    <p>{props.nome}</p>
                    <p>{"R$" + props.preco}</p>
                </div>
                <button className="p-comprar">Comprar</button>
            </div>
        </>
    )
}

export default Card;