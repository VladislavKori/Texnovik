import { FC } from "react";
import styles from "./style.module.scss";

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
                    <h2 className={styles["contacts-title"]}>Контакты</h2>
                    <div className={styles["contacts-grid"]}>
                        {/* Телефон */}
                        <div className={styles["contacts-block"]}>
                            <span className={styles["contacts-block-title"]}>Телефон</span>
                            <a href="tel:+79119257015" className={styles["contacts-block-info"]}>+7 (911) 925-70-15</a>
                        </div>

                        {/* Адресс */}
                        <div className={styles["contacts-block"]}>
                            <span className={styles["contacts-block-title"]}>Адресс</span>
                            <a className={styles["contacts-block-info"]}>г. Санкт-Петербург, ул. Промышленная, д. 1</a>
                        </div>

                        {/* Почта */}
                        <div className={styles["contacts-block"]}>
                            <span className={styles["contacts-block-title"]}>Email</span>
                            <a className={styles["contacts-block-info"]}>9257015@gmail.com</a>
                        </div>

                        {/* Время работы */}
                        <div className={styles["contacts-block"]}>
                            <span className={styles["contacts-block-title"]}>Время работы</span>
                            <a className={styles["contacts-block-info"]}>Пн–Пт, 9:00–18:00</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}