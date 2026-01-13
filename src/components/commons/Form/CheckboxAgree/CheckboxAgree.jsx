import {useState} from "react"
import styles from "./CheckboxAgree.module.scss"

const CheckboxAgree = ({
    className="",
    children
}) =>{
    const [isAgree,setIsAgree] = useState(false);

    const handleClickAgree = (e) => {
        e.preventDefault();
        setIsAgree(!isAgree);
    }

    return(
        <label className={styles.checkboxAgree} onClick={handleClickAgree}>
            <input  
                type="checkbox" 
                className={styles.checkboxAgree__action} 
                checked={isAgree}
                onChange={() => {}}
                required
            />
            <span className={styles.checkboxAgree__checkbox}></span>
            <span>
                Нажимая кнопку, я принимаю условия
                <a href="#" className={styles.checkboxAgree__link}> Лицензионного договора</a>
            </span>
        </label>
    )
}

export default CheckboxAgree;