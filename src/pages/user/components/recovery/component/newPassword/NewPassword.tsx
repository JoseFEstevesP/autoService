import { Button } from '@/components/ui/button/Button';
import useRenderInputs from '@/hooks/useRenderInputs/useRenderInputs';
import { msg } from '@/pages/user/msg';
import { router } from '@/services/api/router';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, type Dispatch, type SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import useRegister from '../../../register/hooks/useRegister/useRegister';
import type { APINextPasswordResponse } from '../../types';
import {
	NewPasswordDTOSchema,
	type NewPasswordDTOSchemaType,
} from './dto/newPasswordDto';
import styles from './styles.module.scss';

const NewPassword = ({
	setRenderForm,
}: {
	setRenderForm: Dispatch<SetStateAction<boolean>>;
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
	} = useForm<NewPasswordDTOSchemaType>({
		resolver: zodResolver(NewPasswordDTOSchema),
	});

	const { renderInput } = useRenderInputs({ errors, register });

	const { handleRegister, isLoading, apiData } = useRegister<
		NewPasswordDTOSchemaType,
		APINextPasswordResponse
	>({
		url: router.POST_USER_NEW_PASSWORD,
		name: 'newPassword',
		setError,
		to: '/login',
	});

	useEffect(() => {
		if (apiData) {
			setRenderForm(false);
		}
	}, [apiData, setRenderForm]);

	return (
		<form
			onSubmit={handleSubmit(handleRegister)}
			className={styles.newPassword}
		>
			{renderInput({
				name: 'code',
				label: 'Code',
				type: 'text',
				placeholder: 'Code',
				iconName: 'padlock',
			})}
			{renderInput({
				name: 'newPassword',
				label: 'New Password',
				type: 'password',
				placeholder: 'New Password',
				iconName: 'password',
			})}
			<Button
				title={msg.page.btnSubmit}
				className={`${Button.styles['button--form']} `}
				text={msg.page.btnSubmit}
				type='submit'
				disabled={isLoading}
			/>
		</form>
	);
};
export default NewPassword;
