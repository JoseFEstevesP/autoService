import { ContextMsg } from '@/context/msg/MsgContext';
import { ContextToken } from '@/context/token/TokenContext';
import usePost from '@/hooks/usePost/usePost';
import { router } from '@/services/api/router';
import { AxiosError } from 'axios';
import { useContext } from 'react';
import type { LoginDTOSchemaType } from '../dto/login.dto';
import type { APIResponse } from './types';

const useLogin = () => {
	const { setMsg } = useContext(ContextMsg);
	const { setToken } = useContext(ContextToken);
	const { usePostMutation } = usePost<APIResponse, LoginDTOSchemaType>();

	const { mutate, isPending, error } = usePostMutation(
		'login',
		{
			url: router.POST_USER_LOGIN,
		},
		{
			onSuccess: data => {
				console.log(' data:', data);
				setToken(data.token);
			},
			onError: error => {
				console.log(' error:', error);
				if (error instanceof AxiosError) {
					setMsg({
						type: 'error',
						msg:
							(error.response?.data.error.message as string) ||
							'Error logging in',
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
