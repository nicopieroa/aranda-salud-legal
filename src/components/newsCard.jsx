import { Card, Image, Title, Text, Badge, Button, Group } from '@mantine/core';

export function Cards({ article }) {

    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder className='newsCard'>
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

                <Badge size='md' fz="xs" pt="xs" pb="xs" fw="600" fullWidth bg="#1ea9514f" className='newsCard-date'>
                    {article.date}
                </Badge>
            </Group>

            <Text fz="sm" fw={300} c="dimmed" className='textNewsCard'>
                {article.description}
            </Text>

            <Button uppercase fz="xs" h="xl" fullWidth mt="md" fw="600" radius="lg" bg="#085db273">
                VER MÁS
            </Button>
        </Card >
    );
}