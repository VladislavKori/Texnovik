import { Footer } from "@widgets/Footer";
import { Header } from "@widgets/Header";
import styles from "./style.module.scss";
import { Markdown } from "@shared/ui/Markdown";
import { privacyPolicyText } from "@shared/assets/docs/privacy";
import { useEffect } from "react";
import { animateScroll as scroll } from 'react-scroll';


export function PrivacyPolicyPage() {
    useEffect(() => {
        scroll.scrollToTop()
    }, [])

    return (
        <>
            <Header />
            <div className={styles["content"]}>
                <div className="container" style={{ maxWidth: "900px" }}>
                    <Markdown>{privacyPolicyText}</Markdown>
                </div>
            </div>
            <Footer />
        </>
    )
}