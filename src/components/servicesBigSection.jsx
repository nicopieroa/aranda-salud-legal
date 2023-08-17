import { Title, Text } from '@mantine/core'

import dmva2 from '../assets/images/DMVA/DMVA-2.jpg'

export function ServicesBigSection() {

    return (
        <main className="w-full py-20 px-3 mt-20 flex flex-col justify-center items-center gap-y-15">
            <Title order={1} size="32px" className='text-blue-700 text-center'>
                Nuestros Servicios
            </Title>

            <section className="text-center flex flex-col items-center gap-y-10">
                <Text fz="md" fw="600">
                    Lorem ipsum dolor sit
                    amet consectetur adipisicing elit.
                    Assumenda necessitatibus voluptate
                    beatae dolorum voluptas. Accusamus
                    quibusdam ipsam perspiciatis? Incidunt
                    exercitationem, eum soluta est reprehenderit
                    facere dolore impedit distinctio quo quam!
                </Text>

                <img src={dmva2} alt="La Doctora Mariel Viviana Aranda subrayando una línea de texto de un libro" className='w-full rounded' />

                <div className="w-full rounded p-5 flex flex-col items-center justify-center gap-y-10 bg-blue-600 text-white">
                    <Title order={4} size="24px">Empresas</Title>

                    <div className='flex flex-col gap-y-5'>
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

                    <div className='flex flex-col gap-y-5'>
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

                <div className="w-full rounded p-5 flex flex-col items-center justify-center gap-y-5 bg-blue-600 text-white">
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