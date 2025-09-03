import { FC } from "react";
import styles from "./style.module.scss";
import { ServiceCard } from "./Card";
import { servicesList } from "./config";
import { motion } from "framer-motion";

export const Serviecs: FC = () => {
    return (
        <div className={styles["services"]}>
            <div className={styles["services-header"]}>
                <div className={styles["services-title"]}>
                    <motion.span
                        initial={{ y: -50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        Услуги
                    </motion.span>
                </div>
                <motion.p
                    className={styles["services-subtitle"]}
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    Профессиональное изготовление и монтаж оборудования, а также выполнение проектных работ любой сложности — гарантированное качество и индивидуальный подход к каждому проекту.
                </motion.p>
            </div>

            <div className="container">
                <div className={styles["services-cards"]}>
                    {servicesList.map((s, index) => (
                        <motion.div
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            viewport={{ once: true }}
                            key={`${s.title}-${index}`}
                        >
                            <ServiceCard
                                title={s.title}
                                description={s.description}
                                imageURL={s.imageURL}
                                link={s.link}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}