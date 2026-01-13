import styles from "./Form.module.scss"

const Form = ({
	children
}) => {
    return (
        <form className={styles.create__form}>
			{children}
		</form>
    )
}

export default Form;