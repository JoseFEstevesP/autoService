import { useContext, useState } from 'react';
import { ContextMsg } from '../../../../../context/msg/MsgContext';
import useGet from '../../../../../hooks/useGet/useGet';
import type { ApiResponse } from '../../../../services/types';

const useGetServices = () => {
	const { useGetQuery } = useGet<ApiResponse>();
	const { setMsg } = useContext(ContextMsg);
	const [page] = useState(1);
	const name = 'services';

	const { data, isLoading, error } = useGetQuery(name, {
		url: '/products',
		params: {
			populate: '*',
			'pagination[page]': page,
			'pagination[pageSize]': 5,
			'filters[catalog][$eq]': 'servicio',
		},
	});
	if (error) {
		setMsg({
			msg: 'Error al cargar los servicios',
			type: 'error',
		});
	}
	return { data: data?.data, isLoading, error };
};
export default useGetServices;
