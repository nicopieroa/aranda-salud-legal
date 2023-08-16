import { Burger, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { LogoBlue } from './logoBlue';

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
            <nav className={`w-full flex justify-between items-center 
            py-3 px-3 fixed top-0 left-0 z-10 shadow-[0_12px_20px_rgba(0,0,0,0.1)] 
            transition-opacity duration-300 bg-white
            ${isNavbarVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <Link href='/'>
                    <a>
                        <LogoBlue />
                    </a>
                </Link>

                <Burger opened={opened} onClick={toggle} aria-label={label}
                    size="44px" color="#085db2" className="" />

            </nav>

            <Drawer opened={opened} onClose={toggle} position="right" size="272px"
                className="">
                <aside className="w-full bg-blue-700 h-full grid gap-y-10 
                place-content-center text-white text-center">
                    {opened ? (<Burger opened={opened} onClick={toggle}
                        aria-label={label} size="44px" color="#ffffff"
                        className="absolute top-3 right-7" />) : null}

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
                </aside>
            </Drawer>
        </header>
    )
}