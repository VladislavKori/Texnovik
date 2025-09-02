import { FC } from "react";
import styles from "./style.module.scss";

export const Hero: FC = () => {
    return (
        <div className={styles["hero"]}>
            <div className={styles["hero-background"]} ></div>
            <div className={styles["hero-background-gradient"]}></div>
            <div className="container">
                <div className={styles["hero-content"]}>
                    <div className={styles["hero-texts"]}>
                        <h1 className={styles["hero-title"]}>Качество и надёжность в каждом решении</h1>
                        <p className={styles["hero-subtitle"]}>Профессиональное изготовление и монтаж оборудования, а также выполнение проектных работ любой сложности — гарантированное качество
                            и индивидуальный подход к каждому проекту. </p>
                    </div>

                    <button className={styles["hero-button"]}>Оставить заявку</button>
                </div>
            </div>
        </div>
    )
}