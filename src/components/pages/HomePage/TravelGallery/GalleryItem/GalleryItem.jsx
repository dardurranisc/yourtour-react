import styles from "./GalleryItem.module.scss"

const GalleryItem = ({
    className="",
    alt,
    src,
    size ="normal",
    ...props
}) => {
    return(
        <li className={styles.galleryItem} {...props}>
            <img className={`${styles.galleryItem__image} ${styles[size]}`} src={src} alt={alt}/>
        </li>
    )
}

export default GalleryItem
