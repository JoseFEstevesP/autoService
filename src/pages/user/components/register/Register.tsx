import { Button } from '@/components/ui/button/Button';
import type { NameIcon } from '@/components/ui/icon/types';
import useRenderInputs from '@/hooks/useRenderInputs/useRenderInputs';
import { router } from '@/services/api/router';
import type { APIRegisterResponse } from '@/types/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { msg } from '../../msg';
import {
	RegisterDTOSchema,
	type RegisterDTOSchemaType,
} from './dto/registerDto';
import useRegister from './hooks/useRegister/useRegister';
import styles from './styles.module.scss';

const Register = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
	} = useForm<RegisterDTOSchemaType>({
		resolver: zodResolver(RegisterDTOSchema),
	});

	const { handleRegister, isLoading } = useRegister<
		RegisterDTOSchemaType,
		APIRegisterResponse
	>({
		url: router.POST_USER_REGISTER,
		name: 'registerUser',
		setError,
		to: '/',
	});

	const { renderInput } = useRenderInputs<RegisterDTOSchemaType>({
		errors,
		register,
	});

	return (
		<section className={styles.register}>
			<form
				onSubmit={handleSubmit(handleRegister)}
				className={styles.register__form}
			>
				{renderInput({
					name: 'username',
					label: msg.username.input.label,
					placeholder: msg.username.input.placeholder,
					iconName: msg.username.input.iconName as NameIcon,
				})}
				{renderInput({
					name: 'name',
					label: msg.name.input.label,
					placeholder: msg.name.input.placeholder,
					iconName: msg.name.input.iconName as NameIcon,
				})}
				{renderInput({
					name: 'dni',
					label: msg.dni.input.label,
					placeholder: msg.dni.input.placeholder,
					iconName: msg.dni.input.iconName as NameIcon,
				})}
				{renderInput({
					name: 'phone',
					label: msg.phone.input.label,
					placeholder: msg.phone.input.placeholder,
					iconName: msg.phone.input.iconName as NameIcon,
				})}
				{renderInput({
					name: 'email',
					label: msg.email.input.label,
					type: 'email',
					placeholder: msg.email.input.placeholder,
					iconName: msg.email.input.iconName as NameIcon,
				})}
				{renderInput({
					name: 'password',
					label: msg.password.input.label,
					type: 'password',
					placeholder: msg.password.input.placeholder,
					iconName: msg.password.input.iconName as NameIcon,
				})}

				<Button
					title={msg.page.btnRegister}
					className={`${Button.styles['button--form']} ${styles.register__btn}`}
					text={msg.page.btnRegister}
					type='submit'
					disabled={isLoading}
				/>
			</form>
		</section>
	);
};

export default Register;
