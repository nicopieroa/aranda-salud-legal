import { Carousel } from '@mantine/carousel';
import { Cards } from './newsCard';

export function Main() {

    return (
        <main className='main'>
            <h2>Noticias</h2>

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