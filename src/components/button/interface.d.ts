import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { IconParameter } from '../icon/interface';

export interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	icon?: IconParameter;
	text?: string;
	children?: ReactNode;
}
