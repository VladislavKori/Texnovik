import { FC } from "react";
import styles from "./style.module.scss";
import { ServiceCard } from "./Card";
import { servicesList } from "./config";

export const Serviecs: FC = () => {
    return (
        <div className={styles["services"]}>
            <div className={styles["services-header"]}>
                <div className={styles["services-title"]}>
                    <span>Услуги</span>
                </div>
                <p className={styles["services-subtitle"]}>Профессиональное изготовление и монтаж оборудования, а также выполнение проектных работ любой сложности — гарантированное качество и индивидуальный подход к каждому проекту. </p>
            </div>

            <div className="container">
                <div className={styles["services-cards"]}>
                    {servicesList.map(s => (
                        <ServiceCard 
                            title={s.title}
                            description={s.description}
                            imageURL={s.imageURL}
                            link={s.link}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}