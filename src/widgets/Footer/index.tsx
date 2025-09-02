import { FC } from "react";
import styles from "./style.module.scss";

export const Footer: FC = () => {
    return (
        <footer className={styles["footer"]}>
            <div className="container">
                <div className={styles["footer-inner"]}>
                    <p className={styles["footer-text"]}>&copy; {new Date().getFullYear()} Texnovik. Все права защищены.</p>
                </div>
            </div>
        </footer>
    )
}