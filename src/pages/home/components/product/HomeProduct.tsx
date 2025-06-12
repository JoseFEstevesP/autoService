import CardProduct from '@/components/common/Cards/cardProduct/CardProduct';
import Loader from '@/components/ui/loader/Loader';
import Section from '@/components/ui/section/Section';
import useAddCart from '@/hooks/useAddCart/useAddCart';
import type {
	ProductsResponse,
	ProductType,
} from '@/pages/catalog/components/servicesAndProducts/types';
import useGetServicesAndProducts from '@/pages/catalog/hooks/useGetServicesAndProducts';
import styles from './styles.module.scss';

const HomeProduct = ({ className }: { className?: string }) => {
	const { data, error, isLoading } =
		useGetServicesAndProducts<ProductsResponse>({
			getName: 'producto',
		});
	const { addToCart } = useAddCart();

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
		// TODO: al darle a comprara pude ser un enlace que lleve a una ruta de compra mandando los datos del producto para gestionar la compra
		console.log(`Producto comprado: ${productName}`);
	};

	const handleAddToCart = (productName: ProductType) => {
		addToCart(productName);
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
						addToCart: () => handleAddToCart(product),
					}}
				/>
			))}
		</Section>
	);
};
export default HomeProduct;
