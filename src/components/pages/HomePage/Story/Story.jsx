
import Section from "@commons/Section"
import Container from "@commons/Container"
import SectionHeader from "@commons/SectionHeader"

import StoryCard from "./StoryCard/StoryCard"

import {stories} from "./constans/StoryData"

import styles from "./Story.module.scss"


const Story = () => {
    return(
        <Section id="story_trip">
            <Container>
               <SectionHeader 
					title="Истории путешествий"
					description={
						<>
							Идейные соображения высшего порядка,
							<br/>
							а также рамки и место обучения кадров
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
                        />
                    ))}
	    		</ul>
            </Container>
        </Section>
    )
}


export default Story