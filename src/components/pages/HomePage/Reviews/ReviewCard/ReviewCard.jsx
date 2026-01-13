import styles from "./ReviewCard.module.scss"

const ReviewCard = ({
    text,
    name,
    tour,
    image,
    className=""
}) => {
    
    return(
        <li className={styles.reviewCard}>
            <p className={styles.reviewCard__text}>
               {text}
            </p>
            <div className={styles.reviewCard__author}>
                <div className={styles.reviewCard__options}>
                    <h3 className={styles.reviewCard__name}>
                        {name}
                    </h3>
                    <span className={styles.reviewCard__span}>
                        {`Тур: ${tour}`}
                    </span>
                </div>
                <img src={image} alt="" className={styles.reviewCard__image}/>
            </div>
        </li>
    )
}

export default ReviewCard