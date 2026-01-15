import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	variant?: "main" | "secondary" | "tertiary" | "reset";
}

const Button = ({
	children,
	type = "button",
	variant = "main",
	...props
}: ButtonProps) => {
	return (
		<button
			type={type}
			className={`${styles.button} ${styles[`button--${variant}`]}`}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
