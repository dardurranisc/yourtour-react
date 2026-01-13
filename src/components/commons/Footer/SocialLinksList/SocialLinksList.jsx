import styles from "./SocialLinksList.module.scss"

const SocialLinksList = ({
    children,
    className=""
}) => {
    return(
        <ul className={styles.socialLinksList}>
           {children}
        </ul>
    )
}

export default SocialLinksList
