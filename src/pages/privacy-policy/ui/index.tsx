import { Footer } from "@widgets/Footer";
import { Header } from "@widgets/Header";
import styles from "./style.module.scss";
import { Markdown } from "@shared/ui/Markdown";
import { privacyPolicyText } from "@shared/assets/docs/privacy";

export function PrivacyPolicyPage() {
    return (
        <>
            <Header />
            <div className={styles["content"]}>
                <div className="container" style={{maxWidth: "900px"}}>
                    <Markdown>{privacyPolicyText}</Markdown>
                </div>
            </div>
            <Footer />
        </>
    )
}