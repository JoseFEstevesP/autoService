import type { HTMLAttributes } from 'react';
import type { NameIcon } from '../../../../components/icon/interface';

export interface CardPriceProps extends HTMLAttributes<HTMLElement> {
	description: string;
	iconName: NameIcon;
}
