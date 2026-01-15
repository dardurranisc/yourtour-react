import Container from "@commons/Container";

import Section from "@commons/Section";
import { useState } from "react";
import styles from "./Choice.module.scss";
import ChoiceCard from "./ChoiceCard/ChoiceCard";
import {
	choiceArticles,
	choiceButtons,
	type СhoiceArticle,
	type СhoiceButton,
} from "./constans/ChoiceData";

type Category = (typeof choiceButtons)[number]["value"];

const Choice = () => {
	const [selectCategory, setSelectCategory] = useState<Category>("popular");

	const handleClickCategory = (categoryValue: Category) => {
		setSelectCategory(categoryValue);
	};

	const filteredArticles = choiceArticles.filter(
		(article) => article.category === selectCategory,
	);

	return (
		<Section id="owntour">
			<Container>
				<div className={styles.choice__main}>
					<h2 className={styles.choice__title}>Выбери свой тур</h2>
					<ul className={styles.choice__lists}>
						{choiceButtons.map((choiceButton: СhoiceButton) => (
							<li key={choiceButton.id}>
								<button
									className={`${styles.choice__link} ${
										selectCategory === choiceButton.value
											? styles["choice__link--active"]
											: ""
									}`}
									type="button"
									onClick={() => handleClickCategory(choiceButton.value)}
								>
									{choiceButton.alt}
								</button>
							</li>
						))}
					</ul>
				</div>
				<ul className={styles.choice__articles}>
					{filteredArticles.map((article: СhoiceArticle) => (
						<ChoiceCard
							key={article.id}
							image={article.image}
							alt={article.alt}
							title={article.title}
							price={article.price}
						/>
					))}
				</ul>
			</Container>
		</Section>
	);
};

export default Choice;
