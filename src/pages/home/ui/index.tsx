import { Clients } from "@widgets/Clients"
import { Contacts } from "@widgets/Contacts"
import { Footer } from "@widgets/Footer"
import { Header } from "@widgets/Header"
import { Hero } from "@widgets/Hero"
import { ReadyToCollaborate } from "@widgets/ReadyToCollaborate"
import { Reviews } from "@widgets/Reviews"
import { Serviecs } from "@widgets/Services"
import { Trust } from "@widgets/Trust"
import { Element } from 'react-scroll';

import Bg from "@shared/assets/bg.png";

export function HomePage() {
    return (<>
        <Header />
        <Element name="home">
            <Hero
                title="Качество и надёжность в каждом решении"
                subtitle="Профессиональное изготовление и монтаж оборудования, а также выполнение проектных работ любой сложности — гарантированное качество
                            и индивидуальный подход к каждому проекту."
                backgroundImage={Bg}
            />
        </Element>
        <Element name="services">
            <Serviecs />
        </Element>
        <Element name="about">
            <Trust />
        </Element>
        <Element name="clients">
            <Clients />
        </Element>
        <Element name="reviews">
            <Reviews />
        </Element>
        <Element name="leave_a_request">
            <ReadyToCollaborate />
        </Element>
        <Element name="contacts">
            <Contacts />
        </Element>
        <Footer />
    </>)
}