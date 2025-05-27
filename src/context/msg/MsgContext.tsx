import { createContext } from 'react';
import type { MsgContextType } from './types';

export const ContextMsg = createContext<MsgContextType>({
	msg: { type: 'default', msg: '' },
	setMsg: () => {},
});
