import { Footer } from "@widgets/Footer";
import { Header } from "@widgets/Header";
import { Hero } from "@widgets/Hero";
import { Element } from 'react-scroll';

import Bg from "@shared/assets/dostavka.jpg";
import { ReadyToCollaborate } from "@widgets/ReadyToCollaborate";

export function DostavkaPage() {
    return (<>
        <Header />
        <Hero
            title="Карго доставка из Китая"
            subtitle="Ищете надежную карго-доставку из Китая? Мы обеспечим быструю и безопасную доставку вашего груза прямо к вашему порогу. Полный цикл услуг — от оформления документов до таможенного оформления и доставки. С нами ваш товар прибудет вовремя и в целости!"
            backgroundImage={Bg}
        />
        <Element name="leave_a_request">
            <ReadyToCollaborate />
        </Element>
        <Footer />
    </>)
}