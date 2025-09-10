import { ReactNode } from "react";

export type ButtonProp = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "s" | "m" | "l";
  variant?: "default" | "outline";
  isDisabled?: boolean;
  startContent?: ReactNode;
  endContent?: ReactNode;
  fullWidth?: boolean;
};