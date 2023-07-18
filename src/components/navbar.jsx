import { useDisclosure } from '@mantine/hooks';
import { Burger, Drawer } from '@mantine/core';

import { Link } from "wouter"

export function Navbar() {
    const [opened, { toggle }] = useDisclosure(false);

    const label = opened ? 'Close navigation' : 'Open navigation';

    function Sidebar() {
        return (
            <Drawer
                opened={opened}
                onClose={toggle}
                position="right"
                size='75%'
                color='black'
                variant='green'
                transitionProps={{
                    transition: 'fade',
                    duration: 300,
                    timingFunction: 'linear'
                }}>
                <aside className="sidebar">
                    <Link href='/quienes-somos'><a>Quiénes somos</a></Link>
                    <Link href='/nuestros-servicios'><a>Nuestros servicios</a></Link>
                </aside>
            </Drawer>
        )
    }

    return (
        <>
            <nav className='navbar'>
                <Link href='/'>
                    <a>
                        <img
                            src="images/logo-favIcon.png"
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