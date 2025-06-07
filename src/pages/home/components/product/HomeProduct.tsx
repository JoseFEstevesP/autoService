import CardProduct from '../../../../components/cardProduct/CardProduct';
import Loader from '../../../../components/loader/Loader';
import Section from '../../../../components/section/Section';
import type { ProductsResponse } from '../../../catalog/components/servicesAndProducts/types';
import useGetServicesAndProducts from '../../../catalog/hooks/useGetServicesAndProducts';
import styles from './styles.module.scss';

const HomeProduct = ({ className }: { className?: string }) => {
	const { data, error, isLoading } =
		useGetServicesAndProducts<ProductsResponse>({
			getName: 'producto',
		});

	if (isLoading) return <Loader className={styles.product__loader} />;
	if (error)
		return (
			<Loader
				className={`${styles.product__loader} ${styles['product__loader--error']}`}
				error
			/>
		);
	if (!data?.data?.length)
		return (
			<Loader
				className={`${styles.product__loader} ${styles['product__loader--warning']}`}
				warning
			/>
		);

	const handleBuy = (productName: string) => {
		console.log(`Producto comprado: ${productName}`);
	};

	const handleAddToCart = (productName: string) => {
		console.log(`Añadido al carrito: ${productName}`);
	};

	return (
		<Section
			className={`${className}`}
			title='Nuestros  Productos'
			description='Ofrecemos una amplia gama de productos para mantener tu vehículo en óptimas condiciones.'
			link={{
				to: '/catalog/products',
				textLink: 'Ver más productos',
			}}
		>
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
						addToCart: () => handleAddToCart(product.name),
					}}
				/>
			))}
		</Section>
	);
};
export default HomeProduct;
