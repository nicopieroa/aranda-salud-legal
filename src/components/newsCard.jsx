import { Card, Image, Title, Text, Badge, Button, Group } from '@mantine/core';
import { Link } from 'wouter'

export function Cards({ article }) {

    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder className='newsCard lg:w-68'>
            <Card.Section>
                <Image
                    src={article.image.url}
                    height={160}
                    alt={article.image.alt}
                />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
                <Title order={3} size="16px" weight={500} className='titleNewsCard'>
                    {article.title}
                </Title>

                <Badge size='md' fz="xs" pt="xs" pb="xs" fw="600" fullWidth bg="#1ea9514f" className='text-green-600 cursor-default'>
                    {article.date}
                </Badge>
            </Group>

            <Text fz="sm" fw={300} c="dimmed" className='textNewsCard'>
                {article.description}
            </Text>

            <Link href={`/news/${article.id}`}>
                <a target="_blank" rel="noopener noreferrer">
                    <Button uppercase fz="xs" h="xl" fullWidth mt="md" fw="600" radius="lg" bg="#085db273" className='text-blue-700 border border-solid border-blue-700 hover:bg-blue-600 hover:text-white'>
                        VER MÁS
                    </Button>
                </a>
            </Link>
        </Card >
    );
}