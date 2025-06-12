import type { Tag } from '@/pages/catalog/components/servicesAndProducts/types';
import type { HTMLAttributes } from 'react';

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
