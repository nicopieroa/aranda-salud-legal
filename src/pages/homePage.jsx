import { Navbar } from '../components/navbar'
import { Header } from '../components/header'
import { ServicesSection } from '../components/servicesLittleSection'
import { NewsSection } from '../components/newsSection'
import { ContactSection } from '../components/contactSection'
import { Footer } from '../components/footer'

export function HomePage() {
    return (
        <div className='homePage'>
            <Navbar />
            <Header />
            <ServicesSection />
            <NewsSection />
            <ContactSection />
            <Footer />
        </div>
    )
}