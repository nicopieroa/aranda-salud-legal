import { Title, Button } from '@mantine/core';
import { Link } from 'wouter'

import businessImage from '../assets/icons/business.svg'
import dealImage from '../assets/icons/deal.svg'

export function ServicesLittleSection() {
    return (
        <section className="w-full py-20 px-3 flex flex-col items-center justify-center text-center gap-y-15 
        lg:px-12 xl:px-24 xxl:px-48 xxxl:px-72">
            <h2 className='text-blue-600 font-bold text-3xl smMin:text-4xl lg:text-5xl'>
                Nuestros Servicios
            </h2>

            <div className="flex flex-col gap-y-4 text-gray-500 text-lg italic font-light smMin:text-xl sm500:w-10/12 lgMin:w-8/12">
                <h3>
                    Nos especializamos en brindar soluciones legales en salud.
                </h3>
                <h3>
                    Somos un equipo de profesionales que asesoramos a empresas del sector de la salud.
                </h3>
            </div>

            <div className="flex flex-col items-center justify-center gap-y-10 sm500:w-10/12 lgMin:w-8/12 xl:w-7/12">
                <div className="bg-blue-600 w-full rounded-xl p-6 flex items-center justify-center gap-x-20 text-white
                smMin:p-10">
                    <img src={businessImage} alt="Maletín" className='w-3/12 sm500:w-1/5' />

                    <div className="flex flex-col items-center justify-center gap-y-4">
                        <Title order={4} size="20px" className='smMin:text-2xl mdMin:text-3xl'>
                            Empresas
                        </Title>

                        <ul className='text-left text-sm leading-5 list-disc list-inside font-semibold smMin:text-base mdMin:text-lg'>
                            <li>Creación de Obras Sociales</li>
                            <li>Cumplimiento Normativo y Regulatorio</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-blue-600 w-full rounded-xl p-6 flex items-center justify-center gap-x-20 text-white
                smMin:p-10">
                    <img src={dealImage} alt="Maletín" className='w-3/12 sm500:w-1/5' />

                    <div className="flex flex-col items-center justify-center gap-y-4">
                        <Title order={4} size="20px" className='smMin:text-2xl mdMin:text-3xl'>
                            Compromiso
                        </Title>

                        <ul className='text-left text-sm leading-5 list-disc list-inside font-semibold smMin:text-base mdMin:text-lg'>
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