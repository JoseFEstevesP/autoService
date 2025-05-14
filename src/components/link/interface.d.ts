import type { HTMLAttributes } from 'react';
import type { IconParameter } from '../icon/interface';

export interface LinkProp extends HTMLAttributes<HTMLAnchorElement> {
	to: string;
	text?: string;
	icon?: IconParameter;
}
