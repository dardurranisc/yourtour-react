import Button from "@commons/Button";
import Container from "@commons/Container";
import Form from "@commons/Form";
import CheckboxAgree from "@commons/Form/CheckboxAgree";
import FormBlock from "@commons/Form/FormBlock";
import FormItem from "@commons/Form/FormItem";
import InputField from "@commons/Form/InputField";
import Radio from "@commons/Form/Radio";
import SelectField from "@commons/Form/SelectField";
import TextAreaField from "@commons/Form/TextAreaField";
import Section from "@commons/Section";
import SectionHeader from "@commons/SectionHeader";

const CreateTour = () => {
	return (
		<Section id="create-tour">
			<Container>
				<SectionHeader
					variant="createTour"
					title="Собери свой тур"
					description={
						<>
							Идейные соображения высшего порядка,
							<br />а также рамки и место обучения кадров
						</>
					}
				/>
				<Form>
					<FormBlock>
						<InputField
							type="name"
							title="Имя"
							placeholder="Введите Ваше имя"
						/>
						<FormItem>
							<SelectField title="Направление" />
						</FormItem>
					</FormBlock>
					<FormBlock>
						<FormItem>
							<InputField
								type="email"
								title="Email"
								placeholder="example@mail.com"
							/>
						</FormItem>
						<FormItem>
							<InputField
								title="Телефон"
								type="tel"
								name="tel"
								placeholder="+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _"
								pattern="^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$"
								maxLength={12}
								required
							/>
						</FormItem>
					</FormBlock>
					<FormBlock>
						<FormItem>
							<InputField
								type="date"
								title="Дата от"
								min="2024-01-01"
								max="2030-12-31"
								required
							/>
						</FormItem>
						<FormItem>
							<InputField
								type="date"
								title="Дата до"
								min="2024-01-01"
								max="2030-12-31"
								required
							/>
						</FormItem>
					</FormBlock>
					<FormBlock>
						<TextAreaField title="Комментарий" />
					</FormBlock>
					<FormBlock direction="vertical">
						<Radio title="Вам есть 18 лет?"></Radio>
					</FormBlock>
					<FormBlock>
						<CheckboxAgree />
					</FormBlock>
					<FormBlock mobileDirection="row">
						<Button type="submit" variant="tertiary">
							Найти тур
						</Button>
						<Button type="reset" variant="reset">
							Сбросить
						</Button>
					</FormBlock>
				</Form>
			</Container>
		</Section>
	);
};

export default CreateTour;
