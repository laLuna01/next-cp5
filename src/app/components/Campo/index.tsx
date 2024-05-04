import "./campo.css";
import { Props } from "./interface";

const Campo = (props: Props) => {
    if (props.tipo === "texto") {
        return (
            <div className="campo">
                <label className="label" htmlFor={props.nome}>{props.label}</label><br />
                <input name={props.nome} className="input" type="text" />
            </div>
        )
    }
    if (props.tipo === "email") {
        return (
            <div className="campo">
                <label className="label" htmlFor={props.nome}>{props.label}</label><br />
                <input name={props.nome} className="input" type="email" />
            </div>
        )
    }
    if (props.tipo === "mensagem") {
        return (
            <div className="campo">
                <label className="label" htmlFor={props.nome}>{props.label}</label><br />
                <textarea name={props.nome} className="textarea" rows={6}></textarea>
            </div>
        )
    }
}

export default Campo;