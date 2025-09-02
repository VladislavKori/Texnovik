import { createContext, FC, useContext, useState } from "react";
import type { IToast, IToastCallProps, IToastContext, IToastProps, IToastProviderProps } from "./type";
import styles from "./style.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import AlertCircle from "./icons/alert-circle.svg?react";
import AlertTriangle from "./icons/alert-triangle.svg?react";
import CheckVerified from "./icons/check-verified.svg?react";
import InfoCircle from "./icons/info-circle.svg?react";

const ToastContext = createContext<IToastContext | null>(null)

export const ToastProvider: FC<IToastProviderProps> = ({ children }) => {
    const [toastSeq, setToastSeq] = useState<IToast[]>([]);

    function call({ text, duration, variant }: IToastCallProps) {
        const id = Date.now();
        setToastSeq(prev => ([{ id, text, variant }, ...prev]))

        setTimeout(() => {
            setToastSeq((currentToasts) =>
                currentToasts.filter((toast) => toast.id !== id)
            );
        }, duration || 3000);
    }

    return (
        <ToastContext.Provider value={{ call }}>
            {children}
            <div className={styles["toasts-section"]}>
                <AnimatePresence>
                    {toastSeq.map(toast => (
                        <Toast
                            {...toast}
                        />
                    ))}
                </AnimatePresence>
            </div>
        </ToastContext.Provider>
    )
}

export const useToast = () => {
    const context = useContext(ToastContext);

    if (!context) {
        throw new Error(
            "ToastContext has to be used within <ToastProvider>"
        );
    }

    return context;
}

export const Toast: FC<IToastProps> = (props) => {
    return (
        <motion.div
            className={styles.toast}
            initial={{
                x: "100%",
                opacity: 0
            }}
            animate={{
                x: 0,
                opacity: 1
            }}
            exit={{
                x: "100%",
                opacity: 0
            }}
        >
            {props.variant && (
                <div className={clsx(styles["toast-head"], styles[`toast-variant-${props.variant}`])}>
                    {props.variant === "error" && (<>
                        <AlertCircle className={styles["toast-icon"]} />
                        <span>Ошибка</span>
                    </>)}
                    {props.variant === "warning" && (<>
                        <AlertTriangle className={styles["toast-icon"]} />
                        <span>Предпупреждение</span>
                    </>)}
                    {props.variant === "success" && (<>
                        <CheckVerified className={styles["toast-icon"]} />
                        <span>Успешно</span>
                    </>)}
                    {props.variant === "information" && (<>
                        <InfoCircle className={styles["toast-icon"]} />
                        <span>Справка</span>
                    </>)}
                </div>
            )}
            {props.text && <p className={styles["toast-text"]}>{props.text}</p>}
        </motion.div>
    )
}