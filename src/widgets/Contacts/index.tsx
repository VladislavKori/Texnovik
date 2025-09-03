import { FC } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";

export const Contacts: FC = () => {
    return (
        <div className={styles["contacts"]}>
            <div className="container">
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac7225afa689235e3848ff7835e14a74710ca8a1897bf7cf09eaf1a5ec1cc7287&amp;source=constructor"
                    className={styles["contacts-map"]}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>

            <div className="container">
                <div className={styles["contacts-inner"]}>
                    <motion.h2
                        className={styles["contacts-title"]}
                        initial={{ y: -50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Контакты
                    </motion.h2>
                    <div className={styles["contacts-grid"]}>
                        {/* Телефон */}
                        <motion.div
                            className={styles["contacts-block"]}
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <span className={styles["contacts-block-title"]}>Телефон</span>
                            <a href="tel:+79119257015" className={styles["contacts-block-info"]}>+7 (911) 925-70-15</a>
                        </motion.div>

                        {/* Адресс */}
                        <motion.div
                            className={styles["contacts-block"]}
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <span className={styles["contacts-block-title"]}>Адресс</span>
                            <a className={styles["contacts-block-info"]}>г. Санкт-Петербург, ул. Промышленная, д. 1</a>
                        </motion.div>

                        {/* Почта */}
                        <motion.div
                            className={styles["contacts-block"]}
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <span className={styles["contacts-block-title"]}>Email</span>
                            <a className={styles["contacts-block-info"]}>9257015@gmail.com</a>
                        </motion.div>

                        {/* Время работы */}
                        <motion.div
                            className={styles["contacts-block"]}
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <span className={styles["contacts-block-title"]}>Время работы</span>
                            <a className={styles["contacts-block-info"]}>Пн–Пт, 9:00–18:00</a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}