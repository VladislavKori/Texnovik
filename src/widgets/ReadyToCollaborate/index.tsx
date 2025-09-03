import { FC } from "react";
import styles from "./style.module.scss";
import { LeadForm } from "@features/leadform/ui";
import { motion } from "framer-motion";

export const ReadyToCollaborate: FC = () => {
    return (
        <div className={styles["collab"]}>
            <div className="container">
                <div className={styles["collab-inner"]}>
                    <div className={styles["collab-texts"]}>
                        <motion.h2
                            className={styles["collab-title"]}
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            Готовы к сотрудничеству?
                        </motion.h2>
                        <motion.p
                            className={styles["collab-subtitle"]}
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            Свяжитесь с нами — обсудим ваш проект и предложим оптимальное решение под ваши задачи.
                        </motion.p>
                    </div>
                    <LeadForm />
                </div>
            </div>
        </div>
    )
}