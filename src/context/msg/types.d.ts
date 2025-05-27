import { ReactNode } from 'react';

export interface MsgParameter {
	children: ReactNode;
}

export interface MsgState {
	type: 'default' | 'error';
	msg: string;
}

export interface MsgContextType {
	msg: MsgState;
	setMsg: (msg: MsgState) => void;
}
