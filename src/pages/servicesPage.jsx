import { Header } from "../components/header";
import { ServicesBigSection } from "../components/servicesBigSection";
import { Footer } from "../components/footer";

export function ServicesPage() {
    return (
        <div className="servicesPage">
            <Header />
            <ServicesBigSection />
            <Footer />
        </div>
    )
}