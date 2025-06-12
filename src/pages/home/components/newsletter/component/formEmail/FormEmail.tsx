import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
	NewsletterEmailSchema,
	type NewsletterEmailSchemaType,
} from './dto/newsletterEmail';
import msg from './msg';
import styles from './styles.module.scss';
import useRenderInputs from '@/hooks/useRenderInputs/useRenderInputs';
import { Button } from '@/components/ui/button/Button';
import type { NameIcon } from '@/components/ui/icon/types';

const FormEmail = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		// setError, // se envia al hook que haga la petición de la api y se recibe el error
	} = useForm<NewsletterEmailSchemaType>({
		resolver: zodResolver(NewsletterEmailSchema),
	});

	const { renderInput } = useRenderInputs<NewsletterEmailSchemaType>({
		register,
		errors,
	});

	return (
		<form
			onSubmit={handleSubmit(async data => console.log(data))}
			className={styles.formEmail}
		>
			{renderInput({
				name: 'email',
				placeholder: msg.from.email.placeholder,
				type: 'email',
			})}
			<Button
				type='submit'
				text={msg.from.btn.text}
				icon={{
					iconName: msg.from.btn.icon as NameIcon,
				}}
				className={`${Button.styles['button--default']} ${styles.formEmail__btn}`}
			/>
		</form>
	);
};
export default FormEmail;
