import type { SocialLink } from "../constans/FooterData";
import styles from "./SocialItem.module.scss";

interface SocialItemProps extends Omit<SocialLink, "id"> {}

const SocialItem = ({ link, title, image, alt }: SocialItemProps) => {
	return (
		<li className={styles.socialItem}>
			<a className={styles.socialItem__link} href={link}>
				<img src={image} alt={alt} className={styles.socialItem__image} />
				<p className={styles.socialItem__title}>{title}</p>
			</a>
		</li>
	);
};

export default SocialItem;
