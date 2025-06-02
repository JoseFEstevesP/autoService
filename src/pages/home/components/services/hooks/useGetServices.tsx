import { useContext, useEffect, useState } from 'react';
import { router } from '../../../../../constants/router';
import { ContextMsg } from '../../../../../context/msg/MsgContext';
import useGet from '../../../../../hooks/useGet/useGet';
import type { ServicesResponse } from '../../../../catalog/components/servicesAndProducts/types';

const useGetServices = () => {
	const { useGetQuery } = useGet<ServicesResponse>();
	const { setMsg } = useContext(ContextMsg);
	const [page] = useState(1);
	const name = 'services';

	const { data, isLoading, error } = useGetQuery(name, {
		url: router.GET_SERVICE,
		params: {
			populate: '*',
			'pagination[page]': page,
			'pagination[pageSize]': 10,
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
		if (!isLoading && !data?.data && !error) {
			setMsg({
				type: 'warning',
				msg: `No hay servicios disponibles`,
			});
		}
	}, [data, error, isLoading, setMsg]);

	return { data: data?.data, error, isLoading };
};
export default useGetServices;
