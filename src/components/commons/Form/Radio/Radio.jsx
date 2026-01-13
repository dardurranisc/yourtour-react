import { useState } from "react";

import {options} from "./contans/RadioData"

import styles from "./Radio.module.scss"

const Radio = ({
    title,
    className=""
}) =>{
    const [selectedRadio, setSelectedRadio] = useState('');

    const handleOptionChange = (event) => {
        setSelectedRadio(event.target.value);
    };

    return(
        <>
            <p className={styles.radio__title}>{title}</p>
            <div className={styles.radio__blocks}>
                {options.map((option) => (
                    <div key={option.id} className={styles.radio__blocks}>
                        <label className={styles.radio__block}>
                            {option.label}
                            <input
                            className={styles.radio__input}
                            type={"radio"}
                            onChange={handleOptionChange}
                            value={option.value}
                            checked={selectedRadio === option.value}
                            required />
                            <span className={styles.radio__span}/>
                        </label>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Radio;