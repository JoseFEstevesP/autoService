import { useCallback } from 'react';
import CardServices from '../../../../../components/cardServices/CardServices';
import Loader from '../../../../../components/loader/Loader';
import Pagination from '../../../../../components/pagination/Pagination';
import { Order } from '../../../../../data';
import { transformEnum } from '../../../../../helper/functions/transformEnum/transformEnum';
import useGetServicesAndProducts from '../../../hooks/useGetServicesAndProducts';
import type { FilterType } from '../filter/dto/FilterDto';
import Filters from '../filter/Filters';
import type { ServicesResponse } from '../types';
import useServiceDetailModal from './components/serviceDetailModal/hooks/useServiceDetailModal';
import ServiceDetailModal from './components/serviceDetailModal/ServiceDetailModal';
import styles from './styles.module.scss';

const initialFilters: FilterType = {
	search: '',
	sortBy: 'name',
	sortOrder: Order.Asc,
	minPrice: undefined,
	maxPrice: undefined,
	category: '',
	tags: '',
	page: 1,
	pageSize: 20,
};

const sortBy = [
	{ value: 'name', label: 'Nombre' },
	{ value: 'price', label: 'Precio' },
	{ value: 'rating', label: 'Calificación' },
];
const categories = [
	{ value: 'electronics', label: 'Electrónicos' },
	{ value: 'clothing', label: 'Ropa' },
	{ value: 'toys', label: 'Juguetes' },
];
const tags = [
	{ value: 'popular', label: 'Popular' },
	{ value: 'nuevo', label: 'Nuevo' },
	{ value: 'oferta', label: 'En oferta' },
];

const Services = () => {
	const { data, error, isLoading, updateFilters, filters, isFetching } =
		useGetServicesAndProducts<ServicesResponse>({
			getName: 'servicio',
			initialFilters: initialFilters,
		});
	const { dataDetail, handleData, serviceDetailModal } =
		useServiceDetailModal();

	const onFilter = useCallback(
		(filter: FilterType) => {
			updateFilters(filter);
		},
		[updateFilters],
	);

	const handleReset = useCallback(
		(resetInputs: (data: FilterType) => void) => {
			updateFilters(initialFilters);
			resetInputs(initialFilters);
		},
		[updateFilters],
	);

	if (isLoading) return <Loader className={styles.services__loader} />;

	if (error)
		return (
			<Loader
				className={`${styles.services__loader} ${styles['services__loader--error']}`}
				error
			/>
		);

	if (!data?.data?.length)
		return (
			<Loader
				className={`${styles.services__loader} ${styles['services__loader--warning']}`}
				warning
			/>
		);

	return (
		<div className={styles.services}>
			<Filters
				onFilter={onFilter}
				resetFilter={handleReset}
				data={{
					sortOrder: transformEnum({ transformEnum: Order }),
					sortBy,
					categories,
					tags,
				}}
				initialValues={filters}
				disabled={isFetching}
			/>
			<ServiceDetailModal
				serviceDetailModal={serviceDetailModal}
				dataDetail={dataDetail}
			/>
			<div className={styles.services__content}>
				{data.data.map(service => (
					<CardServices
						key={service.id}
						image={service.image.url}
						handleData={() => handleData(service)}
						title={service.name}
						price={service.price}
						oldPrice={service.taxable}
						rating={service.rating}
						tags={service.tags}
						disabled={isFetching}
					/>
				))}
			</div>
			{data.pageCount > 1 && (
				<Pagination
					pages={data.pageCount}
					currentPage={data.page}
					handleData={page => updateFilters({ page })}
				/>
			)}
		</div>
	);
};
export default Services;
