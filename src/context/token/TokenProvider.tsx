import { useEffect, useState } from 'react';
import { ContextToken } from './TokenContext';
import type { TokenParameter } from './types';

export const TokenProvider = ({ children }: TokenParameter) => {
	const [token, setToken] = useState<string | null>(
		localStorage.getItem('token'),
	);

	useEffect(() => {
		if (token) {
			localStorage.setItem('token', token);
		} else {
			setToken(null);
		}
	}, [token]);

	return (
		<ContextToken.Provider value={{ token, setToken }}>
			{children}
		</ContextToken.Provider>
	);
};
