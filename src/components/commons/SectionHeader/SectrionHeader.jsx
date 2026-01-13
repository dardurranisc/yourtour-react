import styles from "./SectionHeader.module.scss"

const SectionHeader = ({
    className,
    title,
    variant = "",
    description
}) => {
    const sectionHeaderClasses = {
        createTour:'sectionHeader-createTour'
    }

    return(
        <div className={`${styles.sectionHeader} ${styles[sectionHeaderClasses[variant]]}`}>
            <h2 className={styles.sectionHeader__title}>{title}</h2>
            <p className={styles.sectionHeader__description}>{description}</p>
        </div>
    )
}

export default SectionHeader