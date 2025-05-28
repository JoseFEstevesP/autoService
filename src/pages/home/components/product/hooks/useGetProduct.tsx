import { useContext, useEffect, useState } from 'react';
import { router } from '../../../../../constants/router';
import { ContextMsg } from '../../../../../context/msg/MsgContext';
import useGet from '../../../../../hooks/useGet/useGet';
import type { ApiResponse } from '../../../../product/types';

const useGetProduct = () => {
	const { useGetQuery } = useGet<ApiResponse>();
	const { setMsg } = useContext(ContextMsg);
	const [page] = useState(1);
	const name = 'services';

	const { data, isLoading, error } = useGetQuery(name, {
		url: router.GET_PRODUCT,
		params: {
			populate: '*',
			'pagination[page]': page,
			'pagination[pageSize]': 2,
			'filters[catalog][$eq]': 'producto',
		},
	});

	useEffect(() => {
		if (error) {
			setMsg({
				type: 'error',
				msg: `Error al cargar los productos`,
			});
		}
	}, [error, setMsg]);

	useEffect(() => {
		if (!isLoading && !data?.data) {
			setMsg({
				type: 'warning',
				msg: `No hay productos disponibles`,
			});
		}
	}, [data, isLoading, setMsg]);

	return { data: data?.data, error, isLoading };
};
export default useGetProduct;
