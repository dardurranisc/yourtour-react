import Image from "next/image"

import Section from "@commons/Section"
import SectionHeader from "@commons/SectionHeader"
import Button from "@commons/Button"

import styles from "./Hero.module.scss"

const Hero = () =>{
    return(
		<Section id="hero" variant="hero" className={styles.hero}>
			<div className={styles.hero__background}>
				<Image
					src="/images/Hero/hero-bg.png"
					alt="Горы"
					sizes="100vw"
					fill
					priority
					className={styles.hero__image}
				/>
			</div>
			<div className={styles.hero__main}>
				<div className={styles.hero__block}>
					<h1 className={styles.hero__title}>
						Идеальные путешествия существуют
					</h1>
					<p className={styles.hero__text}>
						Идейные соображения высшего порядка, а также рамки и место обучения кадров
					</p>
					<Button>Найти тур</Button>
				</div>
			</div>
		</Section>
    )
}

export default Hero 