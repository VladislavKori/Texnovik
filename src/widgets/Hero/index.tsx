import { FC } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

interface IHeroProps {
    title: string;
    subtitle: string;
    backgroundImage?: string;
}

export const Hero: FC<IHeroProps> = (props) => {
    return (
        <div className={styles["hero"]}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className={styles["hero-background"]}
                style={{
                    background: `url('${props.backgroundImage}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "top right",
                    backgroundRepeat: "no-repeat"
                }}
            ></motion.div>
            <div className={styles["hero-background-gradient"]}></div>
            <div className="container">
                <div className={styles["hero-content"]}>
                    <div className={styles["hero-texts"]}>
                        <motion.h1
                            className={styles["hero-title"]}
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            {props.title}
                        </motion.h1>
                        <motion.p
                            className={styles["hero-subtitle"]}
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            {props.subtitle}
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        <Link to="leave_a_request" duration={800} smooth>
                            <button className={styles["hero-button"]}>
                                Оставить заявку
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}