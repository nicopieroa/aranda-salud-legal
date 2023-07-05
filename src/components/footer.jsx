export function Footer() {
    return (
        <footer className="footer">
            <img src="images/logo-favIcon-white-noBg.png" alt="Logotipo de la empresa Aranda Salud Legal" className='logo' />

            <section className="socialMedia-container">
                <h3>Nos encuentras en</h3>

                <div className="socialMedia-icons">
                    <a href=""><img src="icons/whatsapp.svg" alt="Imagen del logo de whatsapp" /></a>
                    <a href=""><img src="icons/linkedin.svg" alt="Imagen del logo de linkedin" /></a>
                    <a href=""><img src="icons/twitter.svg" alt="Imagen del logo de twitter" /></a>
                </div>
            </section>
        </footer>
    )
}