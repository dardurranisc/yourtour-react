import { options } from "./constans/options";

import styles from "./SelectField.module.scss";

interface SelectFieldProps {
	title: string;
}

const SelectField = ({ title }: SelectFieldProps) => {
	return (
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
	);
};

export default SelectField;
