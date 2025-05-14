import type { HTMLAttributes } from 'react';
import type { LinkProps } from 'react-router-dom';
import type { IconParameter } from '../icon/interface';

export interface LinkProp
	extends HTMLAttributes<LinkProps & HTMLAnchorElement> {
	to: string;
	text?: string;
	icon?: IconParameter;
	target?: string;
}
