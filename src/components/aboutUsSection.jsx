import dmva1 from '../assets/images/DMVA/DMVA-1.jpg'

export function AboutUsSection() {
    return (
        <main className="w-full py-20 px-3 mt-20 flex flex-col justify-center items-center gap-y-15 sm500:px-12 smMin:px-20 lgMin:px-40 lg:px-56 xl:px-64 xxl:px-80 xxxl:px-96">
            <h1 className="text-blue-700 text-3xl font-bold lgMin:text-4xl xl:text-5xl">
                Quienes Somos
            </h1>

            <section className="text-center flex items-center gap-y-12 flex-wrap">
                <p className='text-base'>
                    Lorem ipsum dolor sit
                    amet consectetur adipisicing elit.
                    Assumenda necessitatibus voluptate
                    beatae dolorum voluptas. Accusamus
                    quibusdam ipsam perspiciatis? Incidunt
                    exercitationem, eum soluta est reprehenderit
                    facere dolore impedit distinctio quo quam!
                </p>

                <img src={dmva1} alt="La Doctora Mariel Viviana Aranda sentada ante una mesa sonriendo a la cámara" className="w-full rounded" />
            </section>
        </main>
    )
}