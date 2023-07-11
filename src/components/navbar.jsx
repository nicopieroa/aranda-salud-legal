import { useDisclosure } from '@mantine/hooks';
import { Burger, Button, Drawer } from '@mantine/core';

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
                    <a href="">Quiénes somos</a>
                    <a href="">Nuestros servicios</a>

                    <Button radius="md" size="md" uppercase>
                        BUTTON
                    </Button>
                </aside>
            </Drawer>
        )
    }

    return (
        <>
            <nav className='navbar'>
                <img
                    src="images/logo-favIcon.png"
                    alt="Logotipo de la empresa Aranda Salud Legal"
                    className='logo' />

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