// import { Button } from '@mantine/core';
import { Title } from '@mantine/core';

export function Header() {

    return (
        <header className="header">
            <div className="headerText">
                <Title order={1} size="40px" fw="900">Aranda Salud Legal</Title>

                <Title order={2} size="20px" fw="600" color='#7b7e80' fs="italic">
                    Firma especializada en asesoramiento legal en salud
                </Title>
            </div>

            <img src="ilustrations/1.svg" alt="" />

            <div className='dropdown'>
                <div className='dropdown-titleImage-container'>
                    <span>HABLEMOS</span>

                    <img src="icons/arrow-green.svg" alt="Flecha indicadora que al hacer click en el boton hay más opciones" />
                </div>

                <div className='dropdownMenu'>
                    <a href="https://wa.me/543426124730" target="_blank" rel="noopener noreferrer">
                        <img src="icons/whatsapp-green.svg" alt="Imagen del logo de whatsapp" />
                        <span>WhatsApp</span>
                    </a>
                    <a href="https://www.linkedin.com/in/mariel-aranda-983099108/" target="_blank" rel="noopener noreferrer">
                        <img src="icons/linkedin-green.svg" alt="Imagen del logo de linkedin" />
                        <span>LinkedIn</span>
                    </a>
                    <a href="">
                        <img src="icons/twitter-green.svg" alt="Imagen del logo de twitter" />
                        <span>Twitter</span>
                    </a>
                    <a href="#contactSection">
                        <img src="icons/email-green.svg" alt="Imagen del logo de un sobre, simbolizando casilla de correo" />
                        <span>Email</span>
                    </a>
                </div>
            </div>
        </header>
    );
}