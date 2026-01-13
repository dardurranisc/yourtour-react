import {options} from "./constans/options"
import styles from "./SelectField.module.scss"


const SelectField = ({
    title,
    className="",
    ...props
}) =>{
    return(
        <label className={styles.selectField}>
            {title}
            <select className={styles.selectField__input}>
               {options.map((option) => (
                   <option key={option.id} value={option.value}>
                        {option.label}
                    </option>
               ))}
            </select>
        </label>
    )
}

export default SelectField;