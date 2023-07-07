import { Card, Image, Title, Text, Badge, Button, Group } from '@mantine/core';

export function Cards() {
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder className='newsCard'>
            <Card.Section>
                <Image
                    src="images/newsImgTesting.jpg"
                    height={160}
                    alt="Norway"
                />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
                <Title order={4} size="h4" weight={500}>Reglamentación De La Ley 27553</Title>

                <Badge size='md' fz="xs" pt="xs" pb="xs" fw="600" fullWidth bg="#1ea9514f" className='newsCard-date'>
                    Ago 2020
                </Badge>
            </Group>

            <Text fz="sm" fw={300} c="dimmed" className='textNewsCard'>
                En el mes de Agosto del año 2020
                se sancionó la ley 27.553 cuyo objeto fue
                habilitar el uso plataformas de teleasistencia en
                salud y de la receta electrónica o digital en todo
                el territorio nacional para los profesionales médicos,
                odontólogos y otros profesionales sanitarios legalmente
                facultados a prescribir, en los respectivos ámbitos de
                asistencia sanitaria y atención farmacéutica pública y privada.
            </Text>

            <Button uppercase fz="xs" h="xl" fullWidth mt="md" fw="600" radius="lg" bg="#085db273">
                VER MÁS
            </Button>
        </Card >
    );
}