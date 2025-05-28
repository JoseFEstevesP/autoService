import { useContext, useEffect, useState } from 'react';
import { router } from '../../../../../constants/router';
import { ContextMsg } from '../../../../../context/msg/MsgContext';
import useGet from '../../../../../hooks/useGet/useGet';
import type { ApiResponse } from '../../../../services/types';

const useGetServices = () => {
	const { useGetQuery } = useGet<ApiResponse>();
	const { setMsg } = useContext(ContextMsg);
	const [page] = useState(1);
	const name = 'services';

	const { data, isLoading, error } = useGetQuery(name, {
		url: router.GET_SERVICE,
		params: {
			populate: '*',
			'pagination[page]': page,
			'pagination[pageSize]': 5,
			'filters[catalog][$eq]': 'servicio',
		},
	});

	useEffect(() => {
		if (error) {
			setMsg({
				type: 'error',
				msg: `Error al cargar los servicios`,
			});
		}
	}, [error, setMsg]);

	useEffect(() => {
		if (!data?.data?.length) {
			setMsg({
				type: 'warning',
				msg: `No hay servicios disponibles`,
			});
		}
	}, [data, setMsg]);

	return { data: data?.data, error, isLoading };
};
export default useGetServices;
