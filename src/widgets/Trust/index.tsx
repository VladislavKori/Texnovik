import { FC } from "react";
import styles from "./style.module.scss";
import clsx from "clsx";

export const Trust: FC = () => {
    return (
        <div className={styles["trust"]}>
            <div className={clsx("container", styles["trust-inner"])}>
                <div className={styles["trust-texts"]}>
                    <h2 className={styles["trust-title"]}>Доверие к качеству </h2>
                    <p className={styles["trust-subtitle"]}>Наша компания давно занимает лидирующие позиции на рынке, предлагая широкий спектр услуг и гарантируя высочайшее качество. Мы обеспечиваем профессионализм, надежность и оперативное решение ваших задач, чтобы вы всегда оставались довольны результатом.</p>
                </div>
                <div className={styles["trust-image"]}>
                    <img src="https://www.shreksadventure.com/media/ch5lnlye/shrek_still_sq25-sc3-f449_02.tif" />
                </div>
            </div>
        </div>
    )
}