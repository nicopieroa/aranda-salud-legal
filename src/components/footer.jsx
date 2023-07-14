import { Title } from '@mantine/core';
import { Link } from 'wouter'

export function Footer() {
    return (
        <footer className="footer">
            <img
                src="images/logo-favIcon-white-noBg.png"
                alt="Logotipo de la empresa Aranda Salud Legal"
                className='logo' />

            <Title order={3} size="h3" fw={600} fs="italic">Aranda Salud Legal</Title>

            <section className="links-container">
                <Link href='/sobre-nosotros'><a>Quiénes somos</a></Link>
                <Link href='/nuestros-servicios'><a>Nuestros servicios</a></Link>
            </section>

            <section className="links-container">
                <Title order={3} size="h3" fw={400}>Nos encuentras en</Title>

                <div className="socialMedia-icons">
                    <a href="">
                        <img src="icons/whatsapp.svg" alt="Imagen del logo de whatsapp" />
                    </a>
                    <a href="">
                        <img src="icons/linkedin.svg" alt="Imagen del logo de linkedin" />
                    </a>
                    <a href="">
                        <img src="icons/twitter.svg" alt="Imagen del logo de twitter" />
                    </a>
                </div>
            </section>
        </footer>
    )
}