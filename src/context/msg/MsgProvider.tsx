import { useState, type ReactNode } from 'react';
import { ContextMsg } from './MsgContext';
import type { MsgState } from './types';

export const MsgProvider = ({ children }: { children: ReactNode }) => {
	const [msg, setMsg] = useState<MsgState>({ type: 'default', msg: '' });
	return (
		<ContextMsg.Provider value={{ msg, setMsg }}>
			{children}
		</ContextMsg.Provider>
	);
};
