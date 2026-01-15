import type { ReactNode } from "react";

import styles from "./Section.module.scss";

interface SectionProps {
	id?: string;
	children: ReactNode;
	variant?: "default" | "hero" | "travelWithUs";
}

const sectionClasses = {
	default: styles["section-default"],
	hero: styles["section-hero"],
	travelWithUs: styles["section-travelWithUs"],
};

const Section = ({ id, variant = "default", children }: SectionProps) => {
	const sectionClass = sectionClasses[variant];

	return (
		<section id={id} className={`${styles.section} ${sectionClass}`}>
			{children}
		</section>
	);
};

export default Section;
