import { ContextCart } from '@/context/cart/CartContext';
import type { ProductType } from '@/pages/catalog/components/servicesAndProducts/types';
import { useContext } from 'react';

const useAddCart = () => {
	const { cart, setCart } = useContext(ContextCart);

	const addToCart = (product: ProductType) => {
		setCart([...(cart || []), product]);
	};

	return { addToCart };
};
export default useAddCart;
