import { useContext, useEffect, useState } from 'react';
import { router } from '../../../../../constants/router';
import { ContextMsg } from '../../../../../context/msg/MsgContext';
import useGet from '../../../../../hooks/useGet/useGet';
import type { ProductsResponse } from '../../../../catalog/components/servicesAndProducts/types';

const useGetProduct = () => {
	const { useGetQuery } = useGet<ProductsResponse>();
	const { setMsg } = useContext(ContextMsg);
	const [page] = useState(1);
	const name = 'services';

	const { data, isLoading, error } = useGetQuery(name, {
		url: router.GET_PRODUCT,
		params: {
			populate: '*',
			'pagination[page]': page,
			'pagination[pageSize]': 10,
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
		if (!isLoading && !data?.data && !error) {
			setMsg({
				type: 'warning',
				msg: `No hay productos disponibles`,
			});
		}
	}, [data, error, isLoading, setMsg]);

	return { data: data?.data, error, isLoading };
};
export default useGetProduct;
