import dmva2 from '../assets/images/DMVA/DMVA-2.jpg'

export function ServicesBigSection() {

    return (
        <main className="w-full py-20 px-3 mt-20 flex flex-col justify-center items-center gap-y-15 sm500:px-12 smMin:px-20 lgMin:px-40 lg:px-56 xl:px-64 xxl:px-80 xxxl:px-96">
            <h1 className="text-blue-700 text-3xl font-bold lgMin:text-4xl xl:text-5xl">
                Nuestros Servicios
            </h1>

            <section className="text-center flex flex-col items-center gap-y-10">
                <div className="flex flex-col gap-y-4 text-gray-500 text-lg italic font-light smMin:text-xl sm500:w-10/12 lgMin:w-8/12">
                    <h3>
                        Nos especializamos en brindar soluciones legales en salud.
                    </h3>
                    <h3>
                        Somos un equipo de profesionales que asesoramos a empresas del sector de la salud.
                    </h3>
                </div>

                <img src={dmva2} alt="La Doctora Mariel Viviana Aranda subrayando una línea de texto de un libro" className='w-full h-96 object-cover object-top rounded' />

                <div className="w-full rounded p-5 flex flex-col items-center justify-center gap-y-10 bg-blue-600 text-white">
                    <h2 className='text-2xl font-semibold'>
                        Empresas
                    </h2>

                    <div className='flex flex-col gap-y-5'>
                        <h3 className='text-xl font-medium'>
                            Asesoramiento en la Creación de Obras Sociales
                        </h3>

                        <p className='text-base'>
                            Si eres una empresa que desea establecer una obra social,
                            te brindamos asesoramiento completo en todas las etapas
                            del proceso. Desde la estructuración legal hasta el
                            cumplimiento normativo, trabajamos contigo para asegurar
                            que tu obra social cumpla con los requisitos legales y
                            beneficie a tus empleados.
                        </p>
                    </div>

                    <div className='flex flex-col gap-y-5'>
                        <h3 className='text-xl font-medium'>
                            Cumplimiento Normativo y Regulatorio
                        </h3>

                        <p className='text-base'>
                            Nuestro equipo experto en regulaciones sanitarias te asiste
                            en el cumplimiento de las normativas y leyes del sector de
                            la salud. Te mantenemos actualizado(a) sobre los requisitos
                            legales y te ayudamos a evitar problemas legales que puedan
                            surgir en tu negocio.
                        </p>
                    </div>
                </div>

                <div className="w-full rounded p-5 flex flex-col items-center justify-center gap-y-5 bg-blue-600 text-white">
                    <h2 className='text-2xl font-semibold'>
                        Compromiso
                    </h2>

                    <p className='text-base'>
                        En Aranda Salud Legal, estamos comprometidos en proporcionar
                        un asesoramiento legal sólido y personalizado tanto para usuarios
                        individuales como para empresas en el campo de la salud. Nuestro
                        enfoque es garantizar que tus derechos estén protegidos, tu negocio
                        cumpla con las regulaciones y que alcances los mejores resultados
                        posibles.
                    </p>
                </div>
            </section>
        </main >
    )
}