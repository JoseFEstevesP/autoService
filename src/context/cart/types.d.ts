import type { ProductType } from '@/pages/catalog/components/types';
import { ReactNode } from 'react';

export interface CartParameter {
	children: ReactNode;
}

export interface CartItem extends ProductType {
	quantity: number;
}

export interface CartContextType {
	cart: CartItem[] | null;
	addToCart: (product: ProductType) => void;
	removeFromCart: (id: string) => void;
	updateItemQuantity: (id: string, quantity: number) => void;
	clearCart: () => void;
}
