import { Title, Text } from '@mantine/core'

export function ServicesBigSection() {

    return (
        <main className="servicesBigSection-container">
            <Title order={1} size="32px" fw="900" ta='center' c='#085db2'>
                Nuestros Servicios
            </Title>

            <section className="servicesBigSection-textImage">
                <Text fz="md" fw="600">
                    Lorem ipsum dolor sit
                    amet consectetur adipisicing elit.
                    Assumenda necessitatibus voluptate
                    beatae dolorum voluptas. Accusamus
                    quibusdam ipsam perspiciatis? Incidunt
                    exercitationem, eum soluta est reprehenderit
                    facere dolore impedit distinctio quo quam!
                </Text>

                <img
                    src="images/DMVA/DMVA-2.jpg"
                    alt="La Doctora Mariel Viviana Aranda subrayando una línea de texto de un libro" />

                <div className="servicesBigSection-cards services-cards-blue">
                    <Title order={4} size="24px">Empresas</Title>

                    <div className='servicesBigSection-cards-titleText-container'>
                        <Title order={5} size="20px">
                            Asesoramiento en la Creación de Obras Sociales
                        </Title>

                        <Text fz="16px" fw="400">
                            Si eres una empresa que desea establecer una obra social,
                            te brindamos asesoramiento completo en todas las etapas
                            del proceso. Desde la estructuración legal hasta el
                            cumplimiento normativo, trabajamos contigo para asegurar
                            que tu obra social cumpla con los requisitos legales y
                            beneficie a tus empleados.
                        </Text>
                    </div>

                    <div className='servicesBigSection-cards-titleText-container'>
                        <Title order={5} size="20px">
                            Cumplimiento Normativo y Regulatorio
                        </Title>

                        <Text fz="16px" fw="400">
                            Nuestro equipo experto en regulaciones sanitarias te asiste
                            en el cumplimiento de las normativas y leyes del sector de
                            la salud. Te mantenemos actualizado(a) sobre los requisitos
                            legales y te ayudamos a evitar problemas legales que puedan
                            surgir en tu negocio.
                        </Text>
                    </div>
                </div>

                <div className="servicesBigSection-cards services-cards-blue">
                    <Title order={4} size="24px">Compromiso</Title>

                    <Text fz="16px" fw="400">
                        En Aranda Salud Legal, estamos comprometidos en proporcionar
                        un asesoramiento legal sólido y personalizado tanto para usuarios
                        individuales como para empresas en el campo de la salud. Nuestro
                        enfoque es garantizar que tus derechos estén protegidos, tu negocio
                        cumpla con las regulaciones y que alcances los mejores resultados
                        posibles.
                    </Text>
                </div>
            </section>
        </main >
    )
}