import articles from '../assets/articles-data.json'
import { Avatar } from '@mantine/core';

import dmva1 from '../assets/images/DMVA/DMVA-1.jpg'

export function NewsBigSection({ id }) {
    const article = articles.find(item => item.id === Number(id))

    return (
        <>
            {
                article ?
                    <main className='py-20 px-3 mt-20 flex flex-col gap-y-15 sm500:px-12 smMin:px-20 lgMin:px-40 lg:px-56 xl:px-64 xxl:px-80 xxxl:px-96'>
                        <section className='flex flex-col gap-y-4'>
                            <h1 className="text-2xl font-bold lg:text-3xl">
                                {article.title}
                            </h1>

                            <p className='text-base'>
                                {article.description}
                            </p>

                            <p className='text-gray-400 font-semibold text-base'>
                                {article.date}
                            </p>

                            <div className='flex items-center gap-x-5'>
                                <Avatar radius="100%" size="80px" src={dmva1} />

                                <h3 className='text-gray-400 font-semibold text-base italic'>
                                    {article.author}
                                </h3>
                            </div>
                        </section>

                        <img src={article.image.url} alt={article.image.alt} className='rounded' />

                        <section className='flex flex-col gap-y-8 text-base'>
                            {article.content.map((item) => {
                                if (item.type === 'p') {
                                    return <p key={item.id}>{item.content}</p>;
                                } else if (item.type === 'image') {
                                    return (
                                        <div key={item.id}>
                                            <img src={item.url} alt={item.alt} />
                                        </div>
                                    );
                                } else if (item.type === 'ul') {
                                    return (
                                        <ul key={item.id} className='flex flex-col gap-y-4 list-inside'>
                                            {item.content}
                                            {item.li.map((listItem) => (
                                                <li key={listItem.id}>{listItem.content}</li>
                                            ))}
                                        </ul>
                                    );
                                } else if (item.type === 'h2') {
                                    return <h2 key={item.id} className='text-2xl'>
                                        {item.content}
                                    </h2>
                                } else if (item.type === 'h3') {
                                    return <h3 key={item.id} className='text-xl'>
                                        {item.content}
                                    </h3>
                                } else if (item.type === 'h4') {
                                    return <h4 key={item.id}>{item.content}</h4>
                                } else if (item.type === 'h5') {
                                    return <h5 key={item.id}>{item.content}</h5>
                                } else if (item.type === 'h6') {
                                    return <h6 key={item.id}>{item.content}</h6>
                                } else {
                                    return null;
                                }
                            })}
                        </section>

                        <section className='flex flex-col gap-y-5'>
                            {article.references.map((item) => (
                                <div key={item.id} className='flex items-center flex-wrap gap-x-2'>
                                    <p className='text-gray-500 font-medium'>
                                        {item.title}
                                    </p>
                                    <a href={item.url} className='text-blue-800 italic hover:underline hover:decoration-800'>
                                        {item.content}
                                    </a>
                                </div>
                            ))}
                        </section>
                    </main> :
                    null
            }
        </>
    )
}