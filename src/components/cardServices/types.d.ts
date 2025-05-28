import type { HTMLAttributes } from 'react';
import type { Tag } from '../../pages/services/types';

export interface CardServicesProps extends HTMLAttributes<HTMLElement> {
	image: string;
	to: string;
	title: string;
	price: number;
	oldPrice?: number;
	rating: number;
	tags: Tag[];
}
