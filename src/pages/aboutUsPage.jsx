import { Header } from "../components/header";
import { AboutUsSection } from "../components/aboutUsSection";
import { Footer } from "../components/footer";

export function AboutUsPage() {
    return (
        <div className="aboutUsPage">
            <Header />
            <AboutUsSection />
            <Footer />
        </div>
    )
}