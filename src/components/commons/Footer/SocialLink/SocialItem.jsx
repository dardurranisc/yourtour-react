import styles from "./SocialItem.module.scss"

const SocialItem = ({
    children,
    link,
    title,
    src,
    alt,
    className=""
}) => {
    return(
        <li className={styles.socialItem}>
            <a className={styles.socialItem__link} href={link}>
                <img src={src} alt={alt} className={styles.socialItem__image}/>
                <p className={styles.socialItem__title}>{title}</p>
            </a>
        </li>
    )
}

export default SocialItem
