import type { ComponentPropsWithoutRef, ReactNode } from "react";

import styles from "./GalleryBlock.module.scss";

interface GalleryBlockProps extends ComponentPropsWithoutRef<"ul"> {
	children: ReactNode;
	className?: string;
}

const GalleryBlock = ({
	children,
	className = "",
	...props
}: GalleryBlockProps) => {
	return (
		<ul className={`${styles.galleryBlock} ${className}`} {...props}>
			{children}
		</ul>
	);
};

export default GalleryBlock;
