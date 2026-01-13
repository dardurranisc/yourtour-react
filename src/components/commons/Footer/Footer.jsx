import Container from "../Container/Container"
import SocialItem from "./SocialLink/SocialItem"
import SocialLinksList from "./SocialLinksList/SocialLinksList"

import {links} from "./constans/FooterData"

import styles from "./Footer.module.scss"



const Footer = () => {
    return(
       <footer className={styles.footer}>
            <Container>
                <div className={styles.footer__content}>
                    <p className={styles.footer__text}>
                        Наши социальные сети
                    </p>
                    <SocialLinksList>
                        {links.map((link) => (
                            <SocialItem
                                key={link.id}
                                link={link.link}
                                src={link.image}
                                title={link.title}
                            />
                        ))}
                    </SocialLinksList>
                </div>
            </Container>
        </footer> 
    )
}

export default Footer