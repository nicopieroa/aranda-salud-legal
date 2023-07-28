import { useDisclosure } from '@mantine/hooks';
import { Burger, Drawer } from '@mantine/core';

import { Link } from "wouter"

import { useEffect, useState } from 'react';

export function Navbar() {
    const [opened, { toggle }] = useDisclosure(false);
    const label = opened ? 'Close navigation' : 'Open navigation';

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;

        setVisible(prevScrollPos > currentScrollPos);
        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [prevScrollPos, visible]);


    function Sidebar() {
        return (
            <Drawer
                opened={opened}
                onClose={toggle}
                position="right"
                size='75%'
                color='black'
                variant='green'>
                <aside className="sidebar">
                    {opened ? <Burger
                        opened={opened}
                        onClick={toggle}
                        aria-label={label}
                        size="lg"
                        color=' #ffffff'
                        className='burgerButton-sidebar' />
                        : <Burger
                            opened={opened}
                            onClick={toggle}
                            aria-label={label}
                            size="lg"
                            color='#085db2'
                            className='burgerButton' />}

                    <Link href='/quienes-somos'><a>Quiénes somos</a></Link>
                    <Link href='/nuestros-servicios'><a>Nuestros servicios</a></Link>
                </aside>
            </Drawer>
        )
    }

    return (
        <>
            <nav className={`navbar ${visible ? 'navbar-visible' : 'navbar-hidden'}`}>
                <Link href='/'>
                    <a>
                        <img
                            src="/public/images/logo-favIcon.png"
                            alt="Logotipo de la empresa Aranda Salud Legal"
                            className='logo' />
                    </a>
                </Link>

                {opened ? <Burger
                    opened={opened}
                    onClick={toggle}
                    aria-label={label}
                    size="lg"
                    color=' #ffffff'
                    className='burgerButton' />
                    : <Burger
                        opened={opened}
                        onClick={toggle}
                        aria-label={label}
                        size="lg"
                        color='#085db2'
                        className='burgerButton' />}

            </nav>

            {opened ? <Sidebar /> : null}

        </>
    )
}