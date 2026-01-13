import styles from "./Button.module.scss"

const Button = ({
    className="",
    children,
    type = "button",
    variant = "main",
    ...props
    }) => {
    return(
        <button type={type}
                className={`${styles.button} ${className} ${styles[`button--${variant}`]}`} 
                {...props}
        >
			{children}
        </button>
    )
}

export default Button