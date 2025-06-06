import type { HTMLAttributes } from 'react';
import type { Tag } from '../../pages/services/types';

export interface CardServicesProps extends HTMLAttributes<HTMLElement> {
	image: string;
	handleData: () => void;
	title: string;
	price: number;
	oldPrice?: number;
	rating: number;
	tags: Tag[];
	disabled?: boolean;
}
