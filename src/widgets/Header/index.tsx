import { FC, useEffect, useState } from "react";
import TextLogo from "@shared/assets/text-logo.svg?react";
import styles from "./style.module.scss";
import { haederLinks } from "./config";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Button } from "@shared/ui/Button";
import { useMediaQuery } from "@shared/hooks/useMediaQuery";

export const Header: FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const isPhone = useMediaQuery("(max-width: 576px)");

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
                    {haederLinks.map((link, index) => (
                        <ScrollLink
                            className={styles["header-link"]}
                            activeClass={styles["header-link-active"]}
                            to={link.href}
                            key={`${link.text}-${index}`}
                            offset={link.offset || 0}
                            duration={500}
                            smooth
                            spy
                        >
                            {link.text}
                        </ScrollLink>
                    ))}
                </nav>
                <ScrollLink to="leave_a_request" duration={800} smooth>
                    <Button size={isPhone ? "m" : "l"} variant="outline">
                        Оставить заявку
                    </Button>
                </ScrollLink>
            </div>
        </header>
    )
}