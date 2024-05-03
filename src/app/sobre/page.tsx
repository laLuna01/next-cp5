import './sobre.css';
import Image from 'next/image';

export default function Sobre() {
    return (
        <>
            <section className='sobre'>
                <div className='sobre-texto'>
                    <h1 className='titulo'>Sobre nós</h1>
                    <p>A beleza e auto-cuidado devem ser para todos. Nossa missão é oferecer produtos de alta qualidade que ajudem você a se sentir bem consigo mesmo. Queremos que cada compra em nossa loja seja uma experiência positiva. Seja para maquiagem, cuidados com a pele ou cabelos, estamos aqui para ajudar você a brilhar.</p>
                </div>
                <Image src="/5.png" alt='pessoas' width={700} height={300}></Image>
            </section>
        </>
    );
}