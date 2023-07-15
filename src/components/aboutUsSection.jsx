import { Title, Text } from "@mantine/core";

export function AboutUsSection() {
    return (
        <main className="aboutUsSection-container">
            <Title order={1} size="32px" fw="900" ta='center' c='#085db2'>
                Quienes Somos
            </Title>

            <section className="aboutUsSection-textImage">
                <Text fz="md" fw="600">
                    Lorem ipsum dolor sit
                    amet consectetur adipisicing elit.
                    Assumenda necessitatibus voluptate
                    beatae dolorum voluptas. Accusamus
                    quibusdam ipsam perspiciatis? Incidunt
                    exercitationem, eum soluta est reprehenderit
                    facere dolore impedit distinctio quo quam!
                </Text>

                <img src="images/DMVA/DMVA-1.jpg" alt="La Doctora Mariel Viviana Aranda sentada ante una mesa sonriendo a la cámara" />
            </section>
        </main>
    )
}