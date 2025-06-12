import { useCallback } from 'react';
import CardProduct from '../../../../../components/cardProduct/CardProduct';
import Loader from '../../../../../components/loader/Loader';
import Pagination from '../../../../../components/pagination/Pagination';
import { Order } from '../../../../../data';
import { transformEnum } from '../../../../../helper/functions/transformEnum/transformEnum';
import useAddCart from '../../../../../hooks/useAddCart/useAddCart';
import useGetServicesAndProducts from '../../../hooks/useGetServicesAndProducts';
import type { FilterType } from '../filter/dto/FilterDto';
import Filters from '../filter/Filters';
import type { ProductsResponse, ProductType } from '../types';
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

const Products = () => {
	const { data, error, isLoading, updateFilters, filters, isFetching } =
		useGetServicesAndProducts<ProductsResponse>({
			getName: 'producto',
			initialFilters: initialFilters,
		});
	const { addToCart } = useAddCart();

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

	if (isLoading) return <Loader className={styles.products__loader} />;

	if (error)
		return (
			<Loader
				className={`${styles.products__loader} ${styles['products__loader--error']}`}
				error
			/>
		);

	if (!data?.data?.length)
		return (
			<Loader
				className={`${styles.products__loader} ${styles['products__loader--warning']}`}
				warning
			/>
		);

	const handleBuy = (productName: string) => {
		console.log(`Producto comprado: ${productName}`);
	};

	const handleAddToCart = (productName: ProductType) => {
		addToCart(productName);
	};

	return (
		<div className={styles.products}>
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
			<div className={styles.products__content}>
				{data.data.map(product => (
					<CardProduct
						key={product.id}
						image={product.image.url}
						title={product.name}
						price={product.price.toFixed(2)}
						oldPrice={product.taxable.toFixed(2)}
						tags={product.tags}
						brand={product.brand}
						model={product.model}
						rating={product.rating}
						handleClick={{
							buy: () => handleBuy(product.name),
							addToCart: () => handleAddToCart(product),
						}}
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
export default Products;
