import articles from '../assets/articles-data.json'

import { Carousel } from '@mantine/carousel';
import { Cards } from './newsCard';
import { Title } from '@mantine/core';

export function NewsSection() {
    return (
        <section className='w-full py-20 px-3  bg-blue-600 flex flex-col justify-center items-center gap-y-15'>
            <Title order={2} size="32px" color="#ffffff">Noticias</Title>

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
                {articles.map((article) =>
                    <Carousel.Slide key={article.id}>
                        <Cards article={article} />
                    </Carousel.Slide>
                )}
            </Carousel>
        </section>
    )
}