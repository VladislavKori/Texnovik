import { useEffect } from "react";
import { Footer } from "@widgets/Footer";
import { Header } from "@widgets/Header";
import { Hero } from "@widgets/Hero";
import { Element, animateScroll as scroll } from 'react-scroll';

import Bg from "@shared/assets/montash.jpg";
import { ReadyToCollaborate } from "@widgets/ReadyToCollaborate";

export function MontazhPage() {
    useEffect(() => {
        scroll.scrollToTop()
    }, [])

    return (<>
        <Header />
        <Hero
            title="Монтаж инженерных сетей"
            subtitle="Обеспечьте надежную работу вашего объекта с помощью профессионального монтажа инженерных сетей. Мы выполняем монтаж систем водоснабжения, канализации, электросетей и вентиляции быстро, качественно и в соответствии с всеми стандартами."
            backgroundImage={Bg}
        />
        <Element name="leave_a_request">
            <ReadyToCollaborate />
        </Element>
        <Footer />
    </>)
}