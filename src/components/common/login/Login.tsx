import { Button } from '@/components/ui/button/Button';
import type { NameIcon } from '@/components/ui/icon/types';
import LinkPer from '@/components/ui/link/LinkPer';
import { ContextToken } from '@/context/token/TokenContext';
import useRenderInputs from '@/hooks/useRenderInputs/useRenderInputs';
import { msg } from '@/pages/user/msg';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { LoginDTOSchema, type LoginDTOSchemaType } from './dto/login.dto';
import useLogin from './hooks/useLogin';
import styles from './styles.module.scss';
import type { LoginProperty } from './types';

export const Login = ({ to = '' }: LoginProperty) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginDTOSchemaType>({ resolver: zodResolver(LoginDTOSchema) });

	const { handleLogin, isLoading } = useLogin();

	const { renderInput } = useRenderInputs<LoginDTOSchemaType>({
		errors,
		register,
	});

	const { token } = useContext(ContextToken);
	if (token) return <Navigate to={to} />;

	return (
		<section className={styles.login}>
			<form onSubmit={handleSubmit(handleLogin)} className={styles.login__form}>
				{renderInput({
					name: 'identifier',
					label: msg.identifier.input.label,
					placeholder: msg.identifier.input.placeHolder,
					iconName: msg.identifier.input.iconName as NameIcon,
				})}
				{renderInput({
					name: 'password',
					label: msg.password.input.label,
					placeholder: msg.password.input.placeHolder,
					type: 'password',
					iconName: msg.password.input.iconName as NameIcon,
				})}
				<Button
					title={msg.page.btn}
					className={Button.styles['button--form']}
					text={msg.page.btn}
					type='submit'
					disabled={isLoading}
				/>
			</form>
			<div className={styles.login__linksContainer}>
				<LinkPer
					to='/register'
					className={styles.login__links}
					text={msg.page.register}
					icon={{
						iconName: 'link',
						className: styles.login__linksIcon,
					}}
				/>
				<LinkPer
					to='/recovery'
					className={styles.login__links}
					text={msg.page.forgotPassword}
					icon={{
						iconName: 'link',
						className: styles.login__linksIcon,
					}}
				/>
			</div>
		</section>
	);
};
