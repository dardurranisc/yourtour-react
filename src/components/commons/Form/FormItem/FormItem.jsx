import styles from "./FormItem.module.scss"

const FormItem = ({
    className="",
    children
}) =>{
    return(
        <div className={styles.formItem}>
            {children}
        </div>
    )
}


export default FormItem;