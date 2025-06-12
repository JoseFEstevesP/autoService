import type { ProductType } from '@/pages/catalog/components/servicesAndProducts/types';
import { useEffect, useState, type ReactNode } from 'react';
import { ContextCart } from './CartContext';

export const CartProvider = ({ children }: { children: ReactNode }) => {
	const [cart, setCart] = useState<ProductType[] | null>(
		localStorage.getItem('cart')
			? JSON.parse(localStorage.getItem('cart') as string)
			: null,
	);

	useEffect(() => {
		if (cart) {
			localStorage.setItem('cart', JSON.stringify(cart));
		} else {
			localStorage.removeItem('cart');
			setCart(null);
		}
	}, [cart]);

	return (
		<ContextCart.Provider value={{ cart, setCart }}>
			{children}
		</ContextCart.Provider>
	);
};
