import type { HTMLAttributes } from 'react';

export interface CardProductProps extends HTMLAttributes<HTMLElement> {
	image: string;
	price: string;
	title: string;
	oldPrice?: string;
	tag?: string;
	handleClick?: {
		buy?: () => void;
		addToCart?: () => void;
	};
}
