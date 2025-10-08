import { useEffect } from "react";
import { Footer } from "@widgets/Footer";
import { Header } from "@widgets/Header";
import { Hero } from "@widgets/Hero";
import { Element, animateScroll as scroll } from 'react-scroll';

import Bg from "@shared/assets/uzbek.jpg";
import { ReadyToCollaborate } from "@widgets/ReadyToCollaborate";

export function IndustrialInstallationPage() {
    useEffect(() => {
        scroll.scrollToTop()
    }, [])

    return (<>
        <Header />
        <Hero
            title="Монтаж промышленного оборудования"
            subtitle="Мы предлагаем профессиональные услуги по монтажу промышленного оборудования любой сложности. Обеспечиваем точную и безопасную установку, соблюдая все технические стандарты и требования безопасности."
            backgroundImage={Bg}
        />
        <Element name="leave_a_request">
            <ReadyToCollaborate />
        </Element>
        <Footer />
    </>)
}