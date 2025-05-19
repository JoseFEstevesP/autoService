import CardProduct from '../../../../components/cardProduct/CardProduct';
import Section from '../../../../components/section/Section';

const productCar = [
	{
		image:
			'https://blog.continentalmotores.com/hubfs/Blog%20Continental%20Motores/Continental-motores-Cada-cuanto-le-haces-servicio-a-tu-auto.jpg',
		title: 'Kit Premium Lavado Motor',
		price: 'BS. 49.99',
		oldPrice: 'BS. 59.99',
		tag: 'Oferta',
	},
	{
		image:
			'https://blog.continentalmotores.com/hubfs/Blog%20Continental%20Motores/Continental-motores-Cada-cuanto-le-haces-servicio-a-tu-auto.jpg',
		title: 'Pulidor Profesional para Carrocería',
		price: 'BS. 89.50',
		oldPrice: 'BS. 99.90',
		tag: 'Nuevo',
	},
	{
		image:
			'https://blog.continentalmotores.com/hubfs/Blog%20Continental%20Motores/Continental-motores-Cada-cuanto-le-haces-servicio-a-tu-auto.jpg',
		title: 'Cera Líquida Brillante',
		price: 'BS. 65.00',
		oldPrice: 'BS. 75.00',
		tag: 'Popular',
	},
	{
		image:
			'https://blog.continentalmotores.com/hubfs/Blog%20Continental%20Motores/Continental-motores-Cada-cuanto-le-haces-servicio-a-tu-auto.jpg',
		title: 'Aspiradora Portátil para Auto',
		price: 'BS. 120.00',
		oldPrice: '',
		tag: 'Destacado',
	},
	{
		image:
			'https://blog.continentalmotores.com/hubfs/Blog%20Continental%20Motores/Continental-motores-Cada-cuanto-le-haces-servicio-a-tu-auto.jpg',
		title: 'Limpiador Profesional para Tapizados',
		price: 'BS. 55.50',
		oldPrice: 'BS. 65.00',
		tag: 'Oferta',
	},
	{
		image:
			'https://blog.continentalmotores.com/hubfs/Blog%20Continental%20Motores/Continental-motores-Cada-cuanto-le-haces-servicio-a-tu-auto.jpg',
		title: 'Kit Completo Limpieza Interior',
		price: 'BS. 150.00',
		oldPrice: 'BS. 180.00',
		tag: 'Combo',
	},
	{
		image:
			'https://blog.continentalmotores.com/hubfs/Blog%20Continental%20Motores/Continental-motores-Cada-cuanto-le-haces-servicio-a-tu-auto.jpg',
		title: 'Desengrasante Motor 500ml',
		price: 'BS. 35.00',
		oldPrice: '',
		tag: 'Básico',
	},
	{
		image:
			'https://blog.continentalmotores.com/hubfs/Blog%20Continental%20Motores/Continental-motores-Cada-cuanto-le-haces-servicio-a-tu-auto.jpg',
		title: 'Perfume para Auto - Aroma Fresco',
		price: 'BS. 25.00',
		oldPrice: 'BS. 30.00',
		tag: 'Oferta',
	},
	{
		image:
			'https://blog.continentalmotores.com/hubfs/Blog%20Continental%20Motores/Continental-motores-Cada-cuanto-le-haces-servicio-a-tu-auto.jpg',
		title: 'Limpiador Especial para Llantas',
		price: 'BS. 42.00',
		oldPrice: 'BS. 50.00',
		tag: 'Nuevo',
	},
	{
		image:
			'https://blog.continentalmotores.com/hubfs/Blog%20Continental%20Motores/Continental-motores-Cada-cuanto-le-haces-servicio-a-tu-auto.jpg',
		title: 'Protector Solar para Pintura',
		price: 'BS. 95.00',
		oldPrice: 'BS. 110.00',
		tag: 'Recomendado',
	},
];

const Product = ({ className }: { className?: string }) => {
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
				to: '/products',
				textLink: 'Ver más productos',
			}}
		>
			{productCar.map((product, index) => (
				<CardProduct
					key={index}
					image={product.image}
					title={product.title}
					price={product.price}
					oldPrice={product.oldPrice}
					tag={product.tag}
					handleClick={{
						buy: () => handleBuy(product.title),
						addToCart: () => handleAddToCart(product.title),
					}}
				/>
			))}
		</Section>
	);
};
export default Product;
