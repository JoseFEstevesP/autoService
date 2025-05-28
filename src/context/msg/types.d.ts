import { ReactNode } from 'react';

export interface MsgParameter {
	children: ReactNode;
}

export interface MsgState {
	type: 'default' | 'error' | 'warning';
	msg: string;
}

export interface MsgContextType {
	msg: MsgState;
	setMsg: (msg: MsgState) => void;
}
