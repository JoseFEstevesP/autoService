import { createContext } from 'react';
import type { TokenContextType } from './types';

export const ContextToken = createContext<TokenContextType>({
	token: null,
	setToken: () => {},
});
