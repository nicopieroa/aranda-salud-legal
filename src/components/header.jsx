import { Burger, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { LogoBlue } from './logoBlue';
import whatsappLogo from '../assets/icons/whatsapp.svg'
import linkiedinLogo from '../assets/icons/linkedin.svg'
// import xLogo from '../assets/icons/x.svg'
import emailLogo from '../assets/icons/email.svg'

import { Link } from "wouter"

import { useEffect, useState } from 'react';

export function Header() {
    const [opened, { toggle }] = useDisclosure(false);
    const label = opened ? 'Close navigation' : 'Open navigation';

    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setIsNavbarVisible(currentScrollPos <= prevScrollPos
                || currentScrollPos === 0);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <header>
            <nav className={`w-full flex justify-between items-center py-3 px-3 fixed top-0 left-0 z-10 shadow-[0_12px_20px_rgba(0,0,0,0.1)] transition-opacity duration-300 bg-white 
            ${isNavbarVisible ? 'opacity-100 visible' : 'opacity-0 invisible'} lg:px-12 xl:px-24 xxl:px-48 xxxl:px-72`}>
                <Link href='/'>
                    <a>
                        <LogoBlue />
                    </a>
                </Link>

                <Burger opened={opened} onClick={toggle} aria-label={label}
                    size="48px" color="#085db2" className="mdMin:hidden" />

                <div className='hidden mdMin:flex items-center gap-x-8'>
                    <div className='flex items-center gap-x-4 text-blue-600 text-base font-medium'>
                        <Link href='/quienes-somos'>
                            <a className='hover:underline hover:decoration-blue-600'>
                                Quiénes somos
                            </a>
                        </Link>
                        <Link href='/nuestros-servicios'>
                            <a className='hover:underline hover:decoration-blue-600'>
                                Nuestros servicios
                            </a>
                        </Link>
                    </div>

                    <div className="flex items-center justify-center gap-x-4 socialMedia-icons bg-blue-600 py-2 px-3 rounded">
                        <a href="https://wa.me/543426124730" target="_blank" rel="noopener noreferrer" className='w-6 transition-all duration-200'>
                            <img src={whatsappLogo} alt="Imagen del logo de whatsapp" className='w-full' />
                        </a>
                        <a href="https://www.linkedin.com/in/mariel-aranda-983099108/" target="_blank" rel="noopener noreferrer" className='w-6 transition-all duration-200'>
                            <img src={linkiedinLogo} alt="Imagen del logo de linkedin" className='w-full' />
                        </a>
                        {/* <a href="" className='w-9 transition-all duration-200'>
                        <img src={xLogo} alt="Imagen del logo de X" className='w-full' />
                    </a> */}
                        <a href="/#contactSection" className='w-6 transition-all duration-200'>
                            <img src={emailLogo} alt="Imagen del logo de un sobre, simbolizando casilla de correo" className='w-full' />
                        </a>
                    </div>
                </div>
            </nav>

            <Drawer opened={opened} onClose={toggle} position="right" size="272px" className="mdMin:hidden">
                <aside className="w-full bg-blue-700 h-full grid gap-y-20 place-content-center text-white text-center">
                    {opened ? (<Burger opened={opened} onClick={toggle}
                        aria-label={label} size="48px" color="#ffffff"
                        className="absolute top-3 right-7" />) : null}

                    <section className='grid gap-y-6 place-content-center'>
                        <Link href='/quienes-somos'>
                            <a className='text-xl hover:underline hover:decoration-white'>
                                Quiénes somos
                            </a>
                        </Link>
                        <Link href='/nuestros-servicios'>
                            <a className='text-xl hover:underline hover:decoration-white'>
                                Nuestros servicios
                            </a>
                        </Link>
                    </section>

                    <section className="flex flex-col justify-center items-center gap-y-6">
                        <h3 className='text-xl font-medium'>Nos encuentras en:</h3>

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
                </aside>
            </Drawer>
        </header>
    )
}