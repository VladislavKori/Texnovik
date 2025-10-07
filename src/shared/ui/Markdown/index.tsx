import { FC } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "./style.module.scss";

interface MarkdownProp {
    children: string | null | undefined;
}

export const Markdown: FC<MarkdownProp> = (props) => {
    const { children } = props;

    return (
        <div className={styles["markdown"]}>
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    table: ({ node, ...props }) => (
                        <div className={styles["table-wrapper"]}>
                            <table {...props} />
                        </div>
                    ),
                }}
            >
                {children}
            </ReactMarkdown>
        </div >
    );
};