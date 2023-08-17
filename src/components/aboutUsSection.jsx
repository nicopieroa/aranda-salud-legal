import { Title, Text } from "@mantine/core";

import dmva1 from '../assets/images/DMVA/DMVA-1.jpg'

export function AboutUsSection() {
    return (
        <main className="w-full py-20 px-3 mt-20 flex flex-col justify-center items-center gap-y-15">
            <Title order={1} size="32px" ta='center' className="text-blue-700">
                Quienes Somos
            </Title>

            <section className="text-center flex items-center gap-y-10 flex-wrap">
                <Text fz="md" fw="600">
                    Lorem ipsum dolor sit
                    amet consectetur adipisicing elit.
                    Assumenda necessitatibus voluptate
                    beatae dolorum voluptas. Accusamus
                    quibusdam ipsam perspiciatis? Incidunt
                    exercitationem, eum soluta est reprehenderit
                    facere dolore impedit distinctio quo quam!
                </Text>

                <img src={dmva1} alt="La Doctora Mariel Viviana Aranda sentada ante una mesa sonriendo a la cámara" className="w-full rounded" />
            </section>
        </main>
    )
}