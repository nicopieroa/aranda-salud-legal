import { Header } from "../components/header";
import { NewsBigSection } from "../components/newsBigSection";
import { Footer } from "../components/footer";

export function NewsPage({ id }) {
    return (
        <div className="newsPage">
            <Header />
            <NewsBigSection id={id} />
            <Footer />
        </div>
    )
}