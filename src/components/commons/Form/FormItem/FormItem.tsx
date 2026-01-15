import type { ReactNode } from "react";

import styles from "./FormItem.module.scss";

interface FormItemProps {
	children: ReactNode;
}

const FormItem = ({ children }: FormItemProps) => {
	return <div className={styles.formItem}>{children}</div>;
};

export default FormItem;
