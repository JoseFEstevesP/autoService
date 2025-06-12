import { createContext } from 'react';
import type { CartContextType } from './types';

export const ContextCart = createContext<CartContextType>({
	cart: null,
	setCart: () => {},
});
