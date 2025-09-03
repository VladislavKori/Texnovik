import { Footer } from "@widgets/Footer";
import { Header } from "@widgets/Header";
import { Hero } from "@widgets/Hero";

import Bg from "@shared/assets/traktor.jpg";

export function SvarkaPage() {
    return (<>
            <Header />
            <Hero 
                title="Ремонт спецтехники"
                subtitle="Предлагаем профессиональный ремонт спецтехники, который восстановит ее работоспособность и продлит срок службы! Быстро, качественно и по доступным ценам — доверяйте ремонт вашей спецтехники профессионалам!"
                backgroundImage={Bg}
            />
            <Footer />
    </>)
}