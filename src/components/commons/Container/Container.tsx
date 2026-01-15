import type { ReactNode } from "react";

import styles from "./Container.module.scss";

interface ContainerProps {
	children: ReactNode;
	variant?: "default" | "header" | "travelGallery";
}

const variantClasses = {
	default: styles["container-default"],
	header: styles["container-header"],
	travelGallery: styles["container-travelGallery"],
};

const Container = ({ children, variant = "default" }: ContainerProps) => {
	const variantClass = variantClasses[variant];

	return (
		<div className={`${styles.container} ${variantClass}`}>{children}</div>
	);
};

export default Container;
