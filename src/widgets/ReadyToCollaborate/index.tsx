import { FC } from "react";
import styles from "./style.module.scss";
import { LeadForm } from "@features/leadform/ui";

export const ReadyToCollaborate: FC = () => {
    return (
        <div className={styles["collab"]}>
            <div className="container">
                <div className={styles["collab-inner"]}>
                    <div className={styles["collab-texts"]}>
                        <h2 className={styles["collab-title"]}>Готовы к сотрудничеству?</h2>
                        <p className={styles["collab-subtitle"]}>Свяжитесь с нами — обсудим ваш проект и предложим оптимальное решение под ваши задачи.</p>
                    </div>
                    <LeadForm />
                </div>
            </div>
        </div>
    )
}