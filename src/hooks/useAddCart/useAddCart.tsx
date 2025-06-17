import { ContextCart } from '@/context/cart/CartContext';
import { useContext } from 'react';

const useAddCart = () => {
	const { addToCart } = useContext(ContextCart);

	return { addToCart };
};
export default useAddCart;
