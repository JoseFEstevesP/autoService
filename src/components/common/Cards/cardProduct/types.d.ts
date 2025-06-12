import type { Tag } from '@/pages/catalog/components/servicesAndProducts/types';
import type { HTMLAttributes } from 'react';

export interface CardProductProps extends HTMLAttributes<HTMLElement> {
	image: string;
	price: number | string;
	title: string;
	oldPrice?: number | string;
	tags?: Tag[];
	brand?: string;
	model?: Model;
	rating?: number;
	handleClick?: {
		buy?: () => void;
		addToCart?: () => void;
	};
	disabled?: boolean;
}
