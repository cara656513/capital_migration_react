import classNames from "classnames";
import styles from "./Button.module.scss";
import IconDownload from "../../assets/icons/download.svg?react";
import Icon from "../Icon/Icon";

type ButtonVariant = "primary" | "secondary";
type As = "button" | "a";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    theme?: "default" | "popup" | "form" | "download";
    as?: As;
    href?: string
}

function Button({
    variant = "primary",
    theme = "default",
    as = "button",
    href,
    children,
    className
}: ButtonProps) {
    const Component = as
    return (
        <Component
            href={href}
            className={classNames(
                styles.button,
                styles[variant],
                theme !== "default" && styles[theme],
                className
            )}
        >
            {children}
            {theme === "download" && <Icon className={styles.icon}><IconDownload /></Icon>}
        </Component>
    );
}

export default Button;