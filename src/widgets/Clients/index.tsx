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
import { motion } from "framer-motion";

const clients = [Lenta, Pyterochka, BaltiskyZavod, Zooptorg, KirovskyZavod, Admiralteysky, Fava, Petshop, Samolet];

export const Clients: FC = () => {
    return (
        <div className={styles["clients"]}>
            <div className={clsx("container", styles["clients-texts"])}>
                <motion.h2
                    className={styles["clients-title"]}
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Пользовались нашими услугами
                </motion.h2>
                <motion.p
                    className={styles["clients-subtitle"]}
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    В слайдере представлена лишь часть наших довольных клиентов, которые уже воспользовались нашими услугами. Мы уверены в высоком качестве своей работы и гордимся каждым выполненным проектом.
                </motion.p>
            </div>
            <div className="container">
                <Marquee gradient={false} speed={40}>
                    {clients.map((c, index) => (
                        <motion.div
                            key={`client-${index}`}
                            className={styles["clients-card"]}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 * index, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <img src={c} />
                        </motion.div>
                    ))}
                </Marquee>
            </div>
        </div>
    )
}