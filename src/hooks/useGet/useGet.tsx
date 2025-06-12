import { FETCH_AXIOS } from '@/services/api/axios';
import type { ParamsDataGet } from '@/types/types';
import { useQuery } from '@tanstack/react-query';

const useGet = <TResponse, TParams extends ParamsDataGet = ParamsDataGet>() => {
	const getData = async ({
		url,
		params,
	}: {
		url: string;
		params?: TParams;
	}) => {
		const res = await FETCH_AXIOS.get<TResponse>(url, { params });
		return res.data;
	};

	const useGetQuery = (
		key: string,
		{ url, params }: { url: string; params?: TParams },
		options = {},
	) => {
		return useQuery<TResponse, Error>({
			queryKey: [key, params],
			queryFn: () => getData({ url, params }),
			...options,
		});
	};

	return { useGetQuery };
};

export default useGet;
