import styles from "./Section.module.scss"

const Section = ({
    id,
    className = '',
    variant = 'default',
    children
}) => {
    const sectionClasses = {
        default:'section-default',
        hero:'section-hero',
        travelWithUs:'section-travelWithUs'
    }

    return(
        <section id={id} className={`${styles.section} ${styles[sectionClasses[variant]]}`}>
	    	{children}
        </section>
    )
}

export default Section