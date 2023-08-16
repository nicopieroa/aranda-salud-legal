import { Header } from '../components/header'
import { PresentationSection } from '../components/presentationSection'
import { ServicesLittleSection } from '../components/servicesLittleSection'
import { NewsSection } from '../components/newsSection'
import { ContactSection } from '../components/contactSection'
import { Footer } from '../components/footer'

export function HomePage() {
    return (
        <div className='homePage max-w-screen'>
            <Header />
            <PresentationSection />
            <ServicesLittleSection />
            <NewsSection />
            <ContactSection />
            <Footer />
        </div>
    )
}