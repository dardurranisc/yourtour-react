import type { InputHTMLAttributes } from "react";

import styles from "./InputField.module.scss";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	title: string;
}

const InputField = ({ title, ...props }: InputFieldProps) => {
	return (
		<label className={styles.inputField}>
			{title}
			<input className={styles.inputField__input} {...props} />
		</label>
	);
};

export default InputField;
