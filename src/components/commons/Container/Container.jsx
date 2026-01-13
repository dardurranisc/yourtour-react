import styles from "./Container.module.scss"

const Container = ({
    children,
    variant = "default",
    className=""
}) =>{
    const variantClasses = {
        default:'container-default',
        header:'container-header',
        travelGallery:'container-travelGallery'
    }

    return(
        <div className={`${styles.container} ${styles[variantClasses[variant]]} ${className}`}>
            {children}
        </div>
    )
}

export default Container