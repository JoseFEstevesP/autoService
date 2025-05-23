import type { HTMLAttributes } from 'react';
import type { NameIcon } from '../icon/types';

export interface CardDecorativeProps extends HTMLAttributes<HTMLElement> {
	description: string;
	iconName: NameIcon;
}
