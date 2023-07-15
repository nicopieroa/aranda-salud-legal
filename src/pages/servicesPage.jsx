import { Navbar } from "../components/navbar";
import { ServicesBigSection } from "../components/servicesBigSection";
import { Footer } from "../components/footer";

export function ServicesPage() {
    return (
        <div className="servicesPage">
            <Navbar />
            <ServicesBigSection />
            <Footer />
        </div>
    )
}