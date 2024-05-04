import "./contato.css";
import Campo from "../components/Campo";

export default function Contato() {
    return (
        <>
            <div className="form-container">
                <form action="">
                    <h1 className="titulo">Entre em contato</h1>
                    <Campo nome="nome" label="Nome Completo" tipo="texto" />
                    <Campo nome="email" label="E-mail" tipo="email" />
                    <Campo nome="mensagem" label="Mensagem" tipo="mensagem" />
                    <input className="enviar" type="submit" value="Enviar" />
                </form>
            </div>
        </>
    );
}