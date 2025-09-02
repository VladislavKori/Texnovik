import { FC } from "react";
import styles from "./style.module.scss";
import clsx from "clsx";
import Marquee from "react-fast-marquee";

import Lenta from "./assets/lenta.svg";
import Pyterochka from "./assets/pyterochka.svg";
import BaltiskyZavod from "./assets/baltisky_zavod.svg";
import Zooptorg from "./assets/zooptorg.svg";
import KirovskyZavod from "./assets/kirovsky_zavod.svg";
import Admiralteysky from "./assets/admiralteysky.svg";
import Fava from "./assets/fava.svg";
import Petshop from "./assets/petshop.svg";
import Samolet from "./assets/samolet.svg";

const clients = [Lenta, Pyterochka, BaltiskyZavod, Zooptorg, KirovskyZavod, Admiralteysky, Fava, Petshop, Samolet];

export const Clients: FC = () => {
    return (
        <div className={styles["clients"]}>
            <div className={clsx("container", styles["clients-texts"])}>
                <h2 className={styles["clients-title"]}>Пользовались нашими услугами</h2>
                <p className={styles["clients-subtitle"]}>Профессиональное изготовление и монтаж оборудования, а также выполнение проектных работ любой сложности — гарантированное качество и индивидуальный подход к каждому проекту. </p>
            </div>
            <div className="container">
                <Marquee gradient={false} speed={40}>
                    {clients.map(c => (
                        <div className={styles["clients-card"]}>
                            <img src={c} />
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    )
}