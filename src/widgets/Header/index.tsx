import { FC, useEffect, useState } from "react";
import TextLogo from "@shared/assets/text-logo.svg?react";
import styles from "./style.module.scss";
import { haederLinks } from "./config";
import clsx from "clsx";
import { Link } from "react-router-dom";

export const Header: FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className={clsx(
            styles["header"],
            scrolled && styles["header-bg"]
        )}>
            <div className={clsx("container", styles["header-inner"])}>
                <Link to="/" className={styles["header-logo"]}>
                    <TextLogo className={styles["header-icon"]} />
                </Link>
                <nav className={styles["header-menu"]}>
                    {haederLinks.map(link => (
                        <a
                            className={styles["header-link"]}
                            href={link.href}
                        >
                            {link.text}
                        </a>
                    ))}
                </nav>
                <button className={styles["header-button"]}>
                    Оставить заявку
                </button>
            </div>
        </header>
    )
}