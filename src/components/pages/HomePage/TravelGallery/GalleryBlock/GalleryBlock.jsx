import styles from "./GalleryBlock.module.scss"

const GalleryBlock = ({
    children,
    className = "",
    ...props
}) => {
    return (
        <ul 
            className={`${styles.galleryBlock} ${className}`}
            {...props}
        >
            {children}
        </ul>
    )
}

export default GalleryBlock
