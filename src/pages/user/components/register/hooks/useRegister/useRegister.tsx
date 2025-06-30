import { ContextMsg } from '@/context/msg/MsgContext';
import { handleError } from '@/helper/functions/handleError/handleError';
import usePost from '@/hooks/usePost/usePost';
import { AxiosError } from 'axios';
import { useContext, useState } from 'react';
import type { FieldValues } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import type { UseRegisterType } from './types';

const useRegister = <T extends FieldValues, APIResponse>({
	url,
	name,
	setError,
	to,
}: UseRegisterType<T>) => {
	const navigate = useNavigate();
	const { setMsg } = useContext(ContextMsg);
	const { usePostMutation } = usePost<APIResponse, T>();
	const [apiData, setApiData] = useState<APIResponse>();
	const { mutate, isPending, error } = usePostMutation(
		name,
		{
			url,
		},
		{
			onSuccess: data => {
				console.log(' data:', data);
				setApiData(data);
				setMsg({
					type: 'default',
					msg: 'Registration successful! Welcome!',
				});
				if (to) navigate(to);
			},
			onError: error => {
				if (error instanceof AxiosError) {
					handleError<T>({
						error,
						setError,
					});
				}
			},
		},
	);

	const handleRegister = (data: T) => {
		mutate(data);
	};

	return {
		handleRegister,
		isLoading: isPending,
		error,
		apiData,
	};
};

export default useRegister;
