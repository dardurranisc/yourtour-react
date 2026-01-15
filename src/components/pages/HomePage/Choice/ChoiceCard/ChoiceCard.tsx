import Button from "@commons/Button";
import Image from "next/image";

import type { СhoiceArticle } from "../constans/ChoiceData";

import styles from "./ChoiceCard.module.scss";

interface ChoiceCardProps extends Omit<СhoiceArticle, "id" | "category"> {}

const ChoiceCard = ({ image, alt, price, title }: ChoiceCardProps) => {
	return (
		<li className={styles.choice__item}>
			<div className={styles.choice__block}>
				<div className={styles.choice__specification}>
					<h3 className={styles.choice__title}>{title}</h3>
					<p className={styles.choice__price}>от {price} руб</p>
				</div>
				<Button type="button" variant="secondary">
					Подробнее
					<img className="arrowMore" src="images/arrow/vector.svg" alt="" />
				</Button>
			</div>
			<Image
				className={styles.choice__image}
				src={image}
				width={740}
				height={1062}
				alt={alt}
			/>
		</li>
	);
};

export default ChoiceCard;
