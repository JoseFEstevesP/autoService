import type { ProductType } from '@/pages/catalog/components/types';
import { useEffect, useState, type ReactNode } from 'react';
import { ContextCart } from './CartContext';
import type { CartItem } from './types';

export const CartProvider = ({ children }: { children: ReactNode }) => {
	const [cart, setCart] = useState<CartItem[] | null>(
		localStorage.getItem('cart')
			? JSON.parse(localStorage.getItem('cart') as string)
			: null,
	);

	useEffect(() => {
		if (cart) {
			localStorage.setItem('cart', JSON.stringify(cart));
		} else {
			localStorage.removeItem('cart');
		}
	}, [cart]);

	const addToCart = (product: ProductType) => {
		setCart(prevCart => {
			if (!prevCart) {
				return [{ ...product, quantity: 1 }];
			}

			const existingItemIndex = prevCart.findIndex(
				item => item.id === product.id,
			);

			if (existingItemIndex >= 0) {
				const updatedCart = [...prevCart];
				updatedCart[existingItemIndex] = {
					...updatedCart[existingItemIndex],
					quantity: (updatedCart[existingItemIndex].quantity ?? 1) + 1,
				};
				return updatedCart;
			}

			return [...prevCart, { ...product, quantity: 1 }];
		});
	};

	const removeFromCart = (id: string) => {
		setCart(prevCart => {
			if (!prevCart) return null;
			const newCart = prevCart.filter(item => String(item.id) !== String(id));
			return newCart.length ? newCart : null;
		});
	};

	const updateItemQuantity = (id: string, quantity: number) => {
		if (quantity < 1) {
			removeFromCart(id);
			return;
		}

		setCart(prevCart => {
			if (!prevCart) return null;
			return prevCart.map(item =>
				String(item.id) === String(id) ? { ...item, quantity } : item,
			);
		});
	};

	const clearCart = () => {
		setCart(null);
	};

	return (
		<ContextCart.Provider
			value={{
				cart,
				addToCart,
				removeFromCart,
				updateItemQuantity,
				clearCart,
			}}
		>
			{children}
		</ContextCart.Provider>
	);
};
