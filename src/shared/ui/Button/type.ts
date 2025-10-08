import { ReactNode } from "react";

export type ButtonProp = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "s" | "m" | "l";
  variant?: "default" | "outline";
  isLoading?: boolean;
  isDisabled?: boolean;
  startContent?: ReactNode;
  endContent?: ReactNode;
  fullWidth?: boolean;
};