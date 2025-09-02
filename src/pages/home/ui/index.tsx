import { Clients } from "@widgets/Clients"
import { Contacts } from "@widgets/Contacts"
import { Footer } from "@widgets/Footer"
import { Header } from "@widgets/Header"
import { Hero } from "@widgets/Hero"
import { ReadyToCollaborate } from "@widgets/ReadyToCollaborate"
import { Reviews } from "@widgets/Reviews"
import { Serviecs } from "@widgets/Services"
import { Trust } from "@widgets/Trust"

export function HomePage() {
    return (
        <div>
            <Header />
            <Hero />
            <Serviecs />
            <Trust />
            <Clients />
            <Reviews />
            <ReadyToCollaborate />
            <Contacts />
            <Footer />
        </div>
    )
}