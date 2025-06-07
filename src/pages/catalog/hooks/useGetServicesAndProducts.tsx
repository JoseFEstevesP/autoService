import { useContext, useEffect, useState } from 'react';
import { router } from '../../../constants/router';
import { ContextMsg } from '../../../context/msg/MsgContext';
import useGet from '../../../hooks/useGet/useGet';
import type { FilterType } from '../components/servicesAndProducts/filter/dto/Filter';
import type {
	GetName,
	ProductsResponse,
	ServicesResponse,
} from '../components/servicesAndProducts/types';

const useGetServicesAndProducts = <
	T extends ServicesResponse | ProductsResponse,
>({
	initialFilters,
	getName,
}: {
	initialFilters?: FilterType;
	getName: GetName;
}) => {
	const { useGetQuery } = useGet<T>();
	const { setMsg } = useContext(ContextMsg);
	const [filters, setFilters] = useState<FilterType>({
		page: 1,
		pageSize: 10,
		...initialFilters,
	});

	const buildParams = () => {
		const baseParams: Record<string, string | number | boolean> = {
			populate: '*',
			'pagination[page]': filters.page || 1,
			'pagination[pageSize]': filters.pageSize || 20,
			'filters[catalog][$eq]': getName,
		};

		if (filters.search) {
			baseParams['filters[name][$contains]'] = filters.search;
		}

		if (filters.category) {
			baseParams['filters[category][name][$eq]'] = filters.category;
		}

		if (filters.minPrice || filters.maxPrice) {
			if (filters.minPrice) {
				baseParams['filters[price][$gte]'] = filters.minPrice;
			}
			if (filters.maxPrice) {
				baseParams['filters[price][$lte]'] = filters.maxPrice;
			}
		}

		if (filters.sortBy) {
			const sortOrder = filters.sortOrder || 'asc';
			baseParams['sort'] = `${filters.sortBy}:${sortOrder}`;
		}

		if (filters.tags) {
			baseParams['filters[tags][name][$in]'] = Array.isArray(filters.tags)
				? filters.tags.join(',')
				: filters.tags;
		}

		return baseParams;
	};
	const { data, isLoading, error, refetch, isFetching } = useGetQuery(getName, {
		url: router.GET_SERVICE,
		params: buildParams(),
	});

	const updateFilters = (newFilters: Partial<FilterType>) => {
		setFilters(prev => ({ ...prev, ...newFilters }));
	};

	useEffect(() => {
		refetch();
	}, [filters, refetch]);

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

	return {
		data: data,
		error,
		isLoading,
		filters,
		updateFilters,
		refetch,
		isFetching,
	};
};

export default useGetServicesAndProducts;
