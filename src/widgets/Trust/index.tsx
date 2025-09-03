import { FC } from "react";
import styles from "./style.module.scss";
import clsx from "clsx";
import { motion } from "framer-motion";
import Bg from "./assets/image.jpg";

export const Trust: FC = () => {
    return (
        <div className={styles["trust"]}>
            <div className={clsx("container", styles["trust-inner"])}>
                <div className={styles["trust-texts"]}>
                    <motion.h2
                        className={styles["trust-title"]}
                        initial={{ y: -50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Доверие к качеству
                    </motion.h2>
                    <motion.p
                        className={styles["trust-subtitle"]}
                        initial={{ y: -50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Наша компания давно занимает лидирующие позиции на рынке, предлагая широкий спектр услуг и гарантируя высочайшее качество. Мы обеспечиваем профессионализм, надежность и оперативное решение ваших задач, чтобы вы всегда оставались довольны результатом.
                    </motion.p>
                </div>
                <motion.div
                    className={styles["trust-image"]}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <img src={Bg} />
                </motion.div>
            </div>
        </div>
    )
}