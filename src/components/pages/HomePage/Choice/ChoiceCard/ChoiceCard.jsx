import Image from "next/image"

import Button from "../../../../commons/Button/Button"

import styles from "./ChoiceCard.module.scss"

const ChoiceCard = ({
    index="",
    src,
    alt,
    price,
    title
}) =>{
    return(
        <li key={index} className={styles.choice__item}>
            <div className={styles.choice__block}>
                <div className={styles.choice__specification}>
                    <h3 className={styles.choice__title}>{title}</h3>
                    <p className={styles.choice__price}>от {price} руб</p>
                </div>
                <Button type="button" variant="secondary">
                    Подробнее
                    <img className="arrowMore" src="images/Arrow/Vector.svg" alt=""/>
                </Button>
            </div>
            <Image
                className={styles.choice__image}
                src={src}
                width={740}
                height={1062}
                alt={alt}
            />
        </li>
    )
}

export default ChoiceCard;