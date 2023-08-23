import articles from '../assets/articles-data.json'

import { Carousel } from '@mantine/carousel';
import { Cards } from './newsCard';

export function NewsSection() {
    return (
        <section className='w-full py-20 px-3  bg-blue-600 flex flex-col justify-center items-center gap-y-15 
        lg:px-12 xl:px-24 xxl:px-48 xxxl:px-72'>
            <h2 className='text-white text-3xl font-semibold smMin:text-4xl lg:text-5xl'>
                Noticias
            </h2>

            <Carousel slideSize="280px" height="auto" align="center" slideGap="md" controlsOffset="xs" controlSize={32} dragFree maw="100%" initialSlide={2}
                className='sm500:w-10/12 lgMin:w-8/12 lg:hidden'>
                {articles.map((article) =>
                    <Carousel.Slide key={article.id}>
                        <Cards article={article} />
                    </Carousel.Slide>
                )}
            </Carousel>

            <div className='hidden lg:flex w-full items-center justify-center gap-8 flex-wrap '>
                {articles.map((article) =>
                    <Cards key={article.id} article={article} />
                )}
            </div>
        </section>
    )
}