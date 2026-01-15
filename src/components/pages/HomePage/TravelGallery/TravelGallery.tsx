import Container from "@commons/Container";
import Section from "@commons/Section";
import SectionHeader from "@commons/SectionHeader";
import { galleryData } from "./constans/TravelGalleryData";
import GalleryBlock from "./GalleryBlock/GalleryBlock";
import GalleryItem from "./GalleryItem/GalleryItem";

import styles from "./TravelGallery.module.scss";

const TravelGallery = () => {
	return (
		<Section>
			<Container variant="travelGallery">
				<SectionHeader
					title="Фотографии путешествий"
					description={
						<>
							Идейные соображения высшего порядка,
							<br />а также рамки и место обучения кадров
						</>
					}
				/>
				<div className={styles.gallery}>
					<GalleryBlock data-block="1">
						{galleryData[0].map((photo, index) => (
							<GalleryItem
								key={photo.id}
								alt={photo.alt}
								src={photo.src}
								size={photo.size}
								data-item-index={index + 1}
								data-block="1"
							/>
						))}
					</GalleryBlock>
					<GalleryBlock data-block="2">
						{galleryData[1].map((photo, index) => (
							<GalleryItem
								key={photo.id}
								alt={photo.alt}
								src={photo.src}
								size={photo.size}
								data-item-index={index + 1}
								data-block="2"
							/>
						))}
					</GalleryBlock>
					<GalleryBlock data-block="3">
						{galleryData[2].map((photo, index) => (
							<GalleryItem
								key={photo.id}
								alt={photo.alt}
								src={photo.src}
								size={photo.size}
								data-item-index={index + 1}
								data-block="3"
							/>
						))}
					</GalleryBlock>
				</div>
			</Container>
		</Section>
	);
};

export default TravelGallery;
