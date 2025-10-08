import { Footer } from "@widgets/Footer";
import { Header } from "@widgets/Header";
import { Hero } from "@widgets/Hero";
import { Element, animateScroll as scroll } from 'react-scroll';

import Bg from "@shared/assets/rezka.jpg";
import { ReadyToCollaborate } from "@widgets/ReadyToCollaborate";
import { useEffect } from "react";

export function RezkaPage() {
    useEffect(() => {
        scroll.scrollToTop()
    }, [])

    return (<>
        <Header />
        <Hero
            title="Плазменная резка металла"
            subtitle="Ищете точную и быструю резку металла? Мы предлагаем современное оборудование и профессиональный подход, что позволяет выполнять сложные заказы любой сложности с высокой точностью и минимальными сроками. Идеально подходит для производства, строительства, ремонта и индивидуальных проектов."
            backgroundImage={Bg}
        />
        <Element name="leave_a_request">
            <ReadyToCollaborate />
        </Element>
        <Footer />
    </>)
}