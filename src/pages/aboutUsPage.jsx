import { Navbar } from "../components/navbar";
import { AboutUsSection } from "../components/aboutUsSection";
import { Footer } from "../components/footer";

export function AboutUsPage() {
    return (
        <div className="aboutUsPage">
            <Navbar />
            <AboutUsSection />
            <Footer />
        </div>
    )
}