import { Button } from '@/components/ui/button/Button';
import type { NameIcon } from '@/components/ui/icon/types';
import useRenderInputs from '@/hooks/useRenderInputs/useRenderInputs';
import { msg } from '@/pages/user/msg';
import { router } from '@/services/api/router';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, type Dispatch, type SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import useRegister from '../../../register/hooks/useRegister/useRegister';
import type { APIRecoveryResponse } from '../../types';
import {
	RecoveryDTOSchema,
	type RecoveryDTOSchemaType,
} from './dto/recoveryDto';
import styles from './styles.module.scss';

const EmailForm = ({
	setRenderForm,
}: {
	setRenderForm: Dispatch<SetStateAction<boolean>>;
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
	} = useForm<RecoveryDTOSchemaType>({
		resolver: zodResolver(RecoveryDTOSchema),
	});

	const { renderInput } = useRenderInputs({ errors, register });

	const { handleRegister, isLoading, apiData } = useRegister<
		RecoveryDTOSchemaType,
		APIRecoveryResponse
	>({
		url: router.POST_USER_RECOVERY,
		name: 'recoveryUser',
		setError,
	});

	useEffect(() => {
		if (apiData?.code) {
			setRenderForm(true);
		}
	}, [apiData, setRenderForm]);

	return (
		<>
			<form
				onSubmit={handleSubmit(handleRegister)}
				className={styles.emailForm}
			>
				{renderInput({
					name: 'email',
					label: msg.email.input.label,
					type: 'email',
					placeholder: msg.email.input.placeholder,
					iconName: msg.email.input.iconName as NameIcon,
				})}
				<Button
					title={msg.page.btnRecovery}
					className={`${Button.styles['button--form']} `}
					text={msg.page.btnRecovery}
					type='submit'
					disabled={isLoading}
				/>
			</form>
		</>
	);
};
export default EmailForm;
