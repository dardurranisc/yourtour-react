import Container from "../Container/Container";
import { links } from "./constans/FooterData";
import styles from "./Footer.module.scss";
import SocialItem from "./SocialLink/SocialItem";
import SocialLinksList from "./SocialLinksList/SocialLinksList";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Container>
				<div className={styles.footer__content}>
					<p className={styles.footer__text}>Наши социальные сети</p>
					<SocialLinksList>
						{links.map((link) => (
							<SocialItem
								key={link.id}
								link={link.link}
								image={link.image}
								title={link.title}
								alt={link.alt}
							/>
						))}
					</SocialLinksList>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
