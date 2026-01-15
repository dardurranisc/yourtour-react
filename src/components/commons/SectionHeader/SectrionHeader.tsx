import type { ReactNode } from "react";

import styles from "./SectionHeader.module.scss";

interface SectionHeaderProps {
	title: ReactNode;
	variant?: "default" | "createTour";
	description: ReactNode;
}

const sectionHeaderClasses = {
	default: styles["sectionHeader"],
	createTour: styles["sectionHeader-createTour"],
};

const SectionHeader = ({
	title,
	variant = "default",
	description,
}: SectionHeaderProps) => {
	const sectionHeaderClass = sectionHeaderClasses[variant];

	return (
		<div className={`${styles.sectionHeader} ${sectionHeaderClass}`}>
			<h2 className={styles.sectionHeader__title}>{title}</h2>
			<p className={styles.sectionHeader__description}>{description}</p>
		</div>
	);
};

export default SectionHeader;
