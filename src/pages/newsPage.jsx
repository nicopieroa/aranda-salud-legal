import { Navbar } from "../components/navbar";
import { NewsBigSection } from "../components/newsBigSection";
import { Footer } from "../components/footer";

export function NewsPage({ id }) {
    return (
        <div className="newsPage">
            <Navbar />
            <NewsBigSection id={id} />
            <Footer />
        </div>
    )
}