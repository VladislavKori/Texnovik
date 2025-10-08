import { forwardRef } from "react";
import { ButtonProp } from "./type";
import clsx from "clsx";
import styles from "./style.module.scss";
import { Spinner } from "../Spinner";

export const Button = forwardRef<HTMLButtonElement, ButtonProp>(({
    children,
    variant = "default",
    size = "m",
    fullWidth,
    className,
    startContent,
    endContent,
    disabled,
    isLoading,
    ...props
}, ref) => {
    return (
        <button
            ref={ref}
            className={clsx(
                styles["button"],
                styles[`button-variant-${variant}`],
                styles[`button-size-${size}`],
                fullWidth && styles["button-full-width"],
                (disabled || isLoading) && styles["disabled"],
                className,
            )}
            {...props}
        >
            {isLoading ? <Spinner /> : startContent}
            {children}
            {endContent}
        </button>
    )
})