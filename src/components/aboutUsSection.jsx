import dmva1 from '../assets/images/DMVA/DMVA-1.jpg'

export function AboutUsSection() {
    return (
        <main className="w-full py-20 px-3 mt-20 flex flex-col justify-center items-center gap-y-15 sm500:px-12 smMin:px-20 lgMin:px-40 lg:px-56 xl:px-64 xxl:px-80 xxxl:px-96">
            <h1 className="text-blue-700 text-3xl font-bold lgMin:text-4xl xl:text-5xl">
                Quienes Somos
            </h1>

            <section className="text-center flex items-center gap-y-12 flex-wrap">
                <p className='text-base'>
                    Aranda Salud Legal es una firma especializada principalmente en la representación Institucional de empresas y organizaciones que se dedican a prestar Servicio de
                    Salud con la finalidad de brindar a sus dirigentes asesoramiento integral. Abordamos todos los aspectos institucionales con el objetivo que nuestros representados
                    logren optimizar la prestación del servicio y alcanzar los stándares más altos de calidad y seguridad en la actividad diaria.
                </p>

                <img src={dmva1} alt="La Doctora Mariel Viviana Aranda sentada ante una mesa sonriendo a la cámara" className="w-full rounded" />
            </section>
        </main>
    )
}