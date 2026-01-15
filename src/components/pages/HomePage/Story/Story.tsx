import Container from "@commons/Container";
import Section from "@commons/Section";
import SectionHeader from "@commons/SectionHeader";
import { stories } from "./constans/StoryData";
import styles from "./Story.module.scss";
import StoryCard from "./StoryCard/StoryCard";

const Story = () => {
	return (
		<Section id="story_trip">
			<Container>
				<SectionHeader
					title="Истории путешествий"
					description={
						<>
							Идейные соображения высшего порядка,
							<br />а также рамки и место обучения кадров
						</>
					}
				/>
				<ul className={styles.story__blocks}>
					{stories.map((story) => (
						<StoryCard
							key={story.id}
							image={story.image}
							title={story.title}
							text={story.text}
							links={story.links}
							alt={story.alt}
						/>
					))}
				</ul>
			</Container>
		</Section>
	);
};

export default Story;
