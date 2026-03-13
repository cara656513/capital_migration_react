import classNames from "classnames";
import styles from "./Button.module.scss";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
}

export default function Button({
    variant = "primary",
    children,
    className,
    ...props
}: ButtonProps) {
    return (
        <button
            className={classNames(styles.button, styles[variant], className)}
            {...props}
        >
            {children}
        </button>
    );
}