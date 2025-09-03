import { Footer } from "@widgets/Footer";
import { Header } from "@widgets/Header";
import { Hero } from "@widgets/Hero";

import Bg from "@shared/assets/montash.jpg";

export function MontazhPage() {
    return (<>
            <Header />
            <Hero 
                title="Монтаж инженерных сетей"
                subtitle="Обеспечьте надежную работу вашего объекта с помощью профессионального монтажа инженерных сетей. Мы выполняем монтаж систем водоснабжения, канализации, электросетей и вентиляции быстро, качественно и в соответствии с всеми стандартами."
                backgroundImage={Bg}
            />
            <Footer />
    </>)
}