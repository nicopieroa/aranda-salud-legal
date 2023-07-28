import articles from '../assets/articles-data.json'
import { Avatar, Title, Text } from '@mantine/core';

export function NewsBigSection({ id }) {
    const article = articles.find(item => item.id === Number(id))

    return (
        <>
            {
                article ?
                    <main className='newsBigSection-container'>
                        <section className='newsBigSection-header'>
                            <Title order={1} size="24px">
                                {article.title}
                            </Title>

                            <Text fz="16px">
                                {article.description}
                            </Text>

                            <Text c="dimmed">{article.date}</Text>

                            <div className='newsBigSection-header-avatarAuthor'>
                                <Avatar
                                    radius="100%"
                                    size="60px"
                                    src="/public/images/DMVA/DMVA-1.jpg" />

                                <Title order={3} size="16px" fw="400" c="#085db2" fs="italic">
                                    {article.author}
                                </Title>
                            </div>
                        </section>

                        <img src={article.image.url} alt={article.image.alt} className='newsBigSection-imageNews' />

                        <section className='newsBigSection-content'>
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
                                        <ul key={item.id}>
                                            {item.content}
                                            {item.li.map((listItem) => (
                                                <li key={listItem.id}>{listItem.content}</li>
                                            ))}
                                        </ul>
                                    );
                                } else if (item.type === 'h2') {
                                    return <h2 key={item.id}>{item.content}</h2>
                                } else if (item.type === 'h3') {
                                    return <h3 key={item.id}>{item.content}</h3>
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

                        <section className='newsBigSection-references'>
                            {article.references.map((item) => (
                                <div key={item.id} className='newsBigSection-references-content'>
                                    <p>{item.title}</p>
                                    <a href={item.url}>{item.content}</a>
                                </div>
                            ))}
                        </section>
                    </main> :
                    null
            }
        </>
    )
}