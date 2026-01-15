import type { TextareaHTMLAttributes } from "react";

import styles from "./TextAreaField.module.scss";

interface TextAreaFieldProps
	extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	title: string;
}

const TextAreaField = ({ title, ...props }: TextAreaFieldProps) => {
	return (
		<label className={styles.textAreaField}>
			{title}
			<textarea className={styles.textAreaField__textarea} {...props} />
		</label>
	);
};

export default TextAreaField;
