import Container from "@commons/Container";
import Section from "@commons/Section";
import SectionHeader from "@commons/SectionHeader";
import { reviews } from "./constans/ReviewsData";
import ReviewCard from "./ReviewCard/ReviewCard";

import styles from "./Reviews.module.scss";

const Reviews = () => {
	return (
		<Section id="reviews">
			<Container>
				<SectionHeader
					title={
						<>
							Отзывы наших
							<br />
							путешественников
						</>
					}
					description={
						<>
							Идейные соображения высшего порядка,
							<br />а также рамки и место обучения кадров
						</>
					}
				/>
				<ul className={styles.reviews__blocks}>
					{reviews.map((review) => (
						<ReviewCard
							key={review.id}
							text={review.text}
							name={review.name}
							tour={review.titleTour}
							image={review.image}
						/>
					))}
				</ul>
			</Container>
		</Section>
	);
};

export default Reviews;
