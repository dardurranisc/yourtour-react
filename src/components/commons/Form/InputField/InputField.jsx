import styles from "./InputField.module.scss"

const InputField = ({
    title,
    type,
    placeholder,
    className="",
    ...props
}) =>{
    return(
        <label className={styles.inputField}>
            {title}
            <input className={styles.inputField__input} type={type} placeholder={placeholder} {...props}/>
        </label>
    )
}


export default InputField;