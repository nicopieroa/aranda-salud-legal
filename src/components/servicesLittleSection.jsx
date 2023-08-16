import { Title, Button } from '@mantine/core';
import { Link } from 'wouter'

import businessImage from '../assets/icons/business.svg'
import dealImage from '../assets/icons/deal.svg'

export function ServicesLittleSection() {
    return (
        <section className="w-full py-20 px-3 flex flex-col items-center justify-center text-center gap-y-15">
            <Title order={2} size="32px" className='text-blue-600 font-bold'>
                Nuestros Servicios
            </Title>

            <div className="flex flex-col gap-y-6">
                <Title order={3} size="16px" fw="400" fs="italic" className='text-gray-500'>
                    Nos especializamos en brindar soluciones legales en salud.
                </Title>
                <Title order={3} size="16px" fw="400" fs="italic" className='text-gray-500'>
                    Somos un equipo de profesionales que asesoramos a empresas del
                    sector de la salud.
                </Title>
            </div>

            <div className="flex flex-col items-center justify-center gap-y-10">
                <div className="bg-blue-600 w-full rounded-xl p-5 flex items-center justify-center gap-x-8 text-white">
                    <img src={businessImage} alt="Maletín" className='w-15' />

                    <div className="flex flex-col items-center justify-center gap-y-4">
                        <Title order={4} size="20px">Empresas</Title>

                        <ul className='text-left text-sm font-semibold'>
                            <li>Creación de Obras Sociales</li>
                            <li>Cumplimiento Normativo y Regulatorio</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-blue-600 w-full rounded-xl p-5 flex items-center justify-center gap-x-8 text-white">
                    <img src={dealImage} alt="Manos entrelazadas" className='w-15' />

                    <div className="flex flex-col items-center justify-center gap-y-4">
                        <Title order={4} size="20px">Compromiso</Title>

                        <ul className='text-left text-sm font-semibold'>
                            <li>Comprometidos en brindar un serivicio de calidad</li>
                            <li>Tus derechos protegidos y tu negocio en regla alcanzando tus objetivos</li>
                        </ul>
                    </div>
                </div>
            </div>

            <Link href='/nuestros-servicios'>
                <a>
                    <Button radius="md" size="xl" className='bg-blue-600 hover:bg-blue-700'>
                        SABER MÁS
                    </Button>
                </a>
            </Link>
        </section >
    )
}