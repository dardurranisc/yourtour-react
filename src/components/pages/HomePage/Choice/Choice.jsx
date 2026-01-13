import {useState} from "react"

import Section from "@commons/Section";
import Container from "@commons/Container";

import ChoiceCard from "./ChoiceCard/ChoiceCard"

import {choiceButtons,choiceArticles} from "../Choice/constans/ChoiceData"

import styles from "./Choice.module.scss"


const Choice = () => {
	const [selectCategory,setSelectCategory] = useState("popular");

	const handleClickCategory = (categoryValue) => {
		setSelectCategory(categoryValue);
	}

	const filteredArticles = choiceArticles.filter(
    	article => article.category === selectCategory
	);

    return(
		<Section id="owntour">
	    	<Container>
				<div className={styles.choice__main}>
					<h2 className={styles.choice__title}>
						Выбери свой тур
					</h2>
					<ul className={styles.choice__lists}>
						{choiceButtons.map(choiceButton => 
							<li key={choiceButton.id}>
								<button 
									className={`${styles.choice__link} ${
										selectCategory === choiceButton.value ? styles['choice__link--active'] : ''
									}`} 
									type="button" 
									onClick={() => handleClickCategory(choiceButton.value)}
									>
										{choiceButton.label}
								</button>
							</li>
						)}
					</ul>
				</div>
				<ul className={styles.choice__articles}>
					{filteredArticles.map(article => 
						<ChoiceCard
							key={article.id}
							src={article.image}
							alt={article.label}
							title={article.title}
							price={article.price}
						/>
					)}
				</ul>
		    </Container> 
	    </Section>
    )
}

export default Choice