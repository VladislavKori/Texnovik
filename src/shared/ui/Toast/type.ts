import { ReactNode } from "react";

export interface IToastProviderProps {
    children: ReactNode;
}

export type IToastVariants = "error" | "warning" | "success" | "information";

export interface IToastProps {
    variant?: IToastVariants;
    text?: string;
}

export interface IToast {
    id: number;
    text?: string;
    variant?: IToastVariants
}

export interface IToastCallProps {
    text?: string,
    duration?: number
    variant?: IToastVariants;
}

export interface IToastContext {
    call: ({
        text,
        duration,
        variant,
    }: IToastCallProps) => void;
}