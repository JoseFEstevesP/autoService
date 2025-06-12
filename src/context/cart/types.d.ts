import { ReactNode } from 'react';
import type { ProductType } from '../../pages/catalog/components/servicesAndProducts/types';

export interface CartParameter {
	children: ReactNode;
}

export interface CartContextType {
	cart: ProductType[] | null;
	setCart: (cart: ProductType[] | null) => void;
}
