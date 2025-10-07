import { Footer } from "@widgets/Footer";
import { Header } from "@widgets/Header";
import { Hero } from "@widgets/Hero";
import { Element } from 'react-scroll';

import Bg from "@shared/assets/traktor.jpg";
import { ReadyToCollaborate } from "@widgets/ReadyToCollaborate";

export function SvarkaPage() {
    return (<>
        <Header />
        <Hero
            title="Ремонт спецтехники"
            subtitle="Предлагаем профессиональный ремонт спецтехники, который восстановит ее работоспособность и продлит срок службы! Быстро, качественно и по доступным ценам — доверяйте ремонт вашей спецтехники профессионалам!"
            backgroundImage={Bg}
        />
        <Element name="leave_a_request">
            <ReadyToCollaborate />
        </Element>
        <Footer />
    </>)
}