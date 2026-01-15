import type { ComponentPropsWithoutRef } from "react";
import type { GalleryImage } from "../constans/TravelGalleryData";
import styles from "./GalleryItem.module.scss";

interface GalleryItemProps
	extends Omit<GalleryImage, "id">,
		ComponentPropsWithoutRef<"li"> {
	className?: string;
}

const GalleryItem = ({
	className = "",
	alt,
	src,
	size = "normal",
	...props
}: GalleryItemProps) => {
	return (
		<li className={styles.galleryItem} {...props}>
			<img
				className={`${styles.galleryItem__image} ${styles[size]}`}
				src={src}
				alt={alt}
			/>
		</li>
	);
};

export default GalleryItem;
