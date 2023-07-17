import { Navbar } from '../components/navbar'
import { Header } from '../components/header'
import { ServicesLittleSection } from '../components/servicesLittleSection'
import { NewsSection } from '../components/newsSection'
import { ContactSection } from '../components/contactSection'
import { Footer } from '../components/footer'

export function HomePage() {
    return (
        <div className='homePage'>
            <Navbar />
            <Header />
            <ServicesLittleSection />
            <NewsSection />
            <ContactSection />
            <Footer />
        </div>
    )
}