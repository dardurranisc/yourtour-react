import Button from "@commons/Button";

import Section from "@commons/Section";
import Image from "next/image";

import styles from "./Hero.module.scss";

const Hero = () => {
	return (
		<Section id="hero" variant="hero">
			<div className={styles.hero__background}>
				<Image
					src="/images/hero/hero-bg.png"
					alt="Горы"
					sizes="100vw"
					fill
					className={styles.hero__image}
					priority
				/>
			</div>
			<div className={styles.hero__main}>
				<div className={styles.hero__block}>
					<h1 className={styles.hero__title}>
						Идеальные путешествия существуют
					</h1>
					<p className={styles.hero__text}>
						Идейные соображения высшего порядка, а также рамки и место обучения
						кадров
					</p>
					<Button>Найти тур</Button>
				</div>
			</div>
		</Section>
	);
};

export default Hero;
