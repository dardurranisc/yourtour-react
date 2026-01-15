import type { FormHTMLAttributes, ReactNode } from "react";

import styles from "./Form.module.scss";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
	children: ReactNode;
}

const Form = ({ children }: FormProps) => {
	return <form className={styles.create__form}>{children}</form>;
};

export default Form;
