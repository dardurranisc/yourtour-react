import Container from "@commons/Container";
import Section from "@commons/Section";

import styles from "./TravelWithUs.module.scss";

const TravelWithUs = () => {
	return (
		<Section variant="travelWithUs">
			<Container>
				<div className={styles.travelling__block}>
					<img
						src="images/travel-with-us/travel-with-us_photo.jpg"
						alt=""
						className={styles.travelling__image}
					/>
					<div className={styles.travelling__content}>
						<h3 className={styles.travelling__name}>
							Пора в путешествие вместе с нами!
						</h3>
						<p className={styles.travelling__text}>
							Напиши на почту и узнай подробности на{" "}
							<a
								className={styles.travelling__email}
								href="mailto:yourtour@gmail.com"
							>
								yourtour@gmail.com
							</a>
						</p>
					</div>
				</div>
			</Container>
		</Section>
	);
};

export default TravelWithUs;
