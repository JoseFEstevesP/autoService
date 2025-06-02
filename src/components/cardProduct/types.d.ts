import type { HTMLAttributes } from 'react';
import type { Tag } from '../../pages/product/types';

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
}
