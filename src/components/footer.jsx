import { Title } from '@mantine/core';
import { Link } from 'wouter'

export function Footer() {
    return (
        <footer className="footer">
            <img
                src="/public/images/logo-favIcon-white-noBg.png"
                alt="Logotipo de la empresa Aranda Salud Legal"
                className='footerLogo' />

            <Title order={3} size="h3" fw={600} fs="italic">Aranda Salud Legal</Title>

            <section className="links-container">
                <Link href='/quienes-somos'><a>Quiénes somos</a></Link>
                <Link href='/nuestros-servicios'><a>Nuestros servicios</a></Link>
            </section>

            <section className="links-container">
                <Title order={3} size="h3" fw={400}>Nos encuentras en:</Title>

                <div className="socialMedia-icons">
                    <a href="https://wa.me/543426124730" target="_blank" rel="noopener noreferrer">
                        <img src="/public/icons/whatsapp.svg" alt="Imagen del logo de whatsapp" />
                    </a>
                    <a href="https://www.linkedin.com/in/mariel-aranda-983099108/" target="_blank" rel="noopener noreferrer">
                        <img src="/public/icons/linkedin.svg" alt="Imagen del logo de linkedin" />
                    </a>
                    <a href="">
                        <img src="/public/icons/twitter.svg" alt="Imagen del logo de twitter" />
                    </a>
                    <a href="/#contactSection">
                        <img src="/public/icons/email.svg" alt="Imagen del logo de un sobre, simbolizando casilla de correo" />
                    </a>
                </div>
            </section>
        </footer>
    )
}