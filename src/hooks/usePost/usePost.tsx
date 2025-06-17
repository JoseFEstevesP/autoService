import { FETCH_AXIOS } from '@/services/api/axios';
import type { ParamsDataGet } from '@/types/types';
import { useMutation, type UseMutationOptions } from '@tanstack/react-query';

const usePost = <
	TResponse,
	TPayload = unknown,
	TParams extends ParamsDataGet = ParamsDataGet,
>() => {
	const postData = async ({
		url,
		payload,
		params,
	}: {
		url: string;
		payload: TPayload;
		params?: TParams;
	}) => {
		const res = await FETCH_AXIOS.post<TResponse>(url, payload, { params });
		return res.data;
	};

	const usePostMutation = (
		key: string,
		{ url, params }: { url: string; params?: TParams },
		options?: UseMutationOptions<TResponse, Error, TPayload>,
	) => {
		return useMutation<TResponse, Error, TPayload>({
			mutationKey: [key, params],
			mutationFn: (payload: TPayload) => postData({ url, payload, params }),
			...options,
		});
	};

	return { usePostMutation };
};

export default usePost;
