import { Carousel } from '@mantine/carousel';
import { Cards } from './newsCard';
import { Title } from '@mantine/core';

export function Main() {

    return (
        <main className='main'>
            <Title order={2} size="h2" color="#ffffff">Noticias</Title>

            <Carousel
                slideSize="80%"
                height="auto"
                align="center"
                slideGap="md"
                controlsOffset="xs"
                controlSize={32}
                dragFree
                maw="100%"
            >
                <Carousel.Slide><Cards /></Carousel.Slide>
                <Carousel.Slide><Cards /></Carousel.Slide>
                <Carousel.Slide><Cards /></Carousel.Slide>
            </Carousel>
        </main>
    )
}