import { Title, Button } from '@mantine/core';
import { Link } from 'wouter'

export function ServicesLittleSection() {
    return (
        <section className="servicesSection">
            <Title order={2} size="32px" color="#085db2">Nuestros Servicios</Title>

            <div className="services-textsContainer">
                <Title order={3} size="16px" fw="400" color='#7b7e80' fs="italic">
                    Nos especializamos en brindar soluciones legales en salud.
                </Title>
                <Title order={3} size="16px" fw="400" color='#7b7e80' fs="italic">
                    Somos un equipo de profesionales que asesoramos a empresas del
                    sector de la salud.
                </Title>
            </div>

            <div className="services-cardsContainer">

                <div className="services-cards services-cards-blue">
                    <img src="icons/business.svg" alt="Maletín" />

                    <div className="services-cardsTexts">
                        <Title order={4} size="20px">Empresas</Title>

                        <ul>
                            <li>Creación de Obras Sociales</li>
                            <li>Cumplimiento Normativo y Regulatorio</li>
                        </ul>
                    </div>
                </div>

                <div className="services-cards services-cards-blue">
                    <img src="icons/deal.svg" alt="Manos entrelazadas" />

                    <div className="services-cardsTexts">
                        <Title order={4} size="20px">Compromiso</Title>

                        <ul>
                            <li>Comprometidos en brindar un serivicio de calidad</li>
                            <li>Tus derechos protegidos y tu negocio en regla alcanzando tus objetivos</li>
                        </ul>
                    </div>
                </div>
            </div>

            <Link href='/nuestros-servicios'>
                <a>
                    <Button radius="md" h="48px" size="20px" uppercase fullWidth>
                        SABER MÁS
                    </Button>
                </a>
            </Link>
        </section >
    )
}