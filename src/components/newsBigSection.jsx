import articles from '../assets/articles-data.json'
import { Title, Text } from '@mantine/core';

export function NewsBigSection({ id }) {
    const article = articles.find(item => item.id === Number(id))

    return (
        <>
            {
                article ?
                    <main className='newsBigSection-container'>
                        <div className='newsBigSection-header'>
                            <Title order={1} size="20px">
                                {article.title}
                            </Title>

                            <Text fz="16px">
                                {article.description}
                            </Text>

                            <Text c="dimmed">{article.date}</Text>
                        </div>

                        <img src={article.image.url} alt={article.image.alt} />

                        <div className='newsBigSection-content'>
                            {article.content.map((item) => {
                                if (item.type === 'p') {
                                    return <p key={item.id}>{item.text}</p>;
                                } else if (item.type === 'image') {
                                    return (
                                        <div key={item.id}>
                                            <img src={item.url} alt={item.alt} />
                                        </div>
                                    );
                                } else if (item.type === 'ul') {
                                    return (
                                        <ul key={item.id}>
                                            {item.listItem.map((listItem) => (
                                                <li key={listItem.id}>{listItem.content}</li>
                                            ))}
                                        </ul>
                                    );
                                } else {
                                    return null;
                                }
                            })}
                        </div>
                    </main> :
                    null
            }
        </>
    )
}