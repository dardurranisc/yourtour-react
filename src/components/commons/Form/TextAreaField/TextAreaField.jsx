import styles from "./TextAreaField.module.scss"

const TextAreaField = ({
    title,
    type,
    className="",
    ...props
}) =>{
    return(
        <label className={styles.textAreaField}>
            {title}
            <textarea className={styles.textAreaField__textarea} {...props}/>
        </label>
    )
}


export default TextAreaField;