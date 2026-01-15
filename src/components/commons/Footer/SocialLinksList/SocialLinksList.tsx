import type { ReactNode } from "react";

import styles from "./SocialLinksList.module.scss";

interface SocialLinksListProps {
	children: ReactNode;
}

const SocialLinksList = ({ children }: SocialLinksListProps) => {
	return <ul className={styles.socialLinksList}>{children}</ul>;
};

export default SocialLinksList;
