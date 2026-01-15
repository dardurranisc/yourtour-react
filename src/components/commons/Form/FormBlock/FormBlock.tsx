import type { HTMLAttributes, ReactNode } from "react";

import styles from "./FormBlock.module.scss";

interface FormBlockProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	direction?: "horizontal" | "vertical";
	mobileDirection?: "column" | "row";
	gap?: string;
}

const FormBlock = ({
	children,
	direction = "horizontal",
	mobileDirection = "column",
	gap,
	...props
}: FormBlockProps) => {
	const style = gap ? { gap } : {};

	return (
		<div
			className={`${styles.formBlock} ${styles[direction]} ${styles[mobileDirection]}`}
			style={style}
			{...props}
		>
			{children}
		</div>
	);
};

export default FormBlock;
