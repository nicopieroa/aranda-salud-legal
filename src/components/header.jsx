import { Button } from '@mantine/core';

export function Header() {

    return (
        <header className="header">
            <div className="headerText">
                <h1>Aranda Salud Legal</h1>
                <h2>Firma especializada en asesoramiento legal en salud</h2>
            </div>

            <img src="ilustrations/4.svg" alt="" />

            <Button radius="md" size="md" uppercase>
                HABLEMOS
            </Button>
        </header>
    );
}