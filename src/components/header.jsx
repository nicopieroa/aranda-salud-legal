import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';

export function Header() {
    const autoplay = useRef(Autoplay({ delay: 2000 }));

    return (
        <Carousel
            align="start"
            slideGap="0px"
            controlsOffset="xs"
            controlSize={20}
            loop
            maw="100%"
            height="360px"
            mx="auto"
            nextControlIcon={<IconArrowRight size={16} />}
            previousControlIcon={<IconArrowLeft size={16} />}
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
        >
            <Carousel.Slide><img src='images/1.jpg' alt='' style={{ width: "100%", height: "100%", objectFit: "cover" }} />1</Carousel.Slide>
            <Carousel.Slide><img src='images/2.jpg' alt='' style={{ width: "100%", height: "100%", objectFit: "cover" }} />2</Carousel.Slide>
            <Carousel.Slide><img src='images/3.jpg' alt='' style={{ width: "100%", height: "100%", objectFit: "cover" }} />3</Carousel.Slide>
        </Carousel>
    );
}