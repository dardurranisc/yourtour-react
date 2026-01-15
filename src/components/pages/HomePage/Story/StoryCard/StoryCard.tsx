import Button from "@commons/Button";
import type { Story } from "../constans/StoryData";

import styles from "./StoryCard.module.scss";

interface StoryCardProps extends Omit<Story, "id">{}

const StoryCard = ({
	image,
	title,
	text,
	alt,
	links = []
}: StoryCardProps) => {
	return (
		<li className={styles.storyCard}>
			<img src={image} className={styles.storyCard__image} alt={alt}/>
			<div className={styles.storyCard__block}>
				<div className={styles.storyCard__options}>
					<h3 className={styles.storyCard__name}>{title}</h3>
					<p className={styles.storyCard__text}>{text}</p>
				</div>
				<div className={styles.storyCard__under}>
					<Button type="button" variant="secondary">
						Подробнее
						<img src="images/arrow/vector.svg" className="arrowMore" alt="" />
					</Button>
					<div className={styles.storyCard__links}>
						{links.map((link) => (
							<a
								key={link.id}
								href={link.href}
								className={styles.storyCard__link}
							>
								{link.title}
							</a>
						))}
					</div>
				</div>
			</div>
		</li>
	);
};

export default StoryCard;
