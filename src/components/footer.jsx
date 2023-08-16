import { Title } from '@mantine/core';
import { Link } from 'wouter'

import { LogoWhite } from './logoWhite';
import whatsappLogo from '../assets/icons/whatsapp.svg'
import linkiedinLogo from '../assets/icons/linkedin.svg'
// import xLogo from '../assets/icons/x.svg'
import emailLogo from '../assets/icons/email.svg'


export function Footer() {
    return (
        <footer className="bg-blue-900 py-20 px-3 flex flex-col items-center justify-center text-white gap-y-15">
            <LogoWhite />

            <Title order={3} size="h3" fw={200} fs="italic">
                Aranda Salud Legal
            </Title>

            <section className="flex flex-col justify-center items-center gap-y-5">
                <Link href='/quienes-somos'>
                    <a className='hover:font-semibold hover:underline'>
                        Quiénes somos
                    </a>
                </Link>
                <Link href='/nuestros-servicios'>
                    <a className='hover:font-semibold hover:underline'>
                        Nuestros servicios
                    </a>
                </Link>
            </section>

            <section className="flex flex-col justify-center items-center gap-y-5">
                <Title order={3} size="h3" fw={400}>Nos encuentras en:</Title>

                <div className="flex items-center justify-center gap-x-5 socialMedia-icons">
                    <a href="https://wa.me/543426124730" target="_blank" rel="noopener noreferrer" className='w-9 transition-all duration-200'>
                        <img src={whatsappLogo} alt="Imagen del logo de whatsapp" className='w-full' />
                    </a>
                    <a href="https://www.linkedin.com/in/mariel-aranda-983099108/" target="_blank" rel="noopener noreferrer" className='w-9 transition-all duration-200'>
                        <img src={linkiedinLogo} alt="Imagen del logo de linkedin" className='w-full' />
                    </a>
                    {/* <a href="" className='w-9 transition-all duration-200'>
                        <img src={xLogo} alt="Imagen del logo de X" className='w-full' />
                    </a> */}
                    <a href="/#contactSection" className='w-9 transition-all duration-200'>
                        <img src={emailLogo} alt="Imagen del logo de un sobre, simbolizando casilla de correo" className='w-full' />
                    </a>
                </div>
            </section>
        </footer>
    )
}