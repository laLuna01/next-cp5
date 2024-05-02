"use client"
import Image from "next/image";
import { useState } from "react";
import "./header.css";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    return (
        <>
            <header className="navbar">
                <div className="esquerda">
                    <a href=".">
                        <Image className="logo-header" src="/logo.png" alt="logo salesforce" width={60} height={60}/>
                    </a>
                    <nav className="links-paginas">
                        <a id='text' className="link-pagina" href="./produtos">Produtos</a>
                        <a id='text' className="link-pagina" href="./sobre">Sobre</a>
                        <a id='text' className="link-pagina" href="./contato">Contato</a>
                    </nav>
                </div>
                <div className="direita">
                    <button className="menu-hamburger" onClick={toggleMenu}></button>
                    {isMenuOpen && (
                    <div className="menu-dropdown">
                        <nav className="links-paginas-dropdown">
                            <a className="link-pagina" href="./produtos">Produtos</a>
                            <a className="link-pagina" href="./sobre">Sobre</a>
                            <a id="ultimo" className="link-pagina" href="./contato">Contato</a>
                        </nav>
                    </div>
                    )}
                </div>
            </header>
        </>
    );
};

export default Header;