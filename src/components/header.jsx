import { Button } from '@mantine/core';
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

            <a href="#contact">
                <Button radius="md" size="md" fw="800" bg="#1ea9514d" uppercase fullWidth>
                    HABLEMOS
                </Button>
            </a>
        </header>
    );
}