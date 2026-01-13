import styles from "./FormBlock.module.scss"

const FormBlock = ({
    className="",
    children,
    direction = "horizontal",
    mobileDirection = "column",
    gap,
    ...props
}) =>{
    const style = gap ? {gap} : {};

    return(
        <div className={`${styles.formBlock} ${styles[direction]} ${styles[mobileDirection]} ${className}`} style={style} {...props}>
            {children}
        </div>
    )
}


export default FormBlock;