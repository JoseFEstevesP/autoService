import { ContextToken } from '@/context/token/TokenContext';
import usePost from '@/hooks/usePost/usePost';
import { router } from '@/services/api/router';
import { useContext } from 'react';
import type { FieldValues, UseFormSetError } from 'react-hook-form';
import type { LoginDTOSchemaType } from '../dto/login.dto';
import type { APIResponse } from './types';

const useLogin = <T extends FieldValues>({
	setError,
}: {
	setError?: UseFormSetError<T>;
}) => {
	const { setToken } = useContext(ContextToken);
	const { usePostMutation } = usePost<APIResponse, LoginDTOSchemaType>();

	const { mutate, isPending, error } = usePostMutation(
		'login',
		{
			url: router.POST_USER_LOGIN,
		},
		{
			onSuccess: data => {
				setToken(data.token);
			},
			onError: error => {
				if (setError && error instanceof Error) {
					setError('root', {
						type: 'manual',
						message: error.message || 'Error during login',
					});
				}
			},
		},
	);

	const handleLogin = (data: LoginDTOSchemaType) => {
		mutate(data);
	};

	return {
		handleLogin,
		isLoading: isPending,
		error,
	};
};

export default useLogin;
